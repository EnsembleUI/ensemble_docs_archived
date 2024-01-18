# DataGrid

The DataGrid Widget enables the seamless rendering of data grids, facilitating the organized display and manipulation of tabular data within your application for effective data representation and interaction.

[Test in Kitchen Sink](https://studio.ensembleui.com/app/e24402cb-75e2-404c-866c-29e6c3dd7992/screen/c5940e18-f2c1-4318-8e68-a678a6ae7247)

## Properties

| Property         | Type    | Description                                                                          |
| :--------------- | :------ | :----------------------------------------------------------------------------------- |
| item-template    | object  | [See properties](#item-template)                                                     |
| children         | array   | List of Data Row widgets.                                                            |
| styles           | object  | [See properties](#styles)                                                            |
| horizontalMargin | integer | The leading and trailing gap for the DataGrid view.                                  |
| dataRowHeight    | integer | Set the height of the data row item.                                                 |
| headingRowHeight | integer | Set the height of the heading row item.                                              |
| columnSpacing    | number  | Set the padding for the column.                                                      |
| dividerThickness | integer | Determines the thickness or width of dividers in the DataGrid widget.                |
| DataColumns      | array   | List of data columns                                                                 |
| sorting          | object  | Sort the data columns in ascending or descending order. [See properties](#styles)    | 

### sorting

| Property         | Type   | Description                                                                                                                                          |
| :--------------- | :----- | :--------------------------------------------------------------------------------------------------------------------------------------------------- |
| columnIndex      | String | The index of the data column to be sorted                                                                                                                    |
| order            | String | Set the data column sorting either in `ascending` or `descending` order    

### item-template

| Property | Type   | Description                                                        |
| :------- | :----- | :----------------------------------------------------------------- |
| data     | string | Bind to an array of data from an API response or a variable        |
| name     | string | Set the name to reference as you iterate through the array of data |
| template | array  | The data row widget to render for each item                        |

### styles

| Property                     | Type              | Description                                                                                                                                                                                                                                                                                                                       |
| :--------------------------- | :---------------- | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| expanded                     | boolean           | If the parent is a Row or Column, this flag will stretch this widget in the appropriate direction. (e.g stretch horizontally for parent of type Row)                                                                                                                                                                              |
| borderRadius                 | string or integer | The border radius of the widget.This can be specified using CSS-like notation with 1 to 4 integers. Minimum value: 0.                                                                                                                                                                                                             |
| borderColor                  | integer or string | Sets the border color, starting with '0xFF' for full opacity. `transparent` `black` `blue` `white` `red` `grey` `teal` `amber` `pink` `purple` `yellow` `green` `brown` `cyan` `indigo` `lime` `orange`                                                                                                                           |
| borderWidth                  | integer           | Thickness of the border. Minimum value should be 0.                                                                                                                                                                                                                                                                               |
| shadowColor                  | integer or string | Sets the box shadow color starting with '0xFF' for full opacity. `transparent` `black` `blue` `white` `red` `grey` `teal` `amber` `pink` `purple` `yellow` `green` `brown` `cyan` `indigo` `lime` `orange`                                                                                                                        |
| shadowOffset                 | array             | The values in array define the horizontal and vertical offset of the shadow. Example: if the shadowOffset is set to [2, 4], the shadow will be offset by 2 pixels horizontally and 4 pixels vertically from its original position.                                                                                                |
| shadowStyle                  | string            | The blur style to apply on the shadow `normal`, `solid`, `outer`, `inner`                                                                                                                                                                                                                                                         |
| stackPositionTop             | integer           | The distance of the child's top edge from the top of the stack. This is applicable only for Stack's children.                                                                                                                                                                                                                     |
| stackPositionBottom          | integer           | The distance that the child's bottom edge from the bottom of the stack. This is applicable only for Stack's children.                                                                                                                                                                                                             |
| stackPositionLeft            | integer           | The distance that the child's left edge from the left of the stack. This is applicable only for Stack's children.                                                                                                                                                                                                                 |
| stackPositionRight           | integer           | The distance that the child's right edge from the right of the stack. This is applicable only for Stack's children.                                                                                                                                                                                                               |
| backgroundImage              | object            | Background image of the box. [see properties](#stylesbackgroundImage)                                                                                                                                                                                                                                                             |
| backgroundGradient           | object            | Background gradient of the box [see properties ](#stylesbackgroundGradient)                                                                                                                                                                                                                                                       |
| backgroundColor              | integer or string | Background color of the box. which can be represented in different formats. It can be specified as a number, a predefined color name, or a hexadecimal value starting with '0x'. `transparent` `black` `blue` `white` `red` `grey` `teal` `amber` `pink` `purple` `yellow` `green` `brown` `cyan` `indigo` `lime` `orange`        |
| alignment                    | string            | The alignment of the widget relative to its parent. `topLeft`, `topCenter`, `topRight`, `centerLeft`, `center`, `centerRight`, `bottomLeft`, `bottomCenter`, `bottomRight`                                                                                                                                                        |
| visible                      | boolean           | Toggle a widget visibility on/off. Note that an invisible widget will not occupy UI space, unless the visibilityTransitionDuration is specified.                                                                                                                                                                                  |
| visibilityTransitionDuration | number            | Specify the duration in seconds when a widget animates between visible and not visible state. Note that setting this value will cause the widget to still occupy the UI space even when it is not visible.                                                                                                                        |
| elevation                    | integer           | The z-coordinate at which to place this material relative to its parent. A non-zero value will show a shadow, with its size relative to the elevation value. Minimum value: 0, Maximum value: 24                                                                                                                                  |
| elevationShadowColor         | integer or string | The shadow color for the elevation, which can be represented in different formats. It can be specified as a number, a predefined color name, or a hexadecimal value starting with '0x'. `transparent` `black` `blue` `white` `red` `grey` `teal` `amber` `pink` `purple` `yellow` `green` `brown` `cyan` `indigo` `lime` `orange` |
| elevationBorderRadius        | string or integer | The border radius of the widget.This can be specified using CSS-like notation with 1 to 4 integers. Minimum value: 0.                                                                                                                                                                                                             |
| margin                       | string or integer | Margin with CSS-style notation                                                                                                                                                                                                                                                                                                    |
| padding                      | string or integer | Padding with CSS-style value                                                                                                                                                                                                                                                                                                      |
| width                        | integer           | The width property determines the horizontal size of an element, allowing control over its width dimension within the layout.                                                                                                                                                                                                     |
| height                       | integer           | The height property determines the vertical size of an element, allowing control over its height dimension within the layout.                                                                                                                                                                                                     |
| captureWebPointer            | boolean           | Applicable for Web only. When overlaying widgets on top of certain HTML container (e.g. Maps), the mouse click is captured by the HTML container, causing issue interacting with the widget. Use this to capture and maintain the mouse pointer on your widget.                                                                   |
| headingText                  | object            | Set the text style for the heading text.[see properties](#headingtext)                                                                                                                                                                                                                                                            |
| dataText                     | object            | Set the text style for the data item text. [see properties](#headingtext)                                                                                                                                                                                                                                                         |

### styles.backgroundGradient

| Property | Type   | Description                                                                                                                                                                                    |
| :------- | :----- | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| colors   | array  | The list of colors used for the gradient. Colors can be represented in different formats. It can be specified as a number, a predefined color name, or a hexadecimal value starting with '0x'. |
| start    | string | The starting position of the gradient                                                                                                                                                          |
| end      | string | The ending position of the gradient                                                                                                                                                            |

### styles.backgroundImage

| Property  | Type   | Description                                                                                                                                        |
| :-------- | :----- | :------------------------------------------------------------------------------------------------------------------------------------------------- |
| source    | string | The Image URL to fill the background                                                                                                               |
| fit       | string | How to fit the image within our width/height or our parent (if dimension is not specified) . [see options](#fit-options-for-stylesbackgroundimage) |
| alignment | string | Alignment of the background image                                                                                                                  |

#### Fit options for styles.backgroundImage

| Option    | Description                                                                                         |
| :-------- | :-------------------------------------------------------------------------------------------------- |
| fill      | Stretch our image to fill the dimension, and distorting the aspect ratio if needed                  |
| contain   | Scale the image such that the entire image is contained within our dimension                        |
| cover     | Scale the image to fill our dimension, clipping the image as needed                                 |
| fitWidth  | Scale the image to fit the width, and clipping the height if needed                                 |
| fitHeight | Scale the image to fit the height, and clipping the width if needed                                 |
| none      | Center-Align the original image size, clipping the content if needed                                |
| scaleDown | Center-Align the image and only scale down to fit. Image will not be scaled up to bigger dimension. |

#### styles.headingText

| Property   | Type              | Description                                                                                                                                                                                                                                                                                                                         |
| :--------- | :---------------- | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| fontSize   | integer           | Sets the size of the text.                                                                                                                                                                                                                                                                                                          |
| color      | integer or string | The color specification for the text, which can be represented in different formats. It can be specified as a number, a predefined color name, or a hexadecimal value starting with '0x'. `transparent` `black` `blue` `white` `red` `grey` `teal` `amber` `pink` `purple` `yellow` `green` `brown` `cyan` `indigo` `lime` `orange` |
| decoration | string            | A linear decoration to draw near the text. `none` `lineThrough` `underline` `overline`                                                                                                                                                                                                                                              |
| font       | string            | Default built-in style for this text. `heading` `title` `subtitle`                                                                                                                                                                                                                                                                  |
| fontWeight | string            | The thickness of the glyphs used to draw the text. `light` `normal` `bold` `w100` `w200` `w300` `w400` `w500` `w600` `w700` ` w800``w900 `                                                                                                                                                                                          |
| lineHeight | string or integer | The line height of the text, which determines the vertical spacing between lines. It can be specified as, a number, or a string chosen from a set of predefined values: `default` `1.0` `1.15` `1.25` `1.5` `2.0` `2.5`                                                                                                             |
| textStyle  | string            | A linear decoration to draw near the text or whether to slant the glyphs in font. `normal` `italic` `underline` `strikethrough` `italic_underline` `italic_strikethrough`                                                                                                                                                           |                                                                                                                       |