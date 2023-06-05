# Lottie Animation Widget

## Properties

| Property | Type   | Description                               |
| :------- | :----- | :---------------------------------------- |
| source   | string | URL or asset name of the Lottie json file |
| styles   | object | [See properties](#styles)                 |

### styles

| Property | Type    | Description                                                                                                                                          |
| :------- | :------ | :--------------------------------------------------------------------------------------------------------------------------------------------------- |
| expanded | boolean | If the parent is a Row or Column, this flag will stretch this widget in the appropriate direction. (e.g stretch horizontally for parent of type Row) |
| width    | integer | undefined                                                                                                                                            |
| height   | integer | undefined                                                                                                                                            |
| repeat   | boolean | Whether we should repeat the animation (default true)                                                                                                |
| fit      | string  | How to fit the Lottie animation within our width/height or our parent (if dimension is not specified)                                                |
