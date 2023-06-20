# Carousel

The Carousel Widget allows you to create and render carousels, enabling the presentation of multiple items in a visually engaging and interactive slideshow format within your application.

[Test in Kitchen Sink](https://studio.ensembleui.com/app/e24402cb-75e2-404c-866c-29e6c3dd7992/screen/2e1d88b1-f281-4c2c-9bb1-bd18016d2b8c)

## Properties

| Property      | Type   | Description                                                                                                                                                                                                                                            |
| :------------ | :----- | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| children      | array  | List of widgets                                                                                                                                                                                                                                        |
| onItemChange  | action | Dispatch when an carousel item is in focus. For SingleView, this happens when the item is scroll into view. For scrolling MultiView, the event dispatches only when you tap on the item. The index of the item can be retrieved using 'selectedIndex'. |
| styles        | object | [See properties](#styles)                                                                                                                                                                                                                              |
| item-template | object | [See properties](#item-template)                                                                                                                                                                                                                       |

### styles

| Property               | Type              | Description                                                                                                                                                                                                                                                                                                                |
| :--------------------- | :---------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| layout                 | string            | Show a SingleView (on screen one at a time), MultiView (scrolling items), or automatically switch between the views with autoLayoutBreakpoint                                                                                                                                                                              |
| autoLayoutBreakpoint   | integer           | Show multiple views on the carousel if the breakpoint is equal or larger than this threshold, otherwise show single view. (default 768)                                                                                                                                                                                    |
| height                 | integer           | The height of each view                                                                                                                                                                                                                                                                                                    |
| gap                    | integer           | The gap between each views, but also act as a left-right margin in a single view                                                                                                                                                                                                                                           |
| leadingGap             | integer           | The space before the first item. Note that the left edge of the scroll area is still controlled by padding or margin.                                                                                                                                                                                                      |
| trailingGap            | integer           | The space after the last item. Note that the right edge of the scroll area is still controlled by padding or margin.                                                                                                                                                                                                       |
| singleItemWidthRatio   | number            | The screen width ratio for each carousel item (in single item mode). Value ranges from 0.0 to 1.0 for the full width. (default 1.0)                                                                                                                                                                                        |
| multipleItemWidthRatio | number            | The screen width ratio for each carousel item (in multiple item mode). Value ranges from 0.0 to 1.0 for the full width (default 0.6)                                                                                                                                                                                       |
| indicatorType          | string            | How the view indicator should be displayed                                                                                                                                                                                                                                                                                 |
| indicatorPosition      | string            | Where to display the indicator if specified                                                                                                                                                                                                                                                                                |
| indicatorWidth         | integer           | Sets the width of the carousel indicators within the Carousel                                                                                                                                                                                                                                                              |
| indicatorHeight        | integer           | Adjusts the height of the carousel indicators within the Carousel                                                                                                                                                                                                                                                          |
| indicatorMargin        | string or integer | The margin around each indicator                                                                                                                                                                                                                                                                                           |
| borderRadius           | string or integer | The border radius of the widget.This can be specified using CSS-like notation with 1 to 4 integers. Minimum value: 0.                                                                                                                                                                                                      |
| borderColor            | integer or string | Sets the border color, starting with '0xFF' for full opacity. `transparent` `black` `blue` `white` `red` `grey` `teal` `amber` `pink` `purple` `yellow` `green` `brown` `cyan` `indigo` `lime` `orange`                                                                                                                    |
| borderWidth            | integer           | Thickness of the border. Minimum value should be 0.                                                                                                                                                                                                                                                                        |
| shadowColor            | integer or string | Sets the box shadow color starting with '0xFF' for full opacity. `transparent` `black` `blue` `white` `red` `grey` `teal` `amber` `pink` `purple` `yellow` `green` `brown` `cyan` `indigo` `lime` `orange`                                                                                                                 |
| shadowOffset           | array             | The values in array define the horizontal and vertical offset of the shadow. Example: if the shadowOffset is set to [2, 4], the shadow will be offset by 2 pixels horizontally and 4 pixels vertically from its original position.                                                                                         |
| shadowRadius           | string or integer | The border radius of the widget.This can be specified using CSS-like notation with 1 to 4 integers. Minimum value: 0.                                                                                                                                                                                                      |
| shadowStyle            | string            | The blur style to apply on the shadow `normal`, `solid`, `outer`, `inner`                                                                                                                                                                                                                                                  |
| margin                 | string or integer | Margin with CSS-style notation                                                                                                                                                                                                                                                                                             |
| padding                | string or integer | Padding with CSS-style value                                                                                                                                                                                                                                                                                               |
| backgroundImage        | object            | Background image of the box. [see properties](#stylesbackgroundImage)                                                                                                                                                                                                                                                      |
| backgroundGradient     | object            | Background gradient of the box [see properties ](#stylesbackgroundGradient)                                                                                                                                                                                                                                                |
| backgroundColor        | integer or string | Background color of the box. which can be represented in different formats. It can be specified as a number, a predefined color name, or a hexadecimal value starting with '0x'. `transparent` `black` `blue` `white` `red` `grey` `teal` `amber` `pink` `purple` `yellow` `green` `brown` `cyan` `indigo` `lime` `orange` |
| expanded               | boolean           | If the parent is a Row or Column, this flag will stretch this widget in the appropriate direction. (e.g. stretch horizontally for parent of type Row)                                                                                                                                                                      |

### item-template

| Property | Type   | Description                                                        |
| :------- | :----- | :----------------------------------------------------------------- |
| data     | string | Bind to an array of data from an API response or a variable        |
| name     | string | Set the name to reference as you iterate through the array of data |
| template | widget | The widget to render for each item                                 |

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
