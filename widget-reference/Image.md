# Image widget

The Image Render Widget provides a simple and intuitive way to display images within your application, allowing for rich visual content and enhancing the user experience.

[Test in Kitchen Sink](https://studio.ensembleui.com/app/e24402cb-75e2-404c-866c-29e6c3dd7992/screen/7c7a3ffe-68ef-4e99-b9d1-4b5cee166233)

## Properties

| Property | Type   | Description                                                                                                                                                                                     |
| :------- | :----- | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| source   | string | URL to or asset name of the image. If the URL is used, it is highly recommended that the dimensions is set (either with width/height or other means) to prevent the UI jerkiness while loading. |
| onTap    |        | Call Ensemble's built-in functions or execute code                                                                                                                                              |
| styles   | object | [See properties](#styles)                                                                                                                                                                       |

### styles

| Property         | Type    | Description                                                                                                                                                                                                                                                                                                                                                        |
| :--------------- | :------ | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| expanded         | boolean | If the parent is a Row or Column, this flag will stretch this widget in the appropriate direction. (e.g stretch horizontally for parent of type Row)                                                                                                                                                                                                               |
| placeholderColor |         | The placeholder color while the image is loading.                                                                                                                                                                                                                                                                                                                  |
| fit              | string  | How to fit the image within our width/height or our parent (if dimension is not specified)                                                                                                                                                                                                                                                                         |
| resizedWidth     | integer | Images will be automatically resized (default to 800 width with no height set) before rendering. If you know the rough image width, set this number to be the same or a slightly larger width to optimize the loading time. To maintain the original aspect ratio, set either resizedWidth or resizedHeight, but not both. This setting is not supported on Web.   |
| resizedHeight    | integer | Images will be automatically resized (default to 800 width with no height set) before rendering. If you know the rough image height, set this number to be the same or a slightly larger height to optimize the loading time. To maintain the original aspect ratio, set either resizedWidth or resizedHeight, but not both. This setting is not supported on Web. |
