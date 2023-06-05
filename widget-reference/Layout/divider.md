# Divider

## Properties

| Property | Type   | Description               |
| :------- | :----- | :------------------------ |
| styles   | object | [See properties](#styles) |

### styles

| Property  | Type      | Description                                                                                                                                          |
| :-------- | :-------- | :--------------------------------------------------------------------------------------------------------------------------------------------------- |
| expanded  | boolean   | If the parent is a Row or Column, this flag will stretch this widget in the appropriate direction. (e.g stretch horizontally for parent of type Row) |
| margin    | undefined | Margin with CSS-style notation e.g. margin: 5 20 5                                                                                                   |
| direction | string    | Whether to display a horizontal divider (default) or vertical divider.                                                                               |
| thickness | integer   | undefined                                                                                                                                            |
| color     | undefined | The line color starting with '0xFF' for full opacity                                                                                                 |
| indent    | integer   | The leading gap before the line starts                                                                                                               |
| endIndent | integer   | The ending gap after the line ends                                                                                                                   |
