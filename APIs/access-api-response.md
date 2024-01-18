# Access API response body and headers

You can access an API response through:

- **API name** set when defining the API
- **API id** set when invoking the API

Use id instead of a name for following scenarios:

1. You're setting the API name dynamically
2. The same API is called multiple times with different inputs, e.g. when looping through data

# Basic GET example

Here, we use the API name to access the response body. In EDL, expressions are wrapped in `${}` so that Ensemble runtime evaluates the expression. In this case, the expression is referencing the API response body.

```yaml
View:
  onLoad:
    invokeAPI:
      name: getUser
  body:
    Column:
      styles:
        padding: 40
      children:
        - Text:
            text: ${getUser.body.firstName}
API:
  getUser:
    uri: https://dummyjson.com/users/1
    method: GET
```


# GET array of data and display using a template

An API response could include an array of objects that the app displays using an `item-template`. Any widget that supports `children` property also supports `item-template`. 

```yaml
View:
  onLoad:
    invokeAPI:
      name: getUser
  body:
    Column:
      styles:
        padding: 40
      item-template:
        data: ${getUser.body.users}
        name: user
        template:
          Text:
            text: ${user.firstName}
API:
  getUser:
    uri: https://dummyjson.com/users/
    method: GET
```