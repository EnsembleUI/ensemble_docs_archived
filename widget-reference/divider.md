# Divider

The Divider Widget facilitates the rendering of dividers, enabling visual separation and organization of content within your application for enhanced clarity and aesthetics.

[Test in Kitchen Sink](https://studio.ensembleui.com/app/e24402cb-75e2-404c-866c-29e6c3dd7992/screen/4a893a2e-5bde-400c-b974-b25b497d31a5)

## Properties

| Property | Type   | Description               |
| :------- | :----- | :------------------------ |
| styles   | object | [See properties](#styles) |

### styles

| Property  | Type    | Description                                                                                                                                          |
| :-------- | :------ | :--------------------------------------------------------------------------------------------------------------------------------------------------- |
| expanded  | boolean | If the parent is a Row or Column, this flag will stretch this widget in the appropriate direction. (e.g stretch horizontally for parent of type Row) |
| margin    |         | Margin with CSS-style notation e.g. margin: 5 20 5                                                                                                   |
| direction | string  | Whether to display a horizontal divider (default) or vertical divider.                                                                               |
| thickness | integer |                                                                                                                                                      |
| color     |         | The line color starting with '0xFF' for full opacity                                                                                                 |
| indent    | integer | The leading gap before the line starts                                                                                                               |
| endIndent | integer | The ending gap after the line ends                                                                                                                   |
