---
sidebar_position: 1
slug: /
---

# Introduction

With Ensemble, you can build interactive and native front-ends. You create apps by defining them using Ensemble's declarative language, written in YAML. This language is purpose-built for front-end development so you can specify the widget tree, interactions, API calls, events, etc. In short, anything you need to build a front-end, you define in Ensemble. The same definition can be targetted at iOS, Android, web, and desktop apps.

Ensemble apps are interpretted at runtime. In other words, Ensemble never generates code. This approach provides the following benefits:

1. **Standardize development of native apps around one technology** - You can target the same definition across platforms. Ensemble also enables customization per platform.
2. **Instant update of native apps** - Ensemble apps can load the screen definitions locally or from a server. By putting them on the server, you can push updates to clients instantly.
3. **QA Automation** - The declerative approach allows Ensemble to automate the QA.
4. **No more framework upgrades** - As new native technologies are released, we update Ensemble's runtime libraries, freeing you from spending resources to stay on latest framework releases.


## Got any questions or feature requests? 

[Open an issue on Github](https://github.com/EnsembleUI/ensemble/issues/new).


## Let's create a ToDo app

Get started by creating a new app in [Ensemble Studio](https://studio.ensembleui.com).

1. Login to Ensemble Studio at [studio.ensembleui.com/sign-in](https://studio.ensembleui.com/sign-in)
2. Click Create new app
3. Enter a name for your app and click Create app

### 1. Add a text input

`View` is the root object for a screen. Nest the content of the screen under the `children` property. Let's remove the current children and add a `TextInput`. Each widget takes a set of properities. For our text input, we'll define the following:

```yaml
View:
  title: Home
  Column:
    styles: 
      padding: 20
      gap: 20
    children:
      - TextInput:
          label: New task
          hintText: Enter a task
          required: true
          id: newTaskField
```

Click Save to see your changes in the preview.

### 2. Add a button

After the text inout, add a `Button`, and set its `label` property.

Here's what you should have so far:

```yaml
View:
  title: Home
  Column:
    styles: 
      padding: 20
      gap: 20
    children:
      - TextInput:
          label: New task
          hintText: Enter a task
          required: true
          id: newTaskField
      - Button:
          label: Add
```

Which looks like this:

![To do step 1](/img/todo_app_1.jpg)


### 3. Define APIs

You can define APIs you want to call within Ensemble. Each API definition starts with a name that can be referenced elsewhere (e.g. when a button is pressed). We'll use Airtable as the backend, and add two APIs to get and create tasks.

```yaml
API:
  getToDos:
    authorization: none
    uri: 'https://api.airtable.com/v0/appDbkGS4VOiPVQR5/ToDo?api_key=keyyWz426zsnMKavb'
    method: 'GET'
  createToDo:
    authorization: none
    uri: 'https://api.airtable.com/v0/appDbkGS4VOiPVQR5/ToDo?api_key=keyyWz426zsnMKavb'
    method: 'POST'
    body:
      "records": [{
        "fields": {
          "desc": ${newTaskField.value},
          "completed": false
        }}
      ]
```

Note that for the `createToDo` API, we're referencing the value of the text input, using the id we defined `newTaskField`.

### 4. Call API on button tap

Now, we can call the API when the button is pressed. We do that by setting the `opTap` property on the button.

```yaml
    - Button:
        label: Add
        onTap:
          action: invokeAPI
          name: createToDo
```

Save your changes, and try it out by entering a new todo and clicking the Add button. Check the Airtable content here to verify your entry is there: 
[https://airtable.com/shrYy4pqloELiJNOm](https://airtable.com/shrYy4pqloELiJNOm)


### 5. Add a template for rending ToDo items

Let's create a simple list of Todos. We do that by using a 'Column' widget, and setting the `item-template` property. `item-template` allows us to loop through an array of data and render the results. It takes the following properiteis:

* `data`: We point this to the API that provides the data. Since Airtable nest the API response body in `records`, we set the value to `${getToDos.body.records}`
* `name`, we set this to `todoItem`, so we can reference the data items
* `template`, which is where we define the widgets to render for each item. We'll use a `Checkbox` widget for displaying each ToDo item.

Here's everything we should have so far:

```yaml
View:
  title: Home
  Column:  
    styles: 
      padding: 20
      gap: 20
    children:
      - TextInput:
          label: New task
          hintText: Enter a task
          required: true
          id: newTaskField
      - Button:
          label: Add
          onTap:
            action: invokeAPI
            name: createToDo
      - Column:
          item-template:
            data: ${getToDos.body.records}
            name: todoItem
            template:
              Checkbox::
                  value: ${item.fields.completed}
                  trailingText: ${item.fields.desc}
                
API:
  getToDos:
    authorization: none
    uri: 'https://api.airtable.com/v0/appDbkGS4VOiPVQR5/ToDo?api_key=keyyWz426zsnMKavb'
    method: 'GET'
  createToDo:
    authorization: none
    uri: 'https://api.airtable.com/v0/appDbkGS4VOiPVQR5/ToDo?api_key=keyyWz426zsnMKavb'
    method: 'POST'
    body:
      "records": [{
        "fields": {
          "desc": ${newTaskField.value},
          "completed": false
        }}
      ]
```


### 6. Call getToDos on load

Let's call the `getToDos` API when the view loads by adding `onLoad` to the `View`.

```yaml
View:
  title: Home
  onLoad:
    action: invokeAPI
    name: getToDos
```

Save your changes. You should now see the ToDo item you created earlier in the preview.

![To do step 5](/img/todo_app_2.jpg)


### 7. Call getToDos after a new item is added

Each action takes a `onResponse` property so you can chain actions together. Let's update the add button to call `getToDos` after adding a new item:

```yaml
      - Button:
          label: Add
          onTap:
            action: invokeAPI
            name: createToDo
            onResponse:
              action: invokeAPI
              name: getToDos
```

Test it by adding a new item. The result should appear in the list right away.

### 8. Marking tasks as completed

Finally, we want to update the `completed` field when the checkbox is toggled. Similar to a button that takes a `onTap` property, the checkbox takes a `onChange` property. We'll use this property to trigger a new API call, `updateToDo`.

According to Airtable's documentation, they expect a `PATCH` request with a body like this:

```json
"records": [
  {
    "id": "recITO3bj1LsZj4O8", // This is the id of the record
    "fields": {
      "completed": true // We want this to be the value of the checkbox
    }
  }
]
```

We construct this request body in under the checkbox itself, by specifying the `input` the goes along with the `action`.

```yaml
- Checkbox:
    value: ${item.fields.completed}
    trailingText: ${item.fields.desc}
    onChange:
      action: invokeAPI
      name: updateToDo
      inputs:
        payload:
          records:
            - id: "${item.id}"
              fields:
                completed: "${this.value}"              
      onResponse:
        action: invokeAPI
        name: getToDos
```

Note that again we're chaining `getToDos` API call to make sure we get the updated records after a change.

The checkbox is calling an API with name of `updateToDo`. Let's define it:

```yaml
updateToDo:
  authorization: none
  uri: 'https://api.airtable.com/v0/appDbkGS4VOiPVQR5/ToDo?api_key=keyyWz426zsnMKavb'
  method: 'PATCH'
  inputs: [payload]
  body: ${payload}
```

That's it! Save it, try it out, and verify your changes in Airtable:

[https://airtable.com/shrYy4pqloELiJNOm](https://airtable.com/shrYy4pqloELiJNOm)

## Up for a few exercises?

We designed a few exercises so you can try Ensemble on your own. No code to copy/paste this time 😉

