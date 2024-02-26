# Using device width and height

You have access to device width and height through:

```
device.width
device.height
```

You can use them to set width and height of a widget. Note that when doing calculations that might result in doubles, you must round the number. E.g. if you divide the width by two, on some devices, the result might be a double such as `190.5`. Use `Math.floor` to round it down to `190`.


```yaml
View:
  body:
    Column:
      children:
        - Shape:
            type: rectangle
            styles:
              width: ${Math.floor(device.width / 2)}
              height: ${Math.floor(device.height / 2)}
              backgroundColor: yellow
```

