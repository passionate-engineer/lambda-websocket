/**
 * WebSocket wrapper on Lambda
 *
 * @class LambdaWebSocket
 */
class LambdaWebSocket {

  /**
   *
   *
   * @param {String} tableName
   * @param {Object} event
   * @param {Object} context
   * @param {Function} callback
   * @memberof LambdaWebSocket
   */
  setConfig (tableName, event, context, callback) {
    this.connectionTableName = tableName
    this.event = event
    this.context = context
    this.callback = callback

    const AWS = require('aws-sdk');
    AWS.config.update({ region: process.env.AWS_REGION });
    const DDB = new AWS.DynamoDB({ apiVersion: '2012-10-08' });
    require('aws-sdk/clients/apigatewaymanagementapi');

    this.apigwManagementApi = new AWS.ApiGatewayManagementApi({
      apiVersion: "2018-11-29",
      endpoint: this.event.requestContext.domainName + "/" + this.event.requestContext.stage
    });
  }

  /**
   * Get websocket data.
   *
   * @returns {Any} data
   * @memberof LambdaWebSocket
   */
  getData () {
    return JSON.parse(this.event.body).data
  }

  /**
   * Send data.
   *
   * @param {String} action
   * @param {String} data
   * @param {String} [connectionId=Own connection Id]
   * @memberof LambdaWebSocket
   */
  send (action, data, connectionId = event.requestContext.connectionId) {
    const postParams = {
      Data: {action: action, data: data},
      ConnectionId: event.requestContext.connectionId
    };

    apigwManagementApi.postToConnection(postParams, (err) => {
      if (err) {
        if (err.statusCode === 410) {
          console.log("Found stale connection, deleting " + postParams.connectionId);
          DDB.deleteItem({
            TableName: process.env.TABLE_NAME,
            Key: { connectionId: { S: postParams.connectionId } }
          });
        } else {
          console.log("Failed to post. Error: " + JSON.stringify(err));
        }
      }
    })

    this.callback(null, {
      statusCode: 200,
      body: "Success"
    });
  }

  /**
   * Send data to everyone.
   *
   * @param {String} action
   * @param {String} data
   * @memberof LambdaWebSocket
   */
  sendToEveryone (action, data) {
    this._getEveryone.then((everyone) => {
      everyone.forEach((connectionId) => {
        this.send(action, data, connectionId)
      })
    })
  }

  /**
   * Send response.
   *
   * @memberof LambdaWebSocket
   */
  _response (statusCode, body) {
    this.callback(null, {
      statusCode: statusCode,
      body: JSON.stringify(doby)
    });
  }

  /**
   * Get evenyone.
   *
   * @returns {Array} everyone
   * @memberof LambdaWebSocket
   */
  _getEveryone () {
    return new Promise((resolve) => {
      const scanParams = {
        TableName: process.env.TABLE_NAME,
        ProjectionExpression: "connectionId"
      };

      DDB.scan(scanParams, function (err, data) {
        if (err) {
          this._response(500, err)
          resolve([])
        } else {
          resolve(data.Items.map((item) => {
            return item.ConnectionId.S
          }))
        }
      })
    })
  }
}
export default new LambdaWebSocket()