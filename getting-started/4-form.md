# Add a Form

Let's create a simple form with one text input and a button. Start by removing the `Text` widget and add a `Form` widget instead.

A Form is a container widget with special behavior such as `onSubmit`. 


### Add a TextInput

Container widgets have a property called `children` where you can add more widgets. Let's add a `TextInput` widget. Here's what you should have so far:

```yaml
View:
  header:
    title: ToDo app
  styles:
    scrollableView: true

  # widget for this View
  body:
    Column:
      styles: 
        padding: 20
        backgroundColor: white
      children:
        - Form:
            children:
              - TextInput
```

**What is that dash?**

`-` is used in YAML to define array items. Since `children` property takes an array of widgets, we use a `-` each time we add a widget to this property.

### Set properties of the TextInput

We can define the TextInput's behavior by setting a few properties:

```yaml
            - TextInput:
                label: New task
                hintText: Enter task name
                required: true

```

### Add a Button

Our form needs a button that triggers the form submission.

```yaml
            - Button:
                label: Add
                submitForm: true
```

Save your changes and verify the form appears.

<img src="/images/gs4.png" alt="form" />