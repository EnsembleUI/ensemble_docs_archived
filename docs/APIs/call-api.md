# Invoking APIs, aka calling APIs

Use `invokeAPI` action to call the APIs you defined. Here are the properties of invokeAPI:

| Property   | Type   | Description                                                                |
| :--------- | :----- | :------------------------------------------------------------------------- |
| id         | String | Give the API an ID allows you to bind to its result. e.g. ${apiId.body...} |
| name       | String | Name of the API defined in the API section                                 |
| inputs     | Object | Key value pairs ofinputs to be passed to API definition                    |
| onResponse | Action | The action to handle the response                                          |
| onError    | Action | The action to handle errors                                                |


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


## Pass inputs to the API

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


Using code, pass `inputs` as an object.

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