<a name="LambdaWebSocket"></a>

## LambdaWebSocket
**Kind**: global class  

* [LambdaWebSocket](#LambdaWebSocket)
    * [new LambdaWebSocket()](#new_LambdaWebSocket_new)
    * [.setConfig(tableName, event, context, callback)](#LambdaWebSocket+setConfig)
    * [.getData()](#LambdaWebSocket+getData) ⇒ <code>Any</code>
    * [.send(action, data, [connectionId])](#LambdaWebSocket+send)
    * [.sendToEveryone(action, data)](#LambdaWebSocket+sendToEveryone)
    * [._response()](#LambdaWebSocket+_response)
    * [._getEveryone()](#LambdaWebSocket+_getEveryone) ⇒ <code>Array</code>

<a name="new_LambdaWebSocket_new"></a>

### new LambdaWebSocket()
WebSocket wrapper on Lambda

<a name="LambdaWebSocket+setConfig"></a>

### lambdaWebSocket.setConfig(tableName, event, context, callback)
**Kind**: instance method of [<code>LambdaWebSocket</code>](#LambdaWebSocket)  

| Param | Type |
| --- | --- |
| tableName | <code>String</code> | 
| event | <code>Object</code> | 
| context | <code>Object</code> | 
| callback | <code>function</code> | 

<a name="LambdaWebSocket+getData"></a>

### lambdaWebSocket.getData() ⇒ <code>Any</code>
Get websocket data.

**Kind**: instance method of [<code>LambdaWebSocket</code>](#LambdaWebSocket)  
**Returns**: <code>Any</code> - data  
<a name="LambdaWebSocket+send"></a>

### lambdaWebSocket.send(action, data, [connectionId])
Send data.

**Kind**: instance method of [<code>LambdaWebSocket</code>](#LambdaWebSocket)  

| Param | Type | Default |
| --- | --- | --- |
| action | <code>String</code> |  | 
| data | <code>String</code> |  | 
| [connectionId] | <code>String</code> | <code>Own connection Id</code> | 

<a name="LambdaWebSocket+sendToEveryone"></a>

### lambdaWebSocket.sendToEveryone(action, data)
Send data to everyone.

**Kind**: instance method of [<code>LambdaWebSocket</code>](#LambdaWebSocket)  

| Param | Type |
| --- | --- |
| action | <code>String</code> | 
| data | <code>String</code> | 

<a name="LambdaWebSocket+_response"></a>

### lambdaWebSocket.\_response()
Send response.

**Kind**: instance method of [<code>LambdaWebSocket</code>](#LambdaWebSocket)  
<a name="LambdaWebSocket+_getEveryone"></a>

### lambdaWebSocket.\_getEveryone() ⇒ <code>Array</code>
Get evenyone.

**Kind**: instance method of [<code>LambdaWebSocket</code>](#LambdaWebSocket)  
**Returns**: <code>Array</code> - everyone  
