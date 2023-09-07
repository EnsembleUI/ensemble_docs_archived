
# How to get ListView or GridView to take all Available height

## Don't do this
```
ListView|GridView:
  height: ${device.height - 20}
```

This will not render properly on all devices. Instead you want the ListView to stretch to fill all available vertical space
if your ListView/GridView is inside a Column.

## Do this instead
```
ListView:
  styles:
    expanded: true
```

### the thing to watch out for is:
expanded only works for widgets inside Row/Column
when a widget has expanded set, its ancestors need to have set height, either explicitly or through expanded again. Essentially you are saying i want my widget to use all the spaces available that my parent alllows me. It keeps going up the chain but will break if an ancestor doesn't have a height
