# Progress Indicator

## Properties

| Property            | Type      | Description                                                                |
| :------------------ | :-------- | :------------------------------------------------------------------------- |
| display             | string    | undefined                                                                  |
| countdown           | integer   | Show the progress percentage based on the number of seconds specified here |
| onCountdownComplete | undefined | Execute this Action when the countdown comes to 0                          |
| styles              | object    | [See properties](#styles)                                                  |

### styles

| Property        | Type      | Description                                                                                                                                          |
| :-------------- | :-------- | :--------------------------------------------------------------------------------------------------------------------------------------------------- |
| expanded        | boolean   | If the parent is a Row or Column, this flag will stretch this widget in the appropriate direction. (e.g stretch horizontally for parent of type Row) |
| backgroundColor | undefined | Background color, starting with '0xFF' for full opacity e.g 0xFFCCCCCC                                                                               |
| size            | integer   | Specifies the width (progress bar) or the diameter (circular progress indicator)                                                                     |
| thickness       | integer   | Specifies the thickness of the indicator (for progress bar this is the height)                                                                       |
| color           | undefined | undefined                                                                                                                                            |
