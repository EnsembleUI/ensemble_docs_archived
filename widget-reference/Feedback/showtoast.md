# Show Toast

## Properties

| Property  | Type   | Description                    |
| :-------- | :----- | :----------------------------- |
| showToast | object | Showing a toast message        |
| options   | object | Select a built-in toast style. |
| styles    | object | Toast's styles                 |

### showToast

| Property | Type   | Description                                                                                            |
| :------- | :----- | :----------------------------------------------------------------------------------------------------- |
| message  | string | The toast message. Either this message or a widget must be provided.                                   |
| widget   | object | The custom widget to show as the Toast's body. Either this widget or a toast message must be provided. |
| options  | object | Select a built-in toast style.                                                                         |
| styles   | object | Toast's styles                                                                                         |

### options

| Property    | Type    | Description                                                                                                               |
| :---------- | :------ | :------------------------------------------------------------------------------------------------------------------------ |
| type        | string  | Select a built-in toast style.                                                                                            |
| dismissible | boolean | Whether to show a dismiss button (default is True)                                                                        |
| position    | string  | Toast's position. Can be one of: top, topLeft, topRight, center, centerLeft, centerRight, bottom, bottomLeft, bottomRight |
| duration    | integer | The number of seconds before the toast is dismissed. Minimum value is 1.                                                  |

### styles

| Property        | Type             | Description                                                                                                                                          |
| :-------------- | :--------------- | :--------------------------------------------------------------------------------------------------------------------------------------------------- |
| backgroundColor | undefined        | Toast's background color starting with '0xFF' for full opacity e.g 0xFFCCCCCC                                                                        |
| shadowColor     | string or number | Box shadow color starting with '0xFF' for full opacity.                                                                                              |
| shadowRadius    | integer          | Toast's shadow radius. Minimum value is 0.                                                                                                           |
| shadowOffset    | array            | Toast's shadow offset.                                                                                                                               |
| borderRadius    | undefined        | Toast's border radius.                                                                                                                               |
| expanded        | boolean          | If the parent is a Row or Column, this flag will stretch this widget in the appropriate direction. (e.g stretch horizontally for parent of type Row) |
| size            | integer          | Specifies the width (progress bar) or the diameter (circular progress indicator)                                                                     |
| thickness       | integer          | Specifies the thickness of the indicator (for progress bar this is the height)                                                                       |
| color           | undefined        | Progress indicator color.                                                                                                                            |
