# Text widget

Display and style text.

## Properties

| Property | Type   | Description               |
| :------- | :----- | :------------------------ |
| text     | string | Your text content         |
| styles   | object | [See properties](#styles) |

### Styles

| Property   | Type    | Description                                                                                                                                          | Values if enum                                                                          |
| :--------- | :------ | :--------------------------------------------------------------------------------------------------------------------------------------------------- | :-------------------------------------------------------------------------------------- |
| expanded   | boolean | If the parent is a Row or Column, this flag will stretch this widget in the appropriate direction. (e.g stretch horizontally for parent of type Row) |                                                                                         |
| width      | integer |                                                                                                                                                      |                                                                                         |
| height     | integer |                                                                                                                                                      |                                                                                         |
| font       | string  | Default built-in style for this text                                                                                                                 | `heading` `title` `subtitle`                                                            |
| fontSize   | integer |                                                                                                                                                      |                                                                                         |
| fontWeight | string  |                                                                                                                                                      | `light` `normal` `bold` `w100` `w200` `w300` `w400` `w500` `w600` `w700` `w800` `w900`  |
| color      |         |                                                                                                                                                      |                                                                                         |
| overflow   | string  | Set treatment of text longer than available space                                                                                                    | `wrap` `visible` `clip` `ellipsis`                                                      |
| textAlign  | string  |                                                                                                                                                      | `start` `end` `center` `justify`                                                        |
| textStyle  | string  |                                                                                                                                                      | `normal` `italic` `underline` `strikethrough` `italic_underline` `italic_strikethrough` |
| lineHeight |         |                                                                                                                                                      |                                                                                         |
