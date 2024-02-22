# Mocking API responses to develop and test your app
A key to developing an app quickly is to build the user interface independently of the back-end. This allows the team building the UI to be unblocked and move fast while also providing actual API payloads to the back-end team to build. Another advantage of this approach is that app could be built quickly with mockdata and be demo'd to customers for feedback. 
Ensemble provides a framework for mockng API responses that allow you to do that. You can mock all APIs or some and test with mockdata by simply setting a property. 

## Setting/unsetting `useMockResponse`
```javascript
app.useMockResponse = true
```
this sets the `useMockResponse` in the persistent storage but namespaces it by the appId i.e. <appid>_useMockResponse. 

For example:
RaRwIu1NasUOUsuJ0OuO_useMockResponse = true;
will be set in storage automatically for an app with id = 'RaRwIu1NasUOUsuJ0OuO'

you can check the value by just doing - 
```javascript
if ( app.useMockResponse ) {...}
```
By namespacing it, we can ensure that in ensemble live (or studio preview), one app's `useMockResponse` setting is not leaked into another app. 

In theory, you can bind to it as well as it is just another value in the storage. Remember to bind to `<appid>_userMockResponse` where <appid> should be replaced by your app's id without the <>. for example - RaRwIu1NasUOUsuJ0OuO_useMockResponse

You can obtain appId for your app anytime by doing - 
```javascript
appInfo.appId
```

## How to specify mock data on the API definitions

### Inline on the API
```yaml
  slowAPI:
    inputs:
      - uniqueId    
    mockResponse:
      #inline mock response
      body: 
        title: I am mock data
        list:
          - name: mock first
          - name: mock second
          - name: mock third
          - name: ${uniqueId}
      #can set response headers as well
      headers:
        - authToken: absbsbxssjjs
    url: https://openlibrary.org/search.json?q=the+lord+of+the+rings
    onResponse: |-
      console.log('slowAPI='+uniqueId);
      response.body.list.push({name: 'adding in onResponse - '+uniqueId});
```

### Return mock data from a function
```yaml
  mockDataFromFunction:
    inputs:
      - uniqueId    
    mockResponse: ${getMockResponse()}
    url: https://openlibrary.org/search.json?q=the+lord+of+the+rings
    onResponse: |-
      console.log('mockDataFromFunction='+uniqueId);
      response.body.list.push({name: 'mockDataFromFunction adding in onResponse - '+uniqueId});
```
where the function could be define either in the `Global` script block on the current screen or in a separate script and imported in. Following is a sample function that is used in the `mockDataFromFunction` API in the yaml above - 
```javascript
var abc = 'var abc';
function getMockResponse() {
  return {
    body: {
      title: 'hello from mockResponse' + abc,
      list: [
        {name: 'mockResponse1'},
        {name: 'mockResponse2'},
        {name: 'mockResponse3'},
        {name: 'mockResponse4'},
        {name: 'mockResponse5'}
      ]
    }
  };
}
```
### Mocking an error response
simply set `statusCode` to an error statusCode
```yaml
  mockError:
    inputs:
      - uniqueId    
    mockResponse:
      body:
      statusCode: 500
      reasonPhrase: mock bad request

    url: https://openlibrary.org/search.json?q=the+lord+of+the+rings
    onResponse: |-
      console.log('mockDataFromFunction='+uniqueId);
      response.body.list.push({name: 'mockDataFromFunction adding in onResponse - '+uniqueId});
    onError:
      showToast:
        message: error occurred ${response.statusCode} ${response.reasonPhrase}
        options:
          duration: 5
```
