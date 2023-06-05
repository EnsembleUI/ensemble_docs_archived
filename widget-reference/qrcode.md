# QR-Code

## Properties

| Property | Type   | Description                      |
| :------- | :----- | :------------------------------- |
| value    | string | The data to generate the QR code |
| styles   | object | [See properties](#styles)        |

### styles

| Property | Type      | Description                                                                                                                                          |
| :------- | :-------- | :--------------------------------------------------------------------------------------------------------------------------------------------------- |
| expanded | boolean   | If the parent is a Row or Column, this flag will stretch this widget in the appropriate direction. (e.g stretch horizontally for parent of type Row) |
| size     | integer   | Specify the width/height of the QR Code. Default: 160                                                                                                |
| color    | undefined | Set the color for the QR code drawing                                                                                                                |
