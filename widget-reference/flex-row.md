# FlexRow

FlexRow is designed to lay out child widgets horizontally and proportionally from the available space given by its parent. By default, flexRow assigns equal space to each child (`flex=1`), but this can be customized to accommodate various design requirements.

## Best Practices
- Use FlexRow when you need a horizontal layout with proportional space distribution among the children.
- **Avoid** using FlexRow in a scrollable parent, such as scrollable Row, without a fixed width, as it will lead to layout issues. FlexRow and its children need to be constrained to a definite size to properly calculate the flex distribution.
- **Avoid** using FlexRow in another Row. Row does not constrain its children's dimensions, which FlexRow requires to calculate the flex distribution. Instead consider giving the FlexRow a width or use all FlexRow(s) up the parent chain. 

## Key Concepts

- **flex**: Determines the space a child widget occupies relative to its siblings. By default, all children in a FlexRow have a flex value of 1 unless specified.
- **flexMode**: Dictates how a child widget uses its allocated space. It can be set to the below:.
    - `expanded`: The child will attempt to fill its allocated space based on the flex factor (this is the default).
    - `flexible`: The child occupies only the space it needs, up to its flex factor.
    - `none`: The child occupies the space it needs (flex factor is ignored).
- When laying out its children, FlexRow follows this specific order:
    - 1. Widgets with flexMode marked as `none` will be laid out first and receive all the space they need. Use caution as this can overflow the parent's available spaces (use 'flexible' is probably sufficient most of the time). 
    - 2. Widgets marked as `flexible` are laid out next. They're allowed to occupy space up to their flex factor but can be smaller if they don't require all the space. This is useful for widgets that can size themselves according to their content but should be limited to a specific portion of the available space.
    - 3. The remaining space is then divided among `expanded` widgets according to their flex factors. These widgets are stretched to fill the allocated space, ensuring that all available space is used.


## Usage

A simple FlexRow with three child widgets, each taking up equal space (all have flex=1 by default):

```yaml
FlexRow:
  children:
    - Text:
        text: Child 1
    - Text: 
        text: Child 2
    - Text: 
        text: Child 3
```

Assigning different flex values to children to control their space distribution. In the example below, "Child 2" will occupy twice the space of "Child 1" and "Child 3":

```yaml
FlexRow:
  children:
    - Text: 
        text: Child 1   # default flex=1 since not specified
    - Text: 
        text: Child 2
        styles:
          flex: 2
    - Text: 
        text: Child 3
        styles:
          flex: 1
```

Adjusting FlexMode to control how children occupy their allocated space. In the example below, "Flexible Child" will be laid out with the size it needs, up to a 1/3 of the available space. "Expanded Child" will be laid out next, occupy the rest of the available space, but not smaller than 2/3 of the available space (since Flexible can only grow to 1/3 max, and all available spaces will be used):

```yaml
FlexRow:
  children:
    - Text:
        text: Flexible Child
        styles:
          flexMode: flexible
    - Text: 
        text: Expanded Child
        styles:
          flex: 2
          flexMode: expanded

```

## Related
- See [FlexColumn](/widget-reference/flex-column) for a similar layout in the vertical direction.
- See [Row](/widget-reference/column) for a more generic and scrollable container for laying out children horizontally.

## Reference
#### Properties

| Property                         | Type                                   | Description                                              |
|----------------------------------|----------------------------------------|----------------------------------------------------------|
| `children`                       | [Widget[]](widget-reference/directory) | An array of child widgets to be laid out in the column.  |
| `onTap`                          | Action                                 | An action that is triggered when the widget is tapped.   |
| `onTapHaptic`                    | TapHaptic                              | The type of haptic feedback to be triggered on tap.      |
| `styles`                         | object                                 | [See properties](#styles)                                |

#### Styles

| Style Property                    | Type                                                       | Description                                                                                                                            |
|-----------------------------------|------------------------------------------------------------|----------------------------------------------------------------------------------------------------------------------------------------|
| `mainAxis`                        | string                                                     | Alignment of children along the main axis (vertical). Options: `start`, `end`, `center`, `spaceBetween`, `spaceAround`, `spaceEvenly`. |
| `crossAxis`                       | string                                                     | Alignment of children along the cross axis (horizontal). Options: `start`, `end`, `center`, `stretch`, `baseline`.                     |
| `mainAxisSize`                    | MainAxisSize                                               | How to size the container along the main axis.                                                                                         |
| `gap`                             | integer                                                    | The gap between child widgets, in logical pixels.                                                                                      |
| `fontFamily`                      | string                                                     | The font family to use for text within the widget.                                                                                     |
| `fontSize`                        | integer                                                    | The size of the font to use for text within the widget.                                                                                |
| `width`                           | integer                                                    | The width of the widget, in logical pixels.                                                                                            |
| `height`                          | integer                                                    | The height of the widget, in logical pixels.                                                                                           |
| `clipContent`                     | boolean                                                    | Whether to clip the widget's content. Useful for preventing overflow.                                                                  |
| `boxShadow`                       | BoxShadow                                                  | Shadow properties for the widget.                                                                                                      |
| `borderRadius`                    | BorderRadius                                               | The radius of the widget's corners.                                                                                                    |
| `borderColor`                     | [Color](/widget-reference/types#Color)                     | The color of the widget's border.                                                                                                      |
| `borderWidth`                     | integer                                                    | The width of the widget's border, in logical pixels.                                                                                   |
| `backgroundColor`                 | [Color](/widget-reference/types#Color)                     | The widget's background color.                                                                                                         |
| `backgroundImage`                 | [BackgroundImage](/widget-reference/types#BackgroundImage) | Overlay an image on the background of this widget                                                                                      |
| `backgroundGradient`              | [Gradient](/widget-reference/types#Gradient)               | Background gradient of the box                                                                                                         |
| `padding`                         | Padding                                                    | Padding inside the widget, affecting its child widgets.                                                                                |
| `margin`                          | Margin                                                     | Margin outside the widget, affecting its position relative to others.                                                                  |
| `flex`                            | integer                                                    | Applicable only inside FlexRow or flexRow. Determines the space allocated to this widget relative to its siblings.                  |
| `flexMode`                        | FlexMode                                                   | Determines how the widget should occupy the space allocated to it by the `flex` property.                                              |
| `visible`                         | boolean                                                    | Toggles the widget's visibility. An invisible widget will not occupy UI space unless `visibilityTransitionDuration` is specified.      |
| `visibilityTransitionDuration`    | number                                                     | The duration in seconds for a widget to animate between visible and invisible states.                                                  |
| `elevation`                       | integer                                                    | The z-coordinate at which to place this widget relative to its parent. This affects the size of the shadow displayed.                  |
| `elevationShadowColor`            | [Color](/widget-reference/types#Color)                     | The shadow color for the elevation.                                                                                                    |
| `elevationBorderRadius`           | BorderRadius                                               | Should match the widget's `borderRadius` if set, to ensure the shadow properly matches the widget's border radius.                     |
| `alignment`                       | Alignment                                                  | Aligns this widget relative to its parent.                                                                                             |
| `stackPositionTop`                | integer                                                    | The distance of the child's top edge from the top of the parent Stack. Only applicable for Stack's children.                           |
| `stackPositionBottom`             | integer                                                    | The distance of the child's bottom edge from the bottom of the parent Stack. Only applicable for Stack's children.                     |
| `stackPositionLeft`               | integer                                                    | The distance of the child's left edge from the left of the parent Stack. Only applicable for Stack's children.                         |
| `stackPositionRight`              | integer                                                    | The distance of the child's right edge from the right of the parent Stack. Only applicable for Stack's children.                       |
| `captureWebPointer`               | boolean                                                    | Applicable for Web only. Ensures mouse clicks are captured by the widget, useful for overlaying widgets on certain HTML containers.    |

#### Box Styles (Inherited)

[box](_snippets/box-styles.md ':include')


#### Base Styles (Inherited)

[base](_snippets/base-styles.md ':include')
