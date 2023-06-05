# Flow

## Properties

| Property      | Type   | Description                                                |
| :------------ | :----- | :--------------------------------------------------------- |
| item-template | object | [See properties](#item-template)                           |
| children      | array  | List of widgets                                            |
| direction     | string | The main direction to lay out the children before wrapping |
| styles        | object | [See properties](#styles)                                  |

### item-template

| Property | Type      | Description                                                        |
| :------- | :-------- | :----------------------------------------------------------------- |
| data     | string    | Bind to an array of data from an API response or a variable        |
| name     | string    | Set the name to reference as you iterate through the array of data |
| template | undefined | The widget to render for each item                                 |

### styles

| Property  | Type    | Description                                                                                                                                          |
| :-------- | :------ | :--------------------------------------------------------------------------------------------------------------------------------------------------- |
| expanded  | boolean | If the parent is a Row or Column, this flag will stretch this widget in the appropriate direction. (e.g stretch horizontally for parent of type Row) |
| mainAxis  | string  | Control our children's layout vertically                                                                                                             |
| gap       | integer | The gap between the children in the main direction                                                                                                   |
| lineGap   | integer | The gap between the lines if the children start wrapping                                                                                             |
| maxWidth  | integer | undefined                                                                                                                                            |
| maxHeight | integer | undefined                                                                                                                                            |
