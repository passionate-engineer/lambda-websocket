module.exports = function () {
  const sha512 = require('js-sha512').sha512
  
  const AWS = require('aws-sdk')
  const DDB = new AWS.DynamoDB({ apiVersion: '2012-10-08' })
  
  const boardId = sha512((new Date()).getTime() + '')
  const boardTitle = this.request.boardTitle
  
  if (!boardTitle) {
    return this.response('error', 'boartitle require') 
  }
  
  const putParams = {
    TableName: process.env.BOARD_TABLE_NAME,
    Item: {
      boardId: { S: boardId },
      boardTitle: { S: boardTitle },
      sticky: { S: '[]' },
      stickyPosition: { S: '[]' }
    }
  }
    
  try {
    DDB.putItem(putParams, (err) => {
      if (err) throw err
      this.responseAll('createBoard', {message: 'Board created.', boardId: boardId})
    });
  } catch(err) {
    this.response('error', err.stack)
  }
}