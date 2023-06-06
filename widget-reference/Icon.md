# Icon widget

The Icon Widget enables easy integration of icons from popular libraries like FontAwesome, allowing for seamless customization and visually appealing designs within your application.

[Test in Kitchen Sink](https://studio.ensembleui.com/app/e24402cb-75e2-404c-866c-29e6c3dd7992/screen/e7c686f5-b8a2-4670-9e6e-8fdb0fea768e)

## Properties

| Property | Type   | Description                                        |
| :------- | :----- | :------------------------------------------------- |
| icon     | string | Icon name from Material Icons or Font Awesome      |
| library  | string |                                                    |
| onTap    |        | Call Ensemble's built-in functions or execute code |
| styles   | object | [See properties](#styles)                          |

### styles

| Property    | Type    | Description                                                                                                                                             |
| :---------- | :------ | :------------------------------------------------------------------------------------------------------------------------------------------------------ |
| expanded    | boolean | If the parent is a Row or Column, this flag will stretch this widget in the appropriate direction. (e.g stretch horizontally for parent of type Row)    |
| size        | integer |                                                                                                                                                         |
| color       |         | The color of the icon                                                                                                                                   |
| splashColor |         | If onTap is defined, this color will show up as a splash effect upon tapping the icon. Note that the effect only happens if backgroundColor is not set. |
