# Introduction

With Ensemble, you can build interactive and native front-ends. You create apps by defining them using Ensemble's declarative language, written in YAML. This language is purpose-built for front-end development so you can specify the widget tree, interactions, API calls, events, etc. In short, anything you need to build a front-end, you define in Ensemble. The same definition can be targetted at iOS, Android, web, and desktop apps.

Ensemble apps are interpretted at runtime. In other words, Ensemble never generates code. This approach provides the following benefits:

1. **Standardize development of native apps around one technology** - You can target the same definition across platforms. Ensemble also enables customization per platform.
2. **Instant update of native apps** - Ensemble apps can load the screen definitions locally or from a server. By putting them on the server, you can push updates to clients instantly.
3. **No more framework upgrades** - As new native technologies are released, we update Ensemble's runtime libraries, freeing you from spending resources to stay on latest framework releases.


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
          label: Task name
          hintText: Enter a task
          required: true
          id: newTaskName
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
          label: Task name
          hintText: Enter a task
          required: true
          id: newTaskName
      - Button:
          label: Add
```

Which looks like this:

![To do step 1](/images/todo_app_1.jpg)


### 3. Define APIs

You can define APIs you want to call within Ensemble. Each API definition starts with a name that can be referenced elsewhere (e.g. when a button is pressed). We'll use Airtable as the backend, and add two APIs to get and create tasks.

```yaml
API:

  getToDos:
    authorization: none
    uri: 'https://api.airtable.com/v0/appDbkGS4VOiPVQR5/ToDo?api_key=keyyWz426zsnMKavb'
    method: 'GET'

  createToDo:
    inputs:
      - name
    authorization: none
    uri: 'https://api.airtable.com/v0/appDbkGS4VOiPVQR5/ToDo?api_key=keyyWz426zsnMKavb'
    method: 'POST'
    body:
      records:
        - fields:
            desc: "${name}"
            completed: false
```

Note that for the `createToDo` API, we're passing an input with the key `name`.

### 4. Call API on button tap

Now, we can call the API when the button is pressed. We do that by setting the `opTap` property on the button. Events such as `onTap` can take an `action` property. Using `action` you can call APIs, navigate to other screens, and even execute custom code. For this example, we'll be setting the action to `invokeAPI` and set the following:

* `name` will be the name of the API we defined in the previous step.
* `inputs` will be the key and values we want to pass to the API. This API expects a `name`. The value of the name will be the text input's value. This will be wrapped in `${}` which tells Ensemble to evaluate the expression within the curely brackets.



```yaml
      - Button:
          label: Add
          onTap:
            action: invokeAPI
            name: createToDo
            inputs:
              name: ${newTaskName.value}
```

Save your changes, and try it out by entering a new todo and clicking the Add button. Check the Airtable content here to verify your entry is there: 
[https://airtable.com/shrYy4pqloELiJNOm](https://airtable.com/shrYy4pqloELiJNOm)


### 5. Add a template for rendering ToDo items

Let's create a simple list of Todos. We do that by using a 'Column' widget, and setting the `item-template` property. `item-template` allows us to loop through an array of data and render the results. It takes the following properiteis:

* `data`: Point this to the API that provides the data. Since Airtable nest the API response body in `records`, we set the value to `${getToDos.body.records}`
* `name`: Set this to `todoItem`, so we can reference the data items
* `template`: This is where we define the widgets to render for each item. We'll use a `Checkbox` widget for displaying each ToDo item.

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
          label: Task name
          hintText: Enter a task
          required: true
          id: newTaskName
      - Button:
          label: Add
          onTap:
            action: invokeAPI
            name: createToDo
            inputs:
              name: ${newTaskName.value}
      - Column:
          item-template:
            data: ${getToDos.body.records}
            name: todoItem
            template:
              Checkbox:
                value: ${todoItem.fields.completed}
                trailingText: ${todoItem.fields.desc}

API:
  
  getToDos:
    uri: 'https://api.airtable.com/v0/appDbkGS4VOiPVQR5/ToDo?api_key=keyyWz426zsnMKavb'
    method: 'GET'

  createToDo:
    inputs:
      - name
    uri: 'https://api.airtable.com/v0/appDbkGS4VOiPVQR5/ToDo?api_key=keyyWz426zsnMKavb'
    method: 'POST'
    body:
      records:
        - fields:
            desc: "${name}"
            completed: false

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

![To do step 5](/images/todo_app_2.jpg)


### 7. Call getToDos after a new item is added

Each `invokeAPI` action takes a `onResponse` property so you can chain actions together. Let's update the add button to call `getToDos` after adding a new item:

```yaml
      - Button:
          label: Add
          onTap:
            action: invokeAPI
            name: createToDo
            inputs:
              name: ${newTaskName.value}
            onResponse:
              action: invokeAPI
              name: getToDos
```

Test it by adding a new item. The result should appear in the list right away.

### 8. Marking tasks as completed

Finally, we want to update the `completed` field in the table when the checkbox is toggled. Similar to a button that takes a `onTap` property, the checkbox takes a `onChange` property. We'll use this property to trigger a new API call, `updateToDo`.

According to Airtable's documentation, they expect a `PATCH` request with a body:

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

First, let's add a new API for update:

```yaml
  updateToDo:
    inputs:
      - id
      - completed
    uri: 'https://api.airtable.com/v0/appDbkGS4VOiPVQR5/ToDo?api_key=keyyWz426zsnMKavb'
    method: 'PATCH'
    body:
      records:
        - id: "${id}"
          fields:
            completed: "${completed}"
```

And now, update the checkbox to call the API:

```yaml
              Checkbox:
                value: ${todoItem.fields.completed}
                trailingText: ${todoItem.fields.desc}
                onChange:
                  action: invokeAPI
                  name: updateToDo
                  inputs:
                    id: ${todoItem.id}
                    completed: ${this.value}
                  onResponse:
                    action: invokeAPI
                    name: getToDos
```

Note that again we're chaining `getToDos` API call to make sure we get the updated records after a change.

That's it! Save it, try it out, and verify your changes in Airtable:

[https://airtable.com/shrYy4pqloELiJNOm](https://airtable.com/shrYy4pqloELiJNOm)

## Up for a few exercises?

We designed a few exercises so you can try Ensemble on your own. No code to copy/paste this time 😉

