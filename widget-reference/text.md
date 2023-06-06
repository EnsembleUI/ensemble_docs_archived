# Text widget

The Text Render Widget empowers you to effortlessly display and style text within your application, enabling clear communication and enhancing the overall design and readability.

[Test in Kitchen Sink](https://studio.ensembleui.com/app/e24402cb-75e2-404c-866c-29e6c3dd7992/screen/c87f8b09-58e2-4c2f-99a1-cbbe9e25e9a5?propertyPanelEnabled=true&instantPreviewDisabled=false&editorV2Enabled=true)

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
