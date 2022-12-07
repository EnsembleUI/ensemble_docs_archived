# Display list of items

A common pattern in UI is displaying a list of items. Ensemble provides `item-template` property to achieve this within the YAML syntax. You can assign this property to container widgets such as `Column`, `Row`, etc.

`item-template` takes the following properties:

* `data`: This should point to an array of data.
* `name`: Set this to a value to reference in the `template`.
* `template`: This is where we define the widgets to render for each item.

Let's add a `Column` widget that will display a list of checkboxes for the ToDo items.

```yaml
      - Column:
          item-template:
            data: ${ensemble.storage.todoItems}
            name: item
            template:
              Checkbox:
                trailingText: ${item}
```

Notice the use of `${}`. This is how you tell Ensemble that what's inside the bracket is an expression to be evaluated. In other words, if you're point to a data or doing inline logic, you wrap them with `${}`.

Once you save, you should see the item you added previously. Test it by adding a new item too.

<img src="/images/gs8.png" alt="item template result" />