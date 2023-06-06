# Flow

The Flow Widget is a container that wraps its children, with a default horizontal direction that can be customized to vertical, allowing for flexible and fluid layouts within your application.

[Test in Kitchen Sink](https://studio.ensembleui.com/app/e24402cb-75e2-404c-866c-29e6c3dd7992/screen/3e901fb8-a0e8-4f52-979b-7f5f2547e650)

## Properties

| Property      | Type   | Description                                                |
| :------------ | :----- | :--------------------------------------------------------- |
| item-template | object | [See properties](#item-template)                           |
| children      | array  | List of widgets                                            |
| direction     | string | The main direction to lay out the children before wrapping |
| styles        | object | [See properties](#styles)                                  |

### item-template

| Property | Type   | Description                                                        |
| :------- | :----- | :----------------------------------------------------------------- |
| data     | string | Bind to an array of data from an API response or a variable        |
| name     | string | Set the name to reference as you iterate through the array of data |
| template |        | The widget to render for each item                                 |

### styles

| Property  | Type    | Description                                                                                                                                          |
| :-------- | :------ | :--------------------------------------------------------------------------------------------------------------------------------------------------- |
| expanded  | boolean | If the parent is a Row or Column, this flag will stretch this widget in the appropriate direction. (e.g stretch horizontally for parent of type Row) |
| mainAxis  | string  | Control our children's layout vertically                                                                                                             |
| gap       | integer | The gap between the children in the main direction                                                                                                   |
| lineGap   | integer | The gap between the lines if the children start wrapping                                                                                             |
| maxWidth  | integer |                                                                                                                                                      |
| maxHeight | integer |                                                                                                                                                      |
