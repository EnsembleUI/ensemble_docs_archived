# Button widget

A control that can execute an action on tap or click.

[Test in Kitchen Sink](https://studio.ensembleui.com/app/e24402cb-75e2-404c-866c-29e6c3dd7992/screen/09c1087b-f9ee-4a8c-9286-e0e881184c07)

## Properties

| Property     | Type    | Description                                                                                                         |
| :----------- | :------ | :------------------------------------------------------------------------------------------------------------------ |
| label        | string  | The button label                                                                                                    |
| enabled      | boolean | Enables or disables the interactivity and input functionality of the widget                                         |
| submitForm   | boolean | If the button is inside a Form and upon on tap, it will execute the form's onSubmit action if this property is TRUE |
| onTap        | [action](/actions/directory.md)  | Call Ensemble's built-in functions or execute code                                                                  |
| onTapHaptic | enum | The type of haptic to perform when button is pressed. It should be one of heavyImpact, mediumImpact, lightImpact, selectionClick, and vibrate        |                                                                                           |
| endingIcon   | object  | Icon placed behind the label, according to device text alignment                                                    |
| startingIcon | object  | Icon placed in front of the label, according to device text alignment                                               |
| gap          | integer | The gap between the starting icon and ending icon                                                                   |

### Styles

| Property        | Type              | Description                                                                                                                                                                                                                                                                                                                       |
| :-------------- | :---------------- | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| outline         | boolean           | Whether the button should have an outline border instead of filled background                                                                                                                                                                                                                                                     |
| color           | [integer or string](/widget-reference/types#Color) | Set the color for the button label starting with '0xFF' for full opacity. `transparent`, `black`, `blue`, `white`, `red`, `grey`, `teal`, `amber`, `pink`, `purple`, `yellow`, `green`, `brown`, `cyan`, `indigo`, `lime`, `orange`                                                                                                            |

| labelStyle      | object            | An opaque object that determines the size, color, and decoration of text.                                                                                                                                                                                                                     |
| nameTextStyle | [TextStyle](/widget-reference/types#TextStyle) | Adjust the text styling for the name.

### Box Styles (Inherited)
This widget also inherits these styles

[box](_snippets/box-styles.md ':include')

### Base Styles (Inherited)
This widget also inherits these styles

[base](_snippets/base-styles.md ':include')

[Icon](/widget-reference/Icon.md)

##### startingIcon

| Property | Type    | Description                                        |
| :------- | :------ | :------------------------------------------------- |
| name     | string  | The name of the icon                               |
| library  | string  | Which icon library to use. `default` `fontAwesome` |
| color    | color   | (/widget-reference/types#Color)                    |
| size     | integer |                                                    |

##### endingIcon

| Property | Type    | Description                                        |
| :------- | :------ | :------------------------------------------------- |
| name     | string  | The name of the icon                               |
| library  | string  | Which icon library to use. `default` `fontAwesome` |
| color    | color   | (/widget-reference/types#Color)                    |
| size     | integer |                                                    |