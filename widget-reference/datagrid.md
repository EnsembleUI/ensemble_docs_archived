# DataGrid

The DataGrid Widget enables the seamless rendering of data grids, facilitating the organized display and manipulation of tabular data within your application for effective data representation and interaction.

[Test in Kitchen Sink](https://studio.ensembleui.com/app/e24402cb-75e2-404c-866c-29e6c3dd7992/screen/c5940e18-f2c1-4318-8e68-a678a6ae7247)

## Properties

| Property         | Type    | Description                                         |
| :--------------- | :------ | :-------------------------------------------------- |
| item-template    | object  | [See properties](#item-template)                    |
| children         | array   | List of widgets                                     |
| styles           | object  | [See properties](#styles)                           |
| horizontalMargin | integer | The leading and trailing gap for the DataGrid view. |
| dataRowHeight    | integer | Set the height of the data row item.                |
| headingRowHeight | integer | Set the height of the heading row item.             |
| columnSpacing    | number  | Set the padding for the column.                     |

### item-template

| Property | Type   | Description                                                        |
| :------- | :----- | :----------------------------------------------------------------- |
| data     | string | Bind to an array of data from an API response or a variable        |
| name     | string | Set the name to reference as you iterate through the array of data |
| template | array  | The data row widget to render for each item                        |

### styles

| Property | Type    | Description                                                                                                                                          |
| :------- | :------ | :--------------------------------------------------------------------------------------------------------------------------------------------------- |
| expanded | boolean | If the parent is a Row or Column, this flag will stretch this widget in the appropriate direction. (e.g stretch horizontally for parent of type Row) |
