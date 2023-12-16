# HTML widget

The HTML Render Widget enables seamless rendering of HTML code within your application, providing a dynamic and interactive experience for users.

[Test in Kitchen Sink](https://studio.ensembleui.com/app/e24402cb-75e2-404c-866c-29e6c3dd7992/screen/ZhTBody9YozadVvTlhW0)

## Properties

| Property | Type   | Description         |
| :------- | :----- | :------------------ |
| text     | string | Enter the HTML text |
| cssStyles | List of [cssStyle](#cssStyle) | Enter the CSS to interact with HTML |

### cssStyle

| Property | Type | Description           |
| :------- | :----- | :------------------ |
| selector | String | Equivalent to the CSS selector. To select any given tag using either tag name, class name or id of that tag |
| properties | [properties](#properties) | The css properties to apply to a selected tag. |

### properties

| Property               | Type          | Description                                       |
| :--------------------- | :------------ | :------------------------------------------------ |
| backgroundColor        | string        | Sets the background color of an element. Useful for emphasizing or styling page sections.                           |
| color                  | string        | Defines the text color within an element, impacting readability and visual hierarchy.                                 |
| counterIncrement       | string        | Specifies the increment value for counters, facilitating dynamic list numbering or tracking.                         |
| counterReset           | string        | Determines the reset value for counters, useful for restarting or initializing counting sequences.                    |
| direction              | string        | Sets the text direction, crucial for proper alignment in multilingual content.                                        |
| display               | string        | Specifies the box model used for an element, influencing its layout and rendering behavior.                             |
| fontFamily            | string        | Defines the font family for text, allowing customization of the typeface for stylistic or thematic consistency.          |
| fontFeatureSettings    | string        | Enables advanced typographic features in fonts, providing fine control over ligatures and stylistic elements.           |
| fontSize              | string        | Sets the font size within an element, influencing the overall visual hierarchy and readability of content.              |
| fontStyle             | string        | Specifies the style of the font, such as italic or normal, contributing to the visual emphasis of displayed text.        |
| fontWeight            | string        | Sets the thickness of characters within a text element, allowing for varied emphasis and hierarchy in content.          |
| height                | string        | Defines the height of an element, offering control over vertical dimensions and aspect ratios.                          |
| letterSpacing         | string        | Adjusts the spacing between characters in text, providing fine-tuned control over readability and aesthetics.           |
| listStyleImage        | string        | Sets an image as the list-item marker, allowing customization of list styles with distinctive visual markers.          |
| listStyleType         | string        | Defines the type of marker or style for list items, contributing to the overall appearance and theme of content lists.    |
| listStylePosition     | string        | Sets the position of the list-item marker, influencing its placement in relation to list item content and surroundings.  |
| margin                | string        | Sets the margin outside an element's border, controlling spacing between the element and its neighboring elements.        |
| padding               | string        | Defines the padding inside an element's border, ensuring space between the element's content and its border.             |
| textAlign             | string        | Aligns text within an element, controlling horizontal positioning such as left-aligned, center-aligned, or right-aligned.|
| textDecoration        | string        | Adds decoration to text, like underline or overline, enhancing visual appeal or conveying additional information.        |
| textDecorationColor   | string        | Sets the color of the text decoration, allowing coordination with the document's color scheme.                            |
| textDecorationStyle   | string        | Defines the style of the text decoration, influencing its visual appearance with options like solid, dashed, or dotted lines.|
| textDecorationThickness| string        | Specifies the thickness of the text decoration, providing control over its visual prominence.                             |
| textOverflow          | string | Defines how text content that overflows its container should be handled, indicating options like ellipsis or clip.        |
| textShadow            | string        | Adds a shadow to text for emphasis, enhancing legibility and visual impact of text elements within a design or layout.    |
| textTransform         | string | Controls the capitalization of text, allowing options like uppercase or lowercase to achieve stylistic preferences.        |
| verticalAlign         | string        | Aligns the vertical positioning of inline elements, ensuring proper alignment in relation to surrounding content.        |
| whiteSpace            | string        | Controls handling of white space inside an element, influencing text wrapping, line breaks, and spacing for optimal readability.|
| width                 | string        | Defines the width of an element, offering control over horizontal dimensions and aspect ratios.                          |
| wordSpacing           | string        | Adjusts spacing between words in text, providing control over the visual appearance and readability of textual content.   |
| lineHeight            | string        | Sets the height of a line of text, influencing overall vertical spacing and readability within an element.              |
| maxLines              | string        | Limits the number of lines for multiline text, controlling display and preventing excessive expansion of text content.   |

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
