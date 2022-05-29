---
sidebar_position: 1
slug: /
---

# Intro

With Ensemble, you can build interactive and native front-ends for iOS, Android, web, and desktop. You create apps by defining them using Ensemble's declarative language, where you can specify the widget tree, interactions, API calls, events, etc. In short, anything you need to build a front-end, you define in Ensemble.


#### Got any questions or feature requests? [Open an issue on Github](https://github.com/EnsembleUI/ensemble/issues/new).


## Let's create a ToDo app

Get started by **creating a new app** in **[Ensemble Studio](https://studio.ensembleui.com)**.

1. Login to Ensemble Studio at [studio.ensembleui.com/sign-in](https://studio.ensembleui.com/sign-in)
2. Click Create new app
3. Enter a name for your app and click Create app

#### 1. Add widgets to the View

`View` is the root object for a screen. Nest the content of the screen under the `children` property. Let's remove the current children and add a `TextInput` and set the `id` property to `newTaskField`.

Add another widget, a `Button`, and set its `label` to Add. Click Save to see your changes in the preview.

Here's what you should have so far:

```yaml
View:
  title: Home
  type: Column
  styles: { padding: 20, gap: 20 }
  children:
    - TextInput:
        id: newTaskField
    - Button:
        label: Add
```

Which looks like this:

![To do step 1](/img/todo_app_1.jpg)


#### 2. Define APIs

You can define APIs you want to call within Ensemble. Each API definition starts with a name that can be referenced elsewhere. We'll use Airtable as the backend, and add two APIs to get and create tasks.

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
          "desc": $(newTaskField.value),
          "completed": false
        }}
      ]
```

Note that for the `createToDo` API, we're referencing the value of `newTaskField`.

#### 3. Call API on button tap

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


#### 4. Add a template for rending ToDo items

Let's create a simple list of Todos. We do that by using a 'Column' widget, and setting the `itemTemplate` property. `itemTemplate` allows us to loop through an array of data and render the results. It takes the following properiteis:

* `data`: We point this to the API that provides the data. Since Airtable nest the API response body in `records`, we set the value to `$(getToDos.body.records)`
* `name`, we set this to `todoItem`, so we can reference the data items
* `template`, which is where we define the widgets to render for each item. We'll use a `Switch` widget for displaying each ToDo item.

Here's everything we should have so far:

```yaml
View:
  title: Home
  type: Column
  styles: { padding: 20, gap: 20 }
  children:
    - TextInput:
        id: newTaskField
    - Button:
        label: Add
        onTap:
          action: invokeAPI
          name: createToDo
    - Column:
        item-template:
          data: $(getToDos.body.records)
          name: todoItem
          template:
            Switch:
                value: $(todoItem.fields.completed)
                trailingText: $(todoItem.fields.desc)
                
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
          "desc": $(newTaskField.value),
          "completed": false
        }}
      ]
```


#### 5. Call getToDos on page load

`Action` is another root level object, and it includes a `onPageLoad` property. Add the following at the bottom of your screen definition, and save your changes:

```yaml
Action:
  onPageLoad:
    action: invokeAPI
    name: getToDos
```

You should now see the ToDo item you created earlier in the preview.

![To do step 5](/img/todo_app_2.jpg)


#### 6. Call getToDos after a new item is added
Each action takes a `onResponse` property so you can chain actions together. Let's update the add button to call getToDos after adding a new item:

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

Test it by adding a new item. The result should appear in the list.


#### 7. Marking tasks as completed

Need PATCH api method for this one