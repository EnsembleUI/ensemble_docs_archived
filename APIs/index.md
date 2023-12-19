# Index Page & InvokeAPI Action with JavaScript

What is invokeAPI action and how does it work in JavaScript?
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

Explore more of what invokeAPI can do for you when creating your app!
# Index
- [GraphQL](/APIs/graphql.md)
- [Headers](/APIs/header.md)
- [onError](/APIs/on-error.md)
- [Rest API](/APIs/rest-api.md)