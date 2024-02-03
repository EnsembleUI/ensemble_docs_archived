# Invoking APIs, aka calling APIs

Use `invokeAPI` action to call the APIs you defined. Here are the properties of invokeAPI:

## API response object 
Both the `onResponse` and `onError` actions provide reference to the API response object. The `response` object has the following propertuies available to you.

| Property   | Type   | Description                                                                |
| :--------- | :----- | :------------------------------------------------------------------------- |
| statusCode         | number | Http status code. See details [here](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status) |
| body       | String | the actual body of the response. This is where you are mostly interested in. JSON responses are automatically parsed and made available. Other content-types are available as strings.                               |
| headers     | array | Key value pairs of http response headers                  |
| reasonPhrase | String | Phrase that describes the statusCode. Http response statusCode is a 3 digit number and reasonPhrase describes that number. For example - reasonPhrase for statusCode between 200 and 299 (inclusive) is Successful. More [here](https://www.ibm.com/docs/en/cics-ts/5.5?topic=concepts-status-codes-reason-phrases)                                         |

## API/invokeAPI properties
| Property   | Type   | Description                                                                |
| :--------- | :----- | :------------------------------------------------------------------------- |
| id         | String | Give the API an ID allows you to bind to its result. e.g. ${apiId.body...} |
| name       | String | Name of the API defined in the API section                                 |
| inputs     | Object | Key value pairs ofinputs to be passed to API definition                    |
| onResponse | Action | The action to handle the response. This action can access the `response` object. For example - `response.body` or event overwrite the body as `response.body = myJsonObject;`                                          |
| onError    | Action | The action to handle errors. Just like onResponse, you have the `response` object available here so you can check `response.statusCode` to see what error was sent by the server and then use `response.body` to access the error response                                                |


invokeAPI can be passed to any event, such as `onLoad`, `onTap`, `onPullToRefresh`, ... using EDL or code.


## invokeAPI from EDL

```yaml
View:
  onLoad:
    invokeAPI:
      name: getUser
  body:
    # screen body
API:
  getUser:
    uri: https://dummyjson.com/users/1
    method: GET
```


## invokeAPI from code (Javascript)

```yaml
View:
  onLoad: |
    ensemble.invokeAPI("getUser");
  body:
    # screen body
API:
  getUser:
    uri: https://dummyjson.com/users/1
    method: GET
```


## Pass inputs to the API (in EDL or in code)

A common interaction is to pass user provided info from a form to an API. To achieve this, set API inputs by binding to form values.

Using EDL, set `inputs` property of the `invokeAPI` action.

```yaml
View:
  body:
    Column:
      styles:
        padding: 24
        gap: 8
      children:
        - TextInput:
            id: productName
            label: Product Name
        - Button:
            label: Submit
            onTap:
              invokeAPI:
                name: addProduct
                inputs:
                  productTitle: ${productName.value}

API:
  addProduct:
    inputs:
      - productTitle
    uri: https://dummyjson.com/products/add
    method: POST
    body: 
      title: ${productTitle}
```


Using code, pass `inputs` as an object. *Note* that you cannot pass `onResponse` and `onError` callbacks to `invokeAPI` in code. You can invoke an API in code and have the `onResponse` and `onError` defined on the API definition itself. 

```yaml
View:
  body:
    Column:
      styles:
        padding: 24
        gap: 8
      children:
        - TextInput:
            id: productName
            label: Product Name
        - Button:
            label: Submit
            onTap: |
              ensemble.invokeAPI("addProduct", {
                "productTitle": productName.value
              });

API:
  addProduct:
    inputs:
      - productTitle
    uri: https://dummyjson.com/products/add
    method: POST
    body: 
      title: ${productTitle}
```
