# Row

## Properties

| Property      | Type   | Description                      |
| :------------ | :----- | :------------------------------- |
| item-template | object | [See properties](#item-template) |
| children      | array  | List of widgets                  |
| styles        | object | [See properties](#styles)        |

### item-template

| Property | Type      | Description                                                        |
| :------- | :-------- | :----------------------------------------------------------------- |
| data     | string    | Bind to an array of data from an API response or a variable        |
| name     | string    | Set the name to reference as you iterate through the array of data |
| template | undefined | The widget to render for each item                                 |

### styles

| Property     | Type    | Description                                                                                                                                                                                                                 |
| :----------- | :------ | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| expanded     | boolean | If the parent is a Row or Column, this flag will stretch this widget in the appropriate direction. (e.g stretch horizontally for parent of type Row)                                                                        |
| mainAxis     | string  | Control our children's layout horizontally                                                                                                                                                                                  |
| crossAxis    | string  | Control the vertical alignment of the children                                                                                                                                                                              |
| mainAxisSize | string  | If 'max', stretch the Row to fill its parent's width. Otherwise (min) the Row's width will be its children's combined.                                                                                                      |
| scrollable   | boolean | Set to true so content can scroll horizontally as needed                                                                                                                                                                    |
| autoFit      | boolean | Explicitly make the row's height as tall as the largest child, but only if the row's parent does not already assign us a height. This attribute is useful for sizing children who don't have a width (e.g vertical Divider) |
