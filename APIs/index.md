# Interact with APIs

The primary mechanism for an Ensemble app to interact with the backend is through APIs.

- [First, define the APIs you want to call](/APIs/define-api.md)
- [Call the API](/APIs/call-api.md) on events such as onLoad or onTab
- [Access the API response](/APIs/access-api-response.md)
- [Handle errors](/APIs/on-error.md)
- [GraphQL example](/APIs/graphql.md)

## 1. Define the API

First, define the APIs you will be calling from your app. You can add this section to any screen. Note that `API` would be at the root level of the document.

```yaml
API:
  getUser:
    uri: # the endpoint to call, e.g. https://dummyjson.com/users/1
    method: # the HTTP method, such as GET, POST, PUT, DELETE, PATCH
    headers:
    body:
    onSuccess:
    onError: 
```

**invokeAPI** is used for calling an API. You can call an API on events such as a button tap or on screen load. First, you have to declare an API. Use the `onLoad` property of the view.

````yaml
View:
  onLoad: |
    //@code
    ensemble.invokeAPI("getPeople");
  body:
    Column:
      styles: { gap: 16, padding: 24 }
      children:
        - Text:
            text: ${getPeople.body.results.length} records were retrieved from API
````


