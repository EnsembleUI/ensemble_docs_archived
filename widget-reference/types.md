# Type References
These Types objects are used in multiple widgets. They are defined here for reference.

## TextStyle
TextStyle allows customization of font, size, color, decoration, and more to enhance the UI's textual elements.

| Property           | Type                                     | Description                                                                                                                                                       |
|:-------------------|:-----------------------------------------|:------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| fontFamily         | string                                   | The name of the font family.                                                                                                                                      |
| fontSize           | integer                                  | The size of the font. Valid values range from 1 to 1000.                                                                                                          |
| lineHeightMultiple | number                                   | A multiplier applied to the font size to determine line height (e.g., 2.0 for double the height of the font size). By default this value varies on the font used. |
| fontWeight         | [FontWeight](#FontWeight)                | The weight of the font.                                                                                                                                           |
| isItalic           | boolean                                  | If true, the text is italicized.                                                                                                                                  |
| color              | [Color](#Color)                          | The color of the text.                                                                                                                                            |
| backgroundColor    | [Color](#Color)                          | The background color of the text                                                                                                                                  |
| gradient           | [Gradient](#gradient)                    | A gradient effect applied to the text.                                                                                           |
| decoration         | enum                                     | The text decoration: `none`, `lineThrough`, `underline`, `overline`.                                                                                              |
| decorationStyle    | enum                                     | The style of the text decoration (if decoration is not `none`): `solid`, `double`, `dotted`, `dashed`, `wavy`.                                                    |
| overflow           | enum                                     | Treatment of text exceeding available space: `clip`, `fade`, `ellipsis`, `visible`.                                                                               |
| letterSpacing      | integer                                  | Space between characters in the text.                                                                                                                             |
| wordSpacing        | integer                                  | Space between words in the text.                                                                                                                                  |

## Gradient

| Property | Type                                           | Description                                                                                                |
|:---------|:-----------------------------------------------|:-----------------------------------------------------------------------------------------------------------|
| colors   | [Color[]](#Color)                              | An array of colors used for the gradient.                                                                  |
| stops    | number[]                                       | The list of numbers from 0.0 (where the gradient starts) to 1.0 (where the gradient ends), one for each colors specified                         |
| start    | [Alignment](/widget-reference/types#Alignment) | The starting position of the gradient.                                                                     |
| end      | [Alignment](/widget-reference/types#Alignment) | The ending position of the gradient.                                                                       |

## FontWeight
This property defines the weight (thickness) of the font used in text styling. It includes standard weights and numerical weights for finer control.

| FontWeight | Description                               |
|------------|-------------------------------------------|
| light      | Lighter font weight.                      |
| normal     | Normal or regular font weight.            |
| bold       | Bold font weight.                         |
| w100-w900  | Font weight from 100-900 (light to bold). |

## Color
This property defines the color based on a pre-defined names (see the supported names below) or as hexdecimal numbers that represent color codes. 

You can use color codes in one of the two ways -
- HTML/CSS format as a string with quotes around it. Starts with # and contains 6 or 8 characters after it. For example, '#FF5733' for orange. `Remember to put quotes around it as # is a comment character in yaml`.
- The common programming language format without quotes. Starts with 0x and has 8 characters after it. For example, 0xFFFF5733 for orange.

Either way works fine and internally color codes are automatically converted to the programming language format. 

| Name        | Description      |
|-------------|------------------|
| transparent | Transparent      |
| black       | Black color.     |
| blue        | Blue color.      |
| white       | White color.     |
| red         | Red color.       |
| grey        | Grey color.      |
| teal        | Teal color.      |
| amber       | Amber color.     |
| pink        | Pink color.      |
| purple      | Purple color.    |
| yellow      | Yellow color.    |
| green       | Green color.     |
| brown       | Brown color.     |
| cyan        | Cyan color.      |
| indigo      | Indigo color.    |
| lime        | Lime color.      |
| orange      | Orange color.    |

## Alignment
This property is used to specify the alignment of an element within its parent.

| Alignment    | Description                                           |
|--------------|-------------------------------------------------------|
| topLeft      | Aligns the element at the top-left corner.            |
| topCenter    | Aligns the element at the top-center.                 |
| topRight     | Aligns the element at the top-right corner.           |
| centerLeft   | Aligns the element at the center-left side.           |
| center       | Centers the element both horizontally and vertically. |
| centerRight  | Aligns the element at the center-right side.          |
| bottomLeft   | Aligns the element at the bottom-left corner.         |
| bottomCenter | Aligns the element at the bottom-center.              |
| bottomRight  | Aligns the element at the bottom-right corner.        |

## TapHaptic
This property specifies the type of haptic feedback to be played upon tapping an element. The options are listed in decreasing order of intensity.

| Haptic Feedback       | Description                                                                                      |
|-----------------------|--------------------------------------------------------------------------------------------------|
| heavyImpact           | Generates a haptic feedback of the highest intensity.                                            |
| mediumImpact          | Provides a haptic feedback of medium intensity.                                                  |
| lightImpactHaptic     | Offers a lighter haptic impact as feedback.                                                      |
| selectionClickHaptic  | Produces a mild, click-like haptic feedback, typically used for selection changes.               |
| vibrateHaptic         | Triggers a standard vibration as haptic feedback.                                                |

## BackgroundImage
This property configures a background image for a widget, including its source, fit, alignment, and a fallback option.

| Property  | Type                                           | Description                                                                                                         |
|:----------|:-----------------------------------------------|:--------------------------------------------------------------------------------------------------------------------|
| source    | string                                         | The Image URL to fill the background.                                                                               |
| fallback  | [Widget](/widget-reference/directory)          | Return an inline widget or specify a custom widget to be rendered when the backgroundImage fails to load the image. |
| fit       | [Fit](/widget-reference/types#Fit)             | How to fit the image within the dimensions.                                                                         |
| alignment | [Alignment](/widget-reference/types#Alignment) | Align this image relative to its parent or dimensions.                                                              |


## Fit

This property determines how to fit the image within the dimension or the parent container.

| Fit Mode   | Description                                                                                         |
|------------|-----------------------------------------------------------------------------------------------------|
| fill       | Stretch our image to fill the dimension, potentially distorting the aspect ratio if necessary.      |
| contain    | Scale the image such that the entire image is contained within our dimension.                       |
| cover      | Scale the image to fill our dimension, clipping the image as needed.                                |
| fitWidth   | Scale the image to fit the width, and clipping the height if needed.                                |
| fitHeight  | Scale the image to fit the height, and clipping the width if needed.                                |
| none       | Center-Align the original image size, clipping the content if needed.                               |
| scaleDown  | Center-Align the image and only scale down to fit. Image will not be scaled up to bigger dimension. |


## Border

| Property     | Type                                   | Description                                            |
|:-------------|:---------------------------------------|:-------------------------------------------------------|
| borderRadius | integer / string                       | Border Radius with CSS-like notation (1 to 4 integers) |
| borderColor  | [Color](/widget-reference/types#Color) | Border color, starting with '0xFF' for full opacity.   |
| borderWidth  | integer                                | The thickness of the border. Minimum value: 0.         |

## Shadow
This property defines the shadow properties for a widget, including color, offset, radius, blur radius, and style.

| Property         | Type              | Description                                                                                                                                                                                                                    |
|:-----------------|:------------------|:-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| shadowColor      | string / number   | Box shadow color starting with '0xFF' for full opacity.                                                                                                                                                                        |
| shadowOffset     | array of integers | Offset of the shadow in the format `[x, y]`.                                                                                                                                                                                   |
| shadowRadius     | integer           | The radius of the shadow. Minimum value: 0.                                                                                                                                                                                    |
| shadowBlurRadius | integer           | The blur radius of the shadow. Minimum value: 0.                                                                                                                                                                               |
| shadowStyle      | enum              | The blur style to apply on the shadow: <br/>`normal` - Fuzzy inside and outside (default)<br/>`solid` - Solid inside, fuzzy outside.<br/>`outer` - Nothing inside, fuzzy outside.<br/>`inner` - Fuzzy inside, nothing outside. |
