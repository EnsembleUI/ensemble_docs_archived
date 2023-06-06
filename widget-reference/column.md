# Column

The Column Widget facilitates easy vertical layout of children elements, allowing for organized and visually appealing column-based designs within your application.

[Test in Kitchen Sink](https://studio.ensembleui.com/app/e24402cb-75e2-404c-866c-29e6c3dd7992/screen/90a8e4df-5eab-4473-ba10-2ecffc9596b0)

## Properties

| Property      | Type   | Description                      |
| :------------ | :----- | :------------------------------- |
| item-template | object | [See properties](#item-template) |
| children      | array  | List of widgets                  |
| styles        | object | [See properties](#styles)        |

### item-template

| Property | Type   | Description                                                        |
| :------- | :----- | :----------------------------------------------------------------- |
| data     | string | Bind to an array of data from an API response or a variable        |
| name     | string | Set the name to reference as you iterate through the array of data |
| template |        | The widget to render for each item                                 |

### styles

| Property     | Type    | Description                                                                                                                                                                                                         |
| :----------- | :------ | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| expanded     | boolean | If the parent is a Row or Column, this flag will stretch this widget in the appropriate direction. (e.g stretch horizontally for parent of type Row)                                                                |
| mainAxis     | string  | Control our children's layout vertically                                                                                                                                                                            |
| crossAxis    | string  | Control the horizontal alignment of the children                                                                                                                                                                    |
| mainAxisSize | string  | If 'max', stretch the Column to fill its parent's height. Otherwise (min) the column's height will be its children's combined.                                                                                      |
| scrollable   | boolean | Set to true so content can scroll vertically as needed                                                                                                                                                              |
| autoFit      | boolean | Explicitly make the column's width as wide as the largest child, but only if our column's parent does not already assign a width. This attribute is useful for sizing children who don't have a width (e.g Divider) |
