# WebView widget

The WebView Widget enables seamless integration of web content within native apps and web apps, providing a versatile and consistent browsing experience across platforms. In addition to its core functionality, WebView also supports the use of cookies. [Learn more here!](/tips-and-tricks/cookies.md)

[Test in Kitchen Sink](https://studio.ensembleui.com/app/e24402cb-75e2-404c-866c-29e6c3dd7992/screen/22c8d57d-a906-4d11-873d-161fd6c56c0a)

## Properties

| Property | Type   | Description                                                           |
| :------- | :----- | :-------------------------------------------------------------------- |
| url      | string | Defines the web address (URL) to be loaded within the WebView widget. |
| styles   | object | [See properties](#styles)                                             |

## Events

| Event | Description                                                           |
| :------- | :-------------------------------------------------------------------- |
| onPageStart      | Invoked when a page has started loading |
| onPageFinished   | Invoked when a page has finished loading. |
| onProgress   | Invoked when a page is loading to report the progress. |
| onNavigationRequest   | Invoked when a decision for a navigation request is pending. When a navigation is initiated by the WebView (e.g when a user clicks a link) this delegate is called and has to decide how to proceed with the navigation. |
| onWebResourceError | Invoked when a resource loading error occurred. |

### styles

| Property                     | Type              | Description                                                                                                                                                                                                                                                                                                                       |
| :--------------------------- | :---------------- | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| expanded                     | boolean           | If the parent is a Row or Column, this flag will stretch this widget in the appropriate direction. (e.g stretch horizontally for parent of type Row)                                                                                                                                                                              |
| width                        | integer           | By default the width will match its parent's available width, but you can set an explicit width here.                                                                                                                                                                                                                             |
| height                       | integer           | If no height is specified, the web view will stretch its height to fit its content, in which case a scrollable parent is required to scroll the content. You may override this behavior by explicitly set the web view's height here, or uses 'expanded' to fill the available height.                                            |
| stackPositionTop             | integer           | The distance of the child's top edge from the top of the stack. This is applicable only for Stack's children.                                                                                                                                                                                                                     |
| stackPositionBottom          | integer           | The distance that the child's bottom edge from the bottom of the stack. This is applicable only for Stack's children.                                                                                                                                                                                                             |
| stackPositionLeft            | integer           | The distance that the child's left edge from the left of the stack. This is applicable only for Stack's children.                                                                                                                                                                                                                 |
| stackPositionRight           | integer           | The distance that the child's right edge from the right of the stack. This is applicable only for Stack's children.                                                                                                                                                                                                               |
| elevation                    | integer           | The z-coordinate at which to place this material relative to its parent. A non-zero value will show a shadow, with its size relative to the elevation value. Minimum value: 0, Maximum value: 24                                                                                                                                  |
| elevationShadowColor         | integer or string | The shadow color for the elevation, which can be represented in different formats. It can be specified as a number, a predefined color name, or a hexadecimal value starting with '0x'. `transparent` `black` `blue` `white` `red` `grey` `teal` `amber` `pink` `purple` `yellow` `green` `brown` `cyan` `indigo` `lime` `orange` |
| elevationBorderRadius        | string or integer | The border radius of the widget.This can be specified using CSS-like notation with 1 to 4 integers. Minimum value: 0.                                                                                                                                                                                                             |
| alignment                    | string            | The alignment of the widget relative to its parent. `topLeft`, `topCenter`, `topRight`, `centerLeft`, `center`, `centerRight`, `bottomLeft`, `bottomCenter`, `bottomRight`                                                                                                                                                        |
| captureWebPointer            | boolean           | Applicable for Web only. When overlaying widgets on top of certain HTML container (e.g. Maps), the mouse click is captured by the HTML container, causing issue interacting with the widget. Use this to capture and maintain the mouse pointer on your widget.                                                                   |
| visibilityTransitionDuration | number            | Specify the duration in seconds when a widget animates between visible and not visible state. Note that setting this value will cause the widget to still occupy the UI space even when it is not visible.                                                                                                                        |
| visible                      | boolean           | Toggle a widget visibility on/off. Note that an invisible widget will not occupy UI space, unless the visibilityTransitionDuration is specified.                                                                                                                                                                                  |
