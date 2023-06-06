# Flex

The Flex Widget is a versatile layout option that dynamically switches between Row or Column based on the direction property, offering flexible and responsive designs that adapt to different screen sizes.

[Test in Kitchen Sink](https://studio.ensembleui.com/app/e24402cb-75e2-404c-866c-29e6c3dd7992/screen/R3KgxV3UPWb4TjoiPI0U)

## Properties

| Property      | Type   | Description                      |
| :------------ | :----- | :------------------------------- |
| children      | array  | List of widgets                  |
| styles        | object | [See properties](#styles)        |
| item-template | object | [See properties](#item-template) |

### styles

| Property     | Type    | Description                                                                                                                                                                                                                     |
| :----------- | :------ | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| expanded     | boolean | If the parent is a Row or Column, this flag will stretch this widget in the appropriate direction. (e.g stretch horizontally for parent of type Row)                                                                            |
| direction    | string  | Lay out the children vertically or horizontally                                                                                                                                                                                 |
| mainAxis     | string  | Control how to lay out the children, in the direction specified by the 'direction' attribute                                                                                                                                    |
| crossAxis    | string  | Control the alignment of the children on the secondary axis (depending on the 'direction' attribute)                                                                                                                            |
| mainAxisSize | string  | If 'max', stretch the Flex to fill its parent's dimension (width or height based on the direction). Otherwise (min) the Flex's dimension will be its children's combined.                                                       |
| scrollable   | boolean | Set to true so content can scroll vertically or horizontally as needed                                                                                                                                                          |
| autoFit      | boolean | Explicitly match the width or height to the largest child's size, but only if the parent does not already assign a width or height. This attribute is useful for sizing children who don't have a width or height (e.g Divider) |

### item-template

| Property | Type   | Description                                                        |
| :------- | :----- | :----------------------------------------------------------------- |
| data     | string | Bind to an array of data from an API response or a variable        |
| name     | string | Set the name to reference as you iterate through the array of data |
| template |        | The widget to render for each item                                 |
