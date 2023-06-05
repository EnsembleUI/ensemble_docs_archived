# Icon Widget

## Properties

| Property | Type      | Description                                        |
| :------- | :-------- | :------------------------------------------------- |
| icon     | string    | Icon name from Material Icons or Font Awesome      |
| library  | string    | undefined                                          |
| onTap    | undefined | Call Ensemble's built-in functions or execute code |
| styles   | object    | [See properties](#styles)                          |

### styles

| Property    | Type      | Description                                                                                                                                             |
| :---------- | :-------- | :------------------------------------------------------------------------------------------------------------------------------------------------------ |
| expanded    | boolean   | If the parent is a Row or Column, this flag will stretch this widget in the appropriate direction. (e.g stretch horizontally for parent of type Row)    |
| size        | integer   | undefined                                                                                                                                               |
| color       | undefined | The color of the icon                                                                                                                                   |
| splashColor | undefined | If onTap is defined, this color will show up as a splash effect upon tapping the icon. Note that the effect only happens if backgroundColor is not set. |
