# Staggered Grid

StaggeredGrid is a versatile widget that arranges its children in a staggered layout, allowing flexible and dynamic positioning for unique and visually appealing UI designs.

[Test in Kitchen Sink](https://studio.ensembleui.com/app/e24402cb-75e2-404c-866c-29e6c3dd7992/screen/a9iIs4wvgqDOhU4rN6GR?propertyPanelEnabled=true&instantPreviewDisabled=false&editorV2Enabled=true)

## Properties

| Property      | Type   | Description                                                                             |
| :------------ | :----- | :-------------------------------------------------------------------------------------- |
| onItemTap     | action | Call Ensemble's built-in functions or execute code when tapping on an item in the list. |
| onItemTapHaptic | enum | The type of haptic to perform when a item is pressed. It should be one of heavyImpact, mediumImpact, lightImpact, selectionClick, and vibrate |
| children      | array  | List of widgets                                                                         |
| styles        | object | [See properties](#styles)                                                               |
| item-template | object | [See properties](#item-template)                                                        |

### item-template

| Property | Type   | Description                                                        |
| :------- | :----- | :----------------------------------------------------------------- |
| data     | string | Bind to an array of data from an API response or a variable        |
| name     | string | Set the name to reference as you iterate through the array of data |
| template | widget | The widget to render for each item                                 |

### styles

| Property                     | Type              | Description                                                                                                                                                                                                                                                                                                                       |
| :--------------------------- | :---------------- | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| crossAxisCount               | integer           | Creates a list of staggered grid tile in the cross axis                                                                                                                                                                                                                                                                           |
| verticalGap                  | integer           | Vertical gap between the staggered grid tiles                                                                                                                                                                                                                                                                                     |
| horizontalGap                | integer           | Horizontal gap between the staggered grid tiles                                                                                                                                                                                                                                                                                   |
| elevation                    | integer           | The z-coordinate at which to place this material relative to its parent. A non-zero value will show a shadow, with its size relative to the elevation value. Minimum value: 0, Maximum value: 24                                                                                                                                  |
| elevationShadowColor         | integer or string | The shadow color for the elevation, which can be represented in different formats. It can be specified as a number, a predefined color name, or a hexadecimal value starting with '0x'. `transparent` `black` `blue` `white` `red` `grey` `teal` `amber` `pink` `purple` `yellow` `green` `brown` `cyan` `indigo` `lime` `orange` |
| elevationBorderRadius        | string or integer | The border radius of the widget.This can be specified using CSS-like notation with 1 to 4 integers. Minimum value: 0.                                                                                                                                                                                                             |
| stackPositionTop             | integer           | The distance of the child's top edge from the top of the stack. This is applicable only for Stack's children.                                                                                                                                                                                                                     |
| stackPositionBottom          | integer           | The distance that the child's bottom edge from the bottom of the stack. This is applicable only for Stack's children.                                                                                                                                                                                                             |
| stackPositionLeft            | integer           | The distance that the child's left edge from the left of the stack. This is applicable only for Stack's children.                                                                                                                                                                                                                 |
| stackPositionRight           | integer           | The distance that the child's right edge from the right of the stack. This is applicable only for Stack's children.                                                                                                                                                                                                               |
| captureWebPointer            | boolean           | Applicable for Web only. When overlaying widgets on top of certain HTML container (e.g. Maps), the mouse click is captured by the HTML container, causing issue interacting with the widget. Use this to capture and maintain the mouse pointer on your widget.                                                                   |
| alignment                    | string            | The alignment of the widget relative to its parent. `topLeft`, `topCenter`, `topRight`, `centerLeft`, `center`, `centerRight`, `bottomLeft`, `bottomCenter`, `bottomRight`                                                                                                                                                        |
| visible                      | boolean           | Toggle a widget visibility on/off. Note that an invisible widget will not occupy UI space, unless the visibilityTransitionDuration is specified.                                                                                                                                                                                  |
| visibilityTransitionDuration | number            | Specify the duration in seconds when a widget animates between visible and not visible state. Note that setting this value will cause the widget to still occupy the UI space even when it is not visible.                                                                                                                        |
| expanded                     | boolean           | If the parent is a Row or Column, this flag will stretch this widget in the appropriate direction. (e.g stretch horizontally for parent of type Row)                                                                                                                                                                              |
