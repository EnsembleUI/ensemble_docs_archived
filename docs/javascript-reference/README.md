# Add logic using JavaScript

Welcome to the Ensemble Javascript manual. It provides how-to guides, API reference documentation and examples.

## Limitations

Ensemble's javascript is a limited subset of the javascript you may be used to. It is used primarily for manipulating the JSON response from the server, performing UI logic when handling events or writing re-usable functions.

Following are the key limitations of the javascript in Ensemble.

- Only supports ES5. Which means that it does _not_ support any of the ES6 features listed [here](https://www.w3schools.com/js/js_es6.asp). There is _no_ support for arrow function synatx (=>), let keyword and many other features you may be used to.
- No support for importing libraries. Limited to what's provided outside the box.
- No support for `.prototype` or defining new objects. This may come in the future.

Let us know on our [Discord server](https://discord.gg/k4CJeuRc) if you need any of these capabilities or open a [ticket](https://github.com/EnsembleUI/ensemble/issues)

## Where is Javascript code used?

Javascript is the language to build your logic in Ensemble. It is used either as code blocks or as inline expressions. We discuss both below.

### Code Block

Each code block must start with `//@code` as the first line. This tells the platform to process the text as code.

- Use code blocks to handling events or processing API responses.
- Each code block must be in the `body` of the `executeCode` action.

See below the two use cases where code blocks are used.

#### Handling Events

Specified as the `executeCode` action.
Example -

```js
    Button:
      label: Click Me
      onTap:
        executeCode:
          body: |
            //@code
            myText.text = 'tapped out';
```

#### Process API responses

Another common place code blocks are used is when the API response has to be handled to extract values to be set on widgets or response to be set so that one or more `item-template` on the page may get the data in the format that they expect. See both examples below.
Example 1: set widget property in API response

```js
    API:
      getDummyData:
        uri: https://dummyjson.com/users/1
        method: GET
        onResponse:
          executeCode:
            body: |
              //@code
              myText.text = 'Got Response!';
```

Example 2: processing response and setting it for the `item-template` that are bound to this API to use

```js
    API:
      getDummyData:
        uri: https://dummyjson.com/users/1
        method: GET
        onResponse:
          executeCode:
            body: |
              //@code
              //this will replace the response and be used by the item-templates that bind to this API
              response.body.data = [{"field1:"value1"}];
```

### Inline Expressions and bindings

Use inline expressions for dynamically assigning values to widget properties. Inline expressions automatically update the properties of widgets by `binding` them to API responses or template data.

More details coming soon... TBD

## Referencing Ensemble widgets and their properties inside javascript

All widgets on a screen can be referenced within the code block by their `id` field. This also means that ids need to be unique on a screen. Don't set id on your re-usable custom widgets.
No need to call a function, simply use the id of the widget and start accessing its properties. For example, if your widget has `id: myText`, you can reference it in code block or inside an expression as just `myText`. See below.

```js
  Column:
    styles:
      padding: 24
      gap: 8
    children:
      - Text:
          id: myText
          text: Hi there!
      - Button:
          label: Click Me
          onTap:
            executeCode:
              body: |
                //@code
                myText.text = 'tapped out';
```

Widgets within an item-template can be referenced by their index in the array using the `this.selectedItemIndex` syntax.
For example.

```js
  ListView:
    id: listView
    onItemTap:
      navigateScreen:
        name: ListView - Detail Page
        inputs:
          doc_type: ${getPeople.body.users[this.selectedItemIndex]}
    styles: {expanded: true }
    item-template:
      data: ${getPeople.body.users}
      name: users
      template:
        MyRow:
          inputs:
            p: ${users}
```

## Core Libraries

- [The `ensemble` object](/javascript-reference/Ensemble)
- [String](/javascript-reference/String)
- [Numbers](/javascript-reference/Numbers)
- [Date](/javascript-reference/Date)
- [Object and Array](/javascript-reference/MapAndArray)
- [Globals](/javascript-reference/Global)
- [Math](/javascript-reference/Math)
- [JSON](/javascript-reference/JSON)
- [JsonPath](/javascript-reference/JsonPath)

## Common Errors and Logging/Debugging

TBD
