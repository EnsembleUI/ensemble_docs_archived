# Welcome!
Welcome to the Ensemble Javascript manual. It provides how-to guides, API reference documentation and examples. 
## Limitations
Ensemble's javascript is a limited subset of the javascript you may be used to. It is used primarily for manipulating the JSON response from the server, doing UI logic when handling events or writing re-usable functions. 

- Only supports ES5. Which means that it does *not* support any of the ES6 features listed [here](https://www.w3schools.com/js/js_es6.asp). There is *no* support for arrow function synatx (=>), let keyword and many other features you may be used to. 
- Limited to what's provided outside the box. No support for importing libraries. 

## The Code block
## Where is Javascript code used?
### To handle events. 
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

### Handling events
### Inline Expressions and bindings

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
- String
- Boolean
- Numbers
- [Date](Date.md)
- Map/Object
- console
- Math
- Regular Expressions (regExp)
- parseFloat
- parseInt
- parseDouble
- JSON
- btoa
- atob

