# Binding APIs to Item Templates in Ensemble

When developing user interfaces, it's common to display lists of items, and Ensemble simplifies this process by providing the item-template property in the YAML syntax. This property can be assigned to container widgets like Column or Row and is particularly useful for binding API responses to data-driven UI elements.

`item-template` takes the following properties:

- `data`: This should point to an array of data.
- `name`: Set this to a value to reference in the `template`.
- `template`: This is where we define the widgets to render for each item.

| Property | Type   | Description                                                                     |
| -------- | ------ | ------------------------------------------------------------------------------- |
| data     | string | Bind to an array of data from an API response or a variable                     |
| name     | string | Set the name to reference as you iterate through the array of data              |
| template | widget | The data row widget to render for each item, it can be a custom widget as well. |

```yaml
item-template:
  data: ${getPeople2.body.results}
  name: item
  template:
    Text:
      text: ${item.name.first}
```

The `data` property of the item-template is bound to the results of the getPeople2 API call (${getPeople2.body.results}).
The `name` property is set to "item," serving as a reference to each item in the array.
The `template` property defines the structure of each item in the list. In this case, it's a Text widget displaying the first name of each person from the API response (${item.name.first}).

This setup uses the API response from getPeople2 to dynamically generate a list of Text widgets, each displaying the first name of a person from the API response.