# Define APIs

You define APIs by adding the `API` section to any screen. Note that `API` would be at the root level of the document, i.e. as a sibling to the `View`.

```yaml
API:
  myFirstApi: # a new to refer to this API later
    inputs: # specify an array of inputs the API expect. You can reference the inputs in the other API properties, such as the body
    uri: # the endpoint to call, e.g. https://dummyjson.com/users/1
    method: # the HTTP method, such as GET, POST, PUT, DELETE, PATCH
    parameters: # set the parameters to be passed to the API
    headers: # set headers such as authorization tokens
    body: # set body, in JSON or YAML, to pass data to the API
    onSuccess: # fire an action when the API returns a 2**
    onError:  # fire an action when the API returns a 4**

  # add more APIs as you need
  mySecondApi:
```


## GET call without authentication

For public APIs that do not require authentication, you typically need only the URI and the method.

```yaml
API:
  getUser:
    uri: https://dummyjson.com/users/1
    method: GET
```

## GET call with bearer token

APIs might be secured by requiring a token. This token is typically passed as a header parameter named `Authorization`.

```yaml
API:
  getUser:
    uri: https://dummyjson.com/users/1
    method: GET
    headers:
      Authorization: "Bearer <<add token here>>"
```


## GET call with API key

Some API providers would issue keys to their customers. Typically, the API provider would require the key to be passed a parameter. Check with API provider documentation on what the name of this parameter is. Here, we use `apiKey` as an example.

```yaml
API:
  getUser:
    uri: https://dummyjson.com/users/1
    method: GET
    parameters:
      apiKey: "<<add key here>>"
```


## POST call with data

Typically you use POST calls with a body to pass data from the frontend to the backend. You can specify the body of the API, and use inputs to pass them dynamically.

```yaml
API:
  addProduct:
    inputs:
      - productTitle
    uri: https://dummyjson.com/products/add
    method: POST
    body: 
      title: '${productTitle}'  # example of a dynamic data that is set based on the inputs
      source: MyApp # example of a static data that is always passed
```