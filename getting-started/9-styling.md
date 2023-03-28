# Style widgets

All widgets, including the `View`, take a `style` property, which is an object. That means you create key-value pairs under the `style`, similar to what you do in CSS.

For instance, here's how you add margin to the `Column`:

```yaml
      - Column:
          styles:
            margin: 20 0
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
            gap: 10
```

The above definition will add a gap of 10 between the `TextInput` and the `Button`.

Here's the full syntax so far.

```yaml
View:
  header:
    title: ToDo app
  styles:
    scrollableView: true

  # view's onload action
  onLoad:
    action: executeCode
    body: |
      //@code
      if (ensemble.storage.todoItems == null) {
        ensemble.storage.todoItems = [];
      }

  # starting widget for this view
  body:
      Column:
        styles: 
          padding: 20
          backgroundColor: white
        children:
          - Form:
              styles:
                gap: 10
              onSubmit:
                action: executeCode
                body: |
                  //@code
                  var items = ensemble.storage.todoItems;
                  items.push(newTodo.value);
                  ensemble.storage.todoItems = items;
    
                  // clear the text field's value
                  newTodo.value = '';
    
              children:
                - TextInput:
                    id: newTodo
                    label: New task
                    hintText: Enter task name
                    required: true
                - Button:
                    label: Add
                    submitForm: true
    
          - Column:
              styles:
                margin: 20 0
              item-template:
                data: ${ensemble.storage.todoItems}
                name: item
                template:
                  Checkbox:
                    trailingText: ${item}
```