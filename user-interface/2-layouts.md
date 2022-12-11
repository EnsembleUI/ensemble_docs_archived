# Layouts
Ensemble layouts are widgets that contain other widgets as their children. A few examples:

**Row / Column**: lay out their children horizontally or vertically.

**Flex**: can switch between being a Row or Column programmatically by specifying the direction

**Stack**: lay out their children on top of one another

## Putting it together
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
<img src="/images/layouts_0.png" alt="Layouts" />