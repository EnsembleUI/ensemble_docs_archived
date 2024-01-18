# Style widgets

All widgets, including the `View`, take a `style` property, which is an object. That means you create key-value pairs under the `style`, similar to what you do in CSS.

For instance, here's how you add margin to the `Column` which is :

```yaml
Column:
styles:
  padding: 20
  backgroundColor: white
  margin: 20 12
children:
  - Form:
      onSubmit: |
        //@code
        var items = ensemble.storage.todoItems;
        items.push(newTodo.value);
        ensemble.storage.todoItems = items;
      children:
        - TextInput:
            id: newTodo
            label: New task
            hintText: Enter task name
            required: true
        - Button:
            label: Add
            submitForm: true
item-template:
  data: ${ensemble.storage.todoItems}
  name: item
  template:
    Checkbox:
      trailingText: ${item}
```

Similar to margin in CSS, you have multiple ways of providing the margin's value:

- `margin: 20` a single value for all side.
- `margin: 20 0` two values where the first value applies to top/bottom, and second value applies to the sides.
- `margin: 20 10 40 0` four values for each side, starting from top.

Another handy style is `gap`, which let's you put space between children of container widgets, such as a `Form`.

```yaml
- Form:
    styles:
      gap: 16
    onSubmit: |
      //@code
      var items = ensemble.storage.todoItems;
      items.push(newTodo.value);
      ensemble.storage.todoItems = items;
    children:
      - TextInput:
          id: newTodo
          label: New task
          hintText: Enter task name
          required: true
      - Button:
          label: Add
          submitForm: true
```

The above definition will add a gap of 16 between the `TextInput` and the `Button`.

Here's the full syntax so far.

```yaml
View:
  header:
    title: ToDo app
  styles:
    scrollableView: true
  onLoad:
    executeCode:
      body: |
        //@code
        if (ensemble.storage.todoItems == null) {
        ensemble.storage.todoItems = [];
        }
  # widget for this View
  body:
    Column:
      styles:
        padding: 20
        backgroundColor: white
        margin: 20 12
      children:
        - Form:
            styles:
              gap: 16
            onSubmit: |
              //@code
              var items = ensemble.storage.todoItems;
              items.push(newTodo.value);
              ensemble.storage.todoItems = items;
            children:
              - TextInput:
                  id: newTodo
                  label: New task
                  hintText: Enter task name
                  required: true
              - Button:
                  label: Add
                  submitForm: true
      item-template:
        data: ${ensemble.storage.todoItems}
        name: item
        template:
          Checkbox:
            trailingText: ${item}
```
