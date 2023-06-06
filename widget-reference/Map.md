# Map widget

The Map widget enables the display of _location markers_ and _overlays_, providing a dynamic visual representation of geographic data.

[Test in Kitchen Sink](https://studio.ensembleui.com/app/e24402cb-75e2-404c-866c-29e6c3dd7992/screen/36e52d1a-39c5-4a6b-b064-2be6cfe3cf7b)

## Properties

| Property        | Type   | Description                        |
| :-------------- | :----- | :--------------------------------- |
| styles          | object | [See properties](#styles)          |
| currentLocation | object | [See properties](#currentLocation) |
| markers         | object | [See properties](#markers)         |

### styles

| Property     | Type    | Description                                                                                                                                          |
| :----------- | :------ | :--------------------------------------------------------------------------------------------------------------------------------------------------- |
| expanded     | boolean | If the parent is a Row or Column, this flag will stretch this widget in the appropriate direction. (e.g stretch horizontally for parent of type Row) |
| markerWidth  | integer | The width of each marker. (default 60)                                                                                                               |
| markerHeight | integer | The height of each marker. (default 30)                                                                                                              |

### currentLocation

| Property | Type    | Description                                                                                            |
| :------- | :------ | :----------------------------------------------------------------------------------------------------- |
| enabled  | boolean | If enabled, this will prompt the user for location access. User location will then be shown on the map |
| widget   |         | The widget to render the user's location                                                               |

### markers

| Property              | Type   | Description                                                                                       |
| :-------------------- | :----- | :------------------------------------------------------------------------------------------------ |
| data                  | string |                                                                                                   |
| name                  | string |                                                                                                   |
| location              | object | [See properties](#location)                                                                       |
| widget                |        | The widget to render each marker                                                                  |
| selectedWidget        |        | The widget to render a selected marker                                                            |
| selectedWidgetOverlay |        | The widget to render as an overlay at the bottom of the map. Use this to convey more detail info. |
