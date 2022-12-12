# Layouts
Ensemble layouts are themselves widgets that contain other widgets.

## Row
Row lays out its children horizontally. Its main axis is horizontal, and it positions its children horizontally using the `mainAxis` attribute. For vertical positioning use `crossAxis` attribute. 

It will try to give each child as much space as needed. To constrain the children to fill the Row's available horizontal space, use `expanded: true` flag on the children.

## Column
similar to row except children are laid out vertically. `mainAxis` and `crossAxis` are reversed.

## Flex
can switch between being a Row or Column programmatically by specifying the direction

## Flow
lay out the children in the direction specified. Once its runs out of space in this direction, wraps the content and continue in parallel to the original direction.

## Stack
lay out their children on top of one another

## Example
To render the hotel card's data, we wrap the Row around the two Columns. 
<img src="/images/layouts_0.png" alt="Layouts" />

```yaml
#...
Row:
  styles:
    gap: 10   # gap between the children
  children:

    # left Column
    - Column:
        styles:
          expanded: true  # force the left column to use up the parent's left-over space
        children:
          - Text:
              styles: { fontSize: 18, fontWeight: bold }
              text: Grand Royal Hotel
          - Text:
              styles: { overflow: ellipsis, fontSize: 15, color: 0xFF999999 }
              text: East Side, San Francisco

    # right Column
    - Column:
        children:
          - Text:
              styles: { fontSize: 18, fontWeight: bold }
              text: $289
          - Text:
              styles: { fontSize: 15, color: 0xFF999999 }
              text: per night
#...
```
