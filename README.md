
```
.
├── app
│   ├── Console
│   │   └── Kernel.php
│   ├── Exceptions
│   │   └── Handler.php
│   ├── Http
│   │   ├── Controllers
│   │   │   ├── Auth
│   │   │   │   ├── ForgotPasswordController.php
│   │   │   │   ├── LoginController.php
│   │   │   │   ├── RegisterController.php
│   │   │   │   ├── ResetPasswordController.php
│   │   │   │   └── VerificationController.php
│   │   │   └── Controller.php
│   │   ├── Kernel.php
│   │   └── Middleware
│   │       ├── Authenticate.php
│   │       ├── CheckForMaintenanceMode.php
│   │       ├── EncryptCookies.php
│   │       ├── RedirectIfAuthenticated.php
│   │       ├── TrimStrings.php
│   │       ├── TrustProxies.php
│   │       └── VerifyCsrfToken.php
│   ├── Providers
│   │   ├── AppServiceProvider.php
│   │   ├── AuthServiceProvider.php
│   │   ├── BroadcastServiceProvider.php
│   │   ├── EventServiceProvider.php
│   │   └── RouteServiceProvider.php
│   └── User.php
├── artisan
├── bootstrap
│   ├── app.php
│   └── cache
├── composer.json
├── composer.lock
├── config
│   ├── app.php
│   ├── auth.php
│   ├── broadcasting.php
│   ├── cache.php
│   ├── database.php
│   ├── filesystems.php
│   ├── hashing.php
│   ├── logging.php
│   ├── mail.php
│   ├── queue.php
│   ├── services.php
│   ├── session.php
│   └── view.php
├── database
│   ├── factories
│   │   └── UserFactory.php
│   ├── migrations
│   │   ├── 2014_10_12_000000_create_users_table.php
│   │   └── 2014_10_12_100000_create_password_resets_table.php
│   └── seeds
│       └── DatabaseSeeder.php
├── package.json
├── phpunit.xml
├── public
│   ├── css
│   │   └── app.css
│   ├── favicon.ico
│   ├── index.php
│   ├── js
│   │   └── app.js
│   ├── robots.txt
│   └── svg
│       ├── 403.svg
│       ├── 404.svg
│       ├── 500.svg
│       └── 503.svg
├── resources
│   ├── js
│   │   ├── app.js
│   │   ├── bootstrap.js
│   │   └── components
│   │       └── ExampleComponent.vue
│   ├── lang
│   │   └── en
│   │       ├── auth.php
│   │       ├── pagination.php
│   │       ├── passwords.php
│   │       └── validation.php
│   ├── sass
│   │   ├── _variables.scss
│   │   └── app.scss
│   └── views
│       └── welcome.blade.php
├── routes
│   ├── api.php
│   ├── channels.php
│   ├── console.php
│   └── web.php
├── server.php
├── storage
│   ├── app
│   │   └── public
│   ├── framework
│   │   ├── cache
│   │   │   └── data
│   │   ├── sessions
│   │   ├── testing
│   │   └── views
│   └── logs
├── tests
│   ├── CreatesApplication.php
│   ├── Feature
│   │   └── ExampleTest.php
│   ├── TestCase.php
│   └── Unit
│       └── ExampleTest.php
├── tree.md
├── webpack.mix.js
└── yarn.lock
```



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
