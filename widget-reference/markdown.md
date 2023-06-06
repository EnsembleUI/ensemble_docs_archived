# Markdown widget

The Markdown Render Widget empowers you to effortlessly render Markdown text, transforming it into beautifully formatted and structured content for your application.

[Test in Kitchen Sink](https://studio.ensembleui.com/app/e24402cb-75e2-404c-866c-29e6c3dd7992/screen/6b6d9c3d-359b-4768-99a5-3f087a64387c)

## Properties

| Property | Type   | Description                  |
| :------- | :----- | :--------------------------- |
| text     | string | Your text in markdown format |
| styles   | object | [See properties](#styles)    |

### styles

| Property  | Type    | Description                                                                                                                                          |
| :-------- | :------ | :--------------------------------------------------------------------------------------------------------------------------------------------------- |
| textStyle | object  | [See properties](#textStyle)                                                                                                                         |
| linkStyle | object  | [See properties](#linkStyle)                                                                                                                         |
| expanded  | boolean | If the parent is a Row or Column, this flag will stretch this widget in the appropriate direction. (e.g stretch horizontally for parent of type Row) |
