# Button widget

A control that can execute an action on tap or click.

## Properties

| Property     | Type    | Description                                                                                                         |
| :----------- | :------ | :------------------------------------------------------------------------------------------------------------------ |
| label        | string  | The button label                                                                                                    |
| enabled      | boolean |                                                                                                                     |
| submitForm   | boolean | If the button is inside a Form and upon on tap, it will execute the form's onSubmit action if this property is TRUE |
| onTap        |         | Call Ensemble's built-in functions or execute code                                                                  |
| styles       | object  |                                                                                                                     |
| endingIcon   | object  | Icon placed behind the label, according to device text alignment                                                    |
| startingIcon | object  | Icon placed in front of the label, according to device text alignment                                               |

##### styles

| Property   | Type    | Description                                                                                                                                          |
| :--------- | :------ | :--------------------------------------------------------------------------------------------------------------------------------------------------- |
| expanded   | boolean | If the parent is a Row or Column, this flag will stretch this widget in the appropriate direction. (e.g stretch horizontally for parent of type Row) |
| width      | integer |                                                                                                                                                      |
| height     | integer |                                                                                                                                                      |
| outline    | boolean | Whether the button should have an outline border instead of filled background                                                                        |
| color      |         | Set the color for the button label starting with '0xFF' for full opacity                                                                             |
| fontSize   | integer |                                                                                                                                                      |
| fontWeight | string  | `light` `normal` `bold` `w100` `w200` `w300` `w400` `w500` `w600` `w700` `w800` `w900`                                                               |

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
