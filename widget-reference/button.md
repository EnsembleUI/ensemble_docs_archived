# Button widget

A control that can execute an action on tap or click.

[Test in Kitchen Sink](https://studio.ensembleui.com/app/e24402cb-75e2-404c-866c-29e6c3dd7992/screen/09c1087b-f9ee-4a8c-9286-e0e881184c07)

## Properties

| Property     | Type    | Description                                                                                                         |
| :----------- | :------ | :------------------------------------------------------------------------------------------------------------------ |
| label        | string  | The button label                                                                                                    |
| enabled      | boolean | Enables or disables the interactivity and input functionality of the widget                                         |
| submitForm   | boolean | If the button is inside a Form and upon on tap, it will execute the form's onSubmit action if this property is TRUE |
| onTap        | action  | Call Ensemble's built-in functions or execute code                                                                  |
| styles       | object  | [see properties](#styles)                                                                                           |
| endingIcon   | object  | Icon placed behind the label, according to device text alignment                                                    |
| startingIcon | object  | Icon placed in front of the label, according to device text alignment                                               |
| gap          | integer | The gap between the starting icon and ending icon                                                                   |

### styles

| Property                     | Type              | Description                                                                                                                                                                                                                                                                                                                       |
| :--------------------------- | :---------------- | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| expanded                     | boolean           | If the parent is a Row or Column, this flag will stretch this widget in the appropriate direction. (e.g stretch horizontally for parent of type Row)                                                                                                                                                                              |
| width                        | integer           | The width property determines the horizontal size of an element, allowing control over its width dimension within the layout.                                                                                                                                                                                                     |
| height                       | integer           | The height property determines the vertical size of an element, allowing control over its height dimension within the layout.                                                                                                                                                                                                     |
| outline                      | boolean           | Whether the button should have an outline border instead of filled background                                                                                                                                                                                                                                                     |
| color                        | integer or string | Set the color for the button label starting with '0xFF' for full opacity. `transparent` `black` `blue` `white` `red` `grey` `teal` `amber` `pink` `purple` `yellow` `green` `brown` `cyan` `indigo` `lime` `orange`                                                                                                               |
| backgroundImage              | object            | Background image of the box. [see properties](#stylesbackgroundImage)                                                                                                                                                                                                                                                             |
| backgroundGradient           | object            | Background gradient of the box [see properties ](#stylesbackgroundGradient)                                                                                                                                                                                                                                                       |
| elevation                    | integer           | The z-coordinate at which to place this material relative to its parent. A non-zero value will show a shadow, with its size relative to the elevation value. Minimum value: 0, Maximum value: 24                                                                                                                                  |
| elevationShadowColor         | integer or string | The shadow color for the elevation, which can be represented in different formats. It can be specified as a number, a predefined color name, or a hexadecimal value starting with '0x'. `transparent` `black` `blue` `white` `red` `grey` `teal` `amber` `pink` `purple` `yellow` `green` `brown` `cyan` `indigo` `lime` `orange` |
| elevationBorderRadius        | string or integer | The border radius of the widget.This can be specified using CSS-like notation with 1 to 4 integers. Minimum value: 0.                                                                                                                                                                                                             |
| stackPositionTop             | integer           | The distance of the child's top edge from the top of the stack. This is applicable only for Stack's children.                                                                                                                                                                                                                     |
| stackPositionBottom          | integer           | The distance that the child's bottom edge from the bottom of the stack. This is applicable only for Stack's children.                                                                                                                                                                                                             |
| stackPositionLeft            | integer           | The distance that the child's left edge from the left of the stack. This is applicable only for Stack's children.                                                                                                                                                                                                                 |
| stackPositionRight           | integer           | The distance that the child's right edge from the right of the stack. This is applicable only for Stack's children.                                                                                                                                                                                                               |
| borderRadius                 | string or integer | The border radius of the widget.This can be specified using CSS-like notation with 1 to 4 integers. Minimum value: 0.                                                                                                                                                                                                             |
| borderColor                  | integer or string | Sets the border color, starting with '0xFF' for full opacity. `transparent` `black` `blue` `white` `red` `grey` `teal` `amber` `pink` `purple` `yellow` `green` `brown` `cyan` `indigo` `lime` `orange`                                                                                                                           |
| borderWidth                  | integer           | Thickness of the border. Minimum value should be 0.                                                                                                                                                                                                                                                                               |
| shadowColor                  | integer or string | Sets the box shadow color starting with '0xFF' for full opacity. `transparent` `black` `blue` `white` `red` `grey` `teal` `amber` `pink` `purple` `yellow` `green` `brown` `cyan` `indigo` `lime` `orange`                                                                                                                        |
| shadowOffset                 | array             | The values in array define the horizontal and vertical offset of the shadow. Example: if the shadowOffset is set to [2, 4], the shadow will be offset by 2 pixels horizontally and 4 pixels vertically from its original position.                                                                                                |
| shadowRadius                 | string or integer | The border radius of the widget.This can be specified using CSS-like notation with 1 to 4 integers. Minimum value: 0.                                                                                                                                                                                                             |
| shadowStyle                  | string            | The blur style to apply on the shadow `normal`, `solid`, `outer`, `inner`                                                                                                                                                                                                                                                         |
| visible                      | boolean           | Toggle a widget visibility on/off. Note that an invisible widget will not occupy UI space, unless the visibilityTransitionDuration is specified.                                                                                                                                                                                  |
| visibilityTransitionDuration | number            | Specify the duration in seconds when a widget animates between visible and not visible state. Note that setting this value will cause the widget to still occupy the UI space even when it is not visible.                                                                                                                        |
| margin                       | string or integer | Margin with CSS-style notation                                                                                                                                                                                                                                                                                                    |
| labelStyle                   | object            | An opaque object that determines the size, color, and decoration of text. [see properties](#stylestextstyles)                                                                                                                                                                                                                     |
| padding                      | string or integer | Padding with CSS-style value                                                                                                                                                                                                                                                                                                      |
| alignment                    | string            | The alignment of the widget relative to its parent. `topLeft`, `topCenter`, `topRight`, `centerLeft`, `center`, `centerRight`, `bottomLeft`, `bottomCenter`, `bottomRight`                                                                                                                                                        |
| captureWebPointer            | boolean           | Applicable for Web only. When overlaying widgets on top of certain HTML container (e.g. Maps), the mouse click is captured by the HTML container, causing issue interacting with the widget. Use this to capture and maintain the mouse pointer on your widget.                                                                   |

##### startingIcon

| Property | Type    | Description                                        |
| :------- | :------ | :------------------------------------------------- |
| name     |         | The name of the icon                               |
| library  | string  | Which icon library to use. `default` `fontAwesome` |
| color    |         |                                                    |
| size     | integer |                                                    |

##### endingIcon

| Property | Type    | Description                                        |
| :------- | :------ | :------------------------------------------------- |
| name     |         | The name of the icon                               |
| library  | string  | Which icon library to use. `default` `fontAwesome` |
| color    |         |                                                    |
| size     | integer |                                                    |

### styles.backgroundGradient

| Property | Type   | Description                                                                                                                                                                                    |
| :------- | :----- | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| colors   | array  | The list of colors used for the gradient. Colors can be represented in different formats. It can be specified as a number, a predefined color name, or a hexadecimal value starting with '0x'. |
| start    | string | The starting position of the gradient                                                                                                                                                          |
| end      | string | The ending position of the gradient                                                                                                                                                            |

### styles.textStyles

| Property           | Type              | Description                                                                                                                                                                                                                                                                                                                                             |
| :----------------- | :---------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| fontSize           | integer           | Sets the size of the text.                                                                                                                                                                                                                                                                                                                              |
| fontWeight         | string            | The thickness of the glyphs used to draw the text. `light` `normal` `bold` `w100` `w200` `w300` `w400` `w500` `w600` `w700` ` w800``w900 `                                                                                                                                                                                                              |
| color              | integer or string | The color specification for the text, icons, divider etc, which can be represented in different formats. It can be specified as a number, a predefined color name, or a hexadecimal value starting with '0x'. `transparent` `black` `blue` `white` `red` `grey` `teal` `amber` `pink` `purple` `yellow` `green` `brown` `cyan` `indigo` `lime` `orange` |
| overflow           | string            | Set treatment of text longer than available space `wrap` `visible` `clip` `ellipsis`                                                                                                                                                                                                                                                                    |
| maxLines           | integer           | The maximum number of lines to show at one time, wrapping if necessary. If this is 1 (the default), the text will not wrap, but will scroll horizontally instead.                                                                                                                                                                                       |
| backgroundColor    | integer or string | Background color of the box. which can be represented in different formats. It can be specified as a number, a predefined color name, or a hexadecimal value starting with '0x'. `transparent` `black` `blue` `white` `red` `grey` `teal` `amber` `pink` `purple` `yellow` `green` `brown` `cyan` `indigo` `lime` `orange`                              |
| fontfamily         | string            | Allows users to chose a specific font-family other than the default one.                                                                                                                                                                                                                                                                                |
| decoration         | string            | A linear decoration to draw near the text or whether to slant the glyphs in font. `none` `lineThrough` `underline` `overline`                                                                                                                                                                                                                           |
| decorationStyle    | string            | The style in which to paint the text decorations (e.g., dashed). `solid` `double` `dotted` `dashed` `wavy`                                                                                                                                                                                                                                              |
| isItalic           | boolean           | Whether the text should be italic or not                                                                                                                                                                                                                                                                                                                |
| lineHeightMultiple | integer           | A multiple of the fontSize to determine the line height. (e.g. 2.0 means the line height is double the height the font size occupies). Default null. (note that 1.0 is not the default depending on the font)                                                                                                                                           |
| letterSpacing      | integer           | The amount of space (in logical pixels) to add between each letter. A negative value can be used to bring the letters closer.                                                                                                                                                                                                                           |
| wordSpacing        | integer           | The amount of space (in logical pixels) to add at each sequence of white-space (i.e. between each word). A negative value can be used to bring the words closer.                                                                                                                                                                                        |

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
