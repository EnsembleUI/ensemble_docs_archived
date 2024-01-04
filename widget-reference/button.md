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
| onTapHaptic | enum | The type of haptic to perform when button is pressed. It should be one of heavyImpact, mediumImpact, lightImpact, selectionClick, and vibrate |
| styles       | object  | [see properties](#styles)                                                                                           |
| endingIcon   | object  | Icon placed behind the label, according to device text alignment                                                    |
| startingIcon | object  | Icon placed in front of the label, according to device text alignment                                               |
| gap          | integer | The gap between the starting icon and ending icon                                                                   |

### styles

| Property        | Type              | Description                                                                                                                                                                                                                                                                                                                       |
| :-------------- | :---------------- | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| outline         | boolean           | Whether the button should have an outline border instead of filled background                                                                                                                                                                                                                                                     |
| color           | integer or string | Set the color for the button label starting with '0xFF' for full opacity. `transparent`, `black`, `blue`, `white`, `red`, `grey`, `teal`, `amber`, `pink`, `purple`, `yellow`, `green`, `brown`, `cyan`, `indigo`, `lime`, `orange`                                                                                                            |
| borderRadius    | string or integer | The border radius of the widget. This can be specified using CSS-like notation with 1 to 4 integers. Minimum value: 0.                                                                                                                                                                                                             |
| borderColor     | integer or string | Sets the border color, starting with '0xFF' for full opacity. `transparent`, `black`, `blue`, `white`, `red`, `grey`, `teal`, `amber`, `pink`, `purple`, `yellow`, `green`, `brown`, `cyan`, `indigo`, `lime`, `orange`                                                                                                                           |
| borderWidth     | integer           | Thickness of the border. Minimum value should be 0.                                                                                                                                                                                                                                                                               |
| shadowColor     | integer or string | Sets the box shadow color starting with '0xFF' for full opacity. `transparent`, `black`, `blue`, `white`, `red`, `grey`, `teal`, `amber`, `pink`, `purple`, `yellow`, `green`, `brown`, `cyan`, `indigo`, `lime`, `orange`                                                                                                                        |
| shadowOffset    | array             | The values in the array define the horizontal and vertical offset of the shadow. Example: if the shadowOffset is set to [2, 4], the shadow will be offset by 2 pixels horizontally and 4 pixels vertically from its original position.                                                                                                |
| shadowRadius    | string or integer | The border radius of the widget. This can be specified using CSS-like notation with 1 to 4 integers. Minimum value: 0.                                                                                                                                                                                                             |
| shadowStyle     | string            | The blur style to apply on the shadow: `normal`, `solid`, `outer`, `inner`                                                                                                                                                                                                                                                                                                                   |
| labelStyle      | object            | An opaque object that determines the size, color, and decoration of text. [see properties](#stylestextstyles)                                                                                                                                                                                                                     |
| nameTextStyle | [TextStyle](/widget-reference/types#TextStyle) | Adjust the text styling for the name.

### Box Styles (Inherited)
This widget also inherits these styles

[box](_snippets/box-styles.md ':include')

### Base Styles (Inherited)
This widget also inherits these styles

[base](_snippets/base-styles.md ':include')

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
