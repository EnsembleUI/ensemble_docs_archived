# WebView

## Properties

| Property | Type   | Description               |
| :------- | :----- | :------------------------ |
| url      | string | undefined                 |
| styles   | object | [See properties](#styles) |

### styles

| Property | Type    | Description                                                                                                                                                                                                                                                                            |
| :------- | :------ | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| expanded | boolean | If the parent is a Row or Column, this flag will stretch this widget in the appropriate direction. (e.g stretch horizontally for parent of type Row)                                                                                                                                   |
| width    | integer | By default the width will match its parent's available width, but you can set an explicit width here.                                                                                                                                                                                  |
| height   | integer | If no height is specified, the web view will stretch its height to fit its content, in which case a scrollable parent is required to scroll the content. You may override this behavior by explicitly set the web view's height here, or uses 'expanded' to fill the available height. |
