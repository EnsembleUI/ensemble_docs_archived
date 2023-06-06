# Lottie Animation widget

The Lottie Render Widget allows you to effortlessly render Lottie animation files, bringing life and motion to your application with smooth and captivating visual effects.

[Test in Kitchen Sink](https://studio.ensembleui.com/app/e24402cb-75e2-404c-866c-29e6c3dd7992/screen/576f3004-83e6-429d-b256-628d85e05f7f)

## Properties

| Property | Type   | Description                               |
| :------- | :----- | :---------------------------------------- |
| source   | string | URL or asset name of the Lottie json file |
| styles   | object | [See properties](#styles)                 |

### styles

| Property | Type    | Description                                                                                                                                          |
| :------- | :------ | :--------------------------------------------------------------------------------------------------------------------------------------------------- |
| expanded | boolean | If the parent is a Row or Column, this flag will stretch this widget in the appropriate direction. (e.g stretch horizontally for parent of type Row) |
| width    | integer |                                                                                                                                                      |
| height   | integer |                                                                                                                                                      |
| repeat   | boolean | Whether we should repeat the animation (default true)                                                                                                |
| fit      | string  | How to fit the Lottie animation within our width/height or our parent (if dimension is not specified)                                                |
