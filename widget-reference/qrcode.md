# QR-Code widget

The QR-Code Render Widget empowers you to effortlessly generate and render QR codes within your application, enabling convenient scanning and information exchange for users.

[Test in Kitchen Sink](https://studio.ensembleui.com/app/e24402cb-75e2-404c-866c-29e6c3dd7992/screen/f4921ba2-9f3d-4c33-8848-4df29a5e7a4d)

## Properties

| Property | Type   | Description                      |
| :------- | :----- | :------------------------------- |
| value    | string | The data to generate the QR code |
| styles   | object | [See properties](#styles)        |

### styles

| Property | Type    | Description                                                                                                                                          |
| :------- | :------ | :--------------------------------------------------------------------------------------------------------------------------------------------------- |
| expanded | boolean | If the parent is a Row or Column, this flag will stretch this widget in the appropriate direction. (e.g stretch horizontally for parent of type Row) |
| size     | integer | Specify the width/height of the QR Code. Default: 160                                                                                                |
| color    |         | Set the color for the QR code drawing                                                                                                                |
