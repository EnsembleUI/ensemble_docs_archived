# QRCodeScanner widget

The QR-Code Scanner Widget provides a camera preview for scanning QR codes and returns the decoded data.

[Test in Kitchen Sink](https://studio.ensembleui.com/app/e24402cb-75e2-404c-866c-29e6c3dd7992/screen/ykDZEs5NKh8WHFdZtM8A)

## Properties

| Property | Type   | Description                      |
| :------- | :----- | :------------------------------- |
| formatsAllowed    | array | Use formatsAllowed to specify which formats needs to be scanned. |
| initialCamera           | string  | Initialize either camera, back or front. `back` `front`                                                                        |
| onInitialized | action | Execute an action once the QRCodeScanner is initialized                                                       |
| onPermissionSet | action | Execute an action with the status of camera permission. Get the status via ```event.data.status```                                                       |
| onReceived | action | Execute an action when it scans and retrieved the data from QRCode. Get the data via ```event.data.data```, format ```event.data.format``` and bytes ```event.data.rawBytes```                                                       |
| styles   | object | [See properties](#styles)        |

### styles

| Property                     | Type              | Description                                                                                                                                                                                                                                                                                                                          |
| :--------------------------- | :---------------- | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| overlayColor                     | integer or string           | The overlay color of the QR code scanner widget                                                                                                                                                                                 |
| cutOutBorderColor                     | integer or string           | The border color of the cutOut area of the QRCodeScanner widget                                                                                                                                                                                 |
| overlayMargin                     | integer           | The margin of the overlay of the QRCodeScanner widget                                                                                                                                                                                 |
| cutOutBorderWidth                  | integer           | Thickness of the cutOut area border.                                                                                                     |
| cutOutBorderLength                  | integer           | Length of the cutOut area border.                                                                                                     |
| cutOutBorderRadius             | integer           | The border radius of the cutOut area widget.                                                                                                     |
| cutOutWidth                    | integer           | The width of the cutOut area widget.                                                                                                     |
| cutOutHeight                   | integer           | The height of the cutOut area widget.                                                                                                     |

### Methods 
| Function | Args |  Description | 
| ---| ---| --- |
|flipCamera() | | It flips the camera from back to front or front to back |
|toggleFlash() | | It turns the flash light ON/OFF |
|pauseCamera() | | It pauses the camera in the QRCodeScanner widget |
|resumeCamera() | | It resumes the camera in the QRCodeScanner widget |

### Box Styles (Inherited)
This widget also inherits these styles

[box](_snippets/box-styles.md ':include')

### Base Styles (Inherited)
This widget also inherits these styles

[base](_snippets/base-styles.md ':include')
