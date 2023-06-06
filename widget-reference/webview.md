# WebView widget

The WebView Widget enables seamless integration of web content within native apps and web apps, providing a versatile and consistent browsing experience across platforms.

[Test in Kitchen Sink](https://studio.ensembleui.com/app/e24402cb-75e2-404c-866c-29e6c3dd7992/screen/22c8d57d-a906-4d11-873d-161fd6c56c0a)

## Properties

| Property | Type   | Description               |
| :------- | :----- | :------------------------ |
| url      | string |                           |
| styles   | object | [See properties](#styles) |

### styles

| Property | Type    | Description                                                                                                                                                                                                                                                                            |
| :------- | :------ | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| expanded | boolean | If the parent is a Row or Column, this flag will stretch this widget in the appropriate direction. (e.g stretch horizontally for parent of type Row)                                                                                                                                   |
| width    | integer | By default the width will match its parent's available width, but you can set an explicit width here.                                                                                                                                                                                  |
| height   | integer | If no height is specified, the web view will stretch its height to fit its content, in which case a scrollable parent is required to scroll the content. You may override this behavior by explicitly set the web view's height here, or uses 'expanded' to fill the available height. |
