# GridView

The GridView Widget empowers you to render grid-based layouts, enabling the display of content in a structured and organized manner with customizable grid configurations within your application.

[Test in Kitchen Sink](https://studio.ensembleui.com/app/e24402cb-75e2-404c-866c-29e6c3dd7992/screen/DX5j2WVQFabmxD9FCD5h)

## Properties

| Property      | Type   | Description                                                                             |
| :------------ | :----- | :-------------------------------------------------------------------------------------- |
| item-template | object | [See properties](#item-template)                                                        |
| onItemTap     |        | Call Ensemble's built-in functions or execute code when tapping on an item in the list. |
| styles        | object | [See properties](#styles)                                                               |

### item-template

| Property | Type   | Description                                                        |
| :------- | :----- | :----------------------------------------------------------------- |
| data     | string | Bind to an array of data from an API response or a variable        |
| name     | string | Set the name to reference as you iterate through the array of data |
| template |        | The widget to render for each item                                 |

### styles

| Property            | Type    | Description                                                                                                                                                                                                                                                                                                          |
| :------------------ | :------ | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| expanded            | boolean | If the parent is a Row or Column, this flag will stretch this widget in the appropriate direction. (e.g stretch horizontally for parent of type Row)                                                                                                                                                                 |
| horizontalTileCount |         | The number of horizontal tiles (max 5) to show. If not specified, the number of tiles will automatically be determined by the screen size. You may also specify a single number (for all breakpoints), three numbers (for small, medium, large breakpoints), or five numbers (xSmall, small, medium, large, xLarge). |
| horizontalGap       | integer | The gap between the horizontal tiles if there are more than one (default: 10).                                                                                                                                                                                                                                       |
| verticalGap         | integer | The gap between the vertical tiles if there are more than one (default: 10).                                                                                                                                                                                                                                         |
| itemHeight          | integer | Set a fixed height for each item in the tile. If each tile item comprises of many widgets vertically, setting this attribute may require you to stretch (expand) at least one inner widget.                                                                                                                          |
| itemAspectRatio     | number  | Instead of itemHeight, you can set the tile's dimension as a ratio of (item width / item height). For example, a tile with 3x width and 2x height is 3/2 = 1.5. This attribute will be ignored if itemHeight is set.                                                                                                 |
