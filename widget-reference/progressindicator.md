# Progress Indicator

The Progress Indicator Widget facilitates the rendering of visual progress indicators, providing users with visual feedback on the progress of tasks or operations within your application.

[Test in Kitchen Sink](https://studio.ensembleui.com/app/e24402cb-75e2-404c-866c-29e6c3dd7992/screen/c2c248f2-a289-40d3-acd5-65a1a7f3c5a2)

## Properties

| Property            | Type    | Description                                                                |
| :------------------ | :------ | :------------------------------------------------------------------------- |
| display             | string  |                                                                            |
| countdown           | integer | Show the progress percentage based on the number of seconds specified here |
| onCountdownComplete |         | Execute this Action when the countdown comes to 0                          |
| styles              | object  | [See properties](#styles)                                                  |

### styles

| Property        | Type    | Description                                                                                                                                          |
| :-------------- | :------ | :--------------------------------------------------------------------------------------------------------------------------------------------------- |
| expanded        | boolean | If the parent is a Row or Column, this flag will stretch this widget in the appropriate direction. (e.g stretch horizontally for parent of type Row) |
| backgroundColor |         | Background color, starting with '0xFF' for full opacity e.g 0xFFCCCCCC                                                                               |
| size            | integer | Specifies the width (progress bar) or the diameter (circular progress indicator)                                                                     |
| thickness       | integer | Specifies the thickness of the indicator (for progress bar this is the height)                                                                       |
| color           |         |                                                                                                                                                      |
