# Basic Example of Data from API

**item-template** is a set of attributes that enable the 'quick' creation of an Item. It is used to display the data from an API.

item-template has following properties:

**data:** Bind to an array of data from an API response or a variable

**name:** Set the name to reference as you iterate through the array of data

**template:** The widget to render for each item

## Example

```yaml
- Text:
    text: GET and bind to an item-template
- Button:
    label: Call API
    onTap:
        action: invokeAPI
        name: getPeople
- Column:
    item-template:
      data: ${getPeople.body.results}
      name: item
      template:
        Text:
          text: ${item.name.first}
```



```yaml
API:
  getPeople:
    uri: https://randomuser.me/api/?results=5
    method: GET
```