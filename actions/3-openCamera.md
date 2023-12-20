# Action: openCamera

`OpenCamera` action enables users to access their device's camera, capturing images or videos directly from the app, enhancing interactivity and enabling seamless integration of media functionalities within the application. With `id` property we can bind results of camera. Then use the `onComplete` properties to execute other actions after capture or selection is done.

### Properties

| Property   | Type   | Description                                                                        |
| :--------- | :----- | :--------------------------------------------------------------------------------- |
| id         | string | Give the camera an ID, allows you to bind to its result. e.g. ${cameraId.files...} |
| onComplete | action | Execute an Action after completing capturing media                                 |
| onClose    | action | Execute an Action on camera close                                                  |
| onCapture  | action | Execute an Action on each capture                                                  |
| options    | object | different options to chose for `openCamera` action. [see properties](#)            |

#### properties.options

| Property                | Type    | Description                                                                                                                    |
| :---------------------- | :------ | :----------------------------------------------------------------------------------------------------------------------------- |
| mode                    | string  | Modes of camera. It can be photo only i.e allows to capture just photo. Similarly video or can be both. `photo` `video` `both` |
| initialCamera           | string  | Initialize either camera, back or front. `back` `front`                                                                        |
| allowGalleryPicker      | boolean | Allow users to pick media from gallery. Default (true).                                                                        |
| allowCameraRotate       | boolean | Allow users rotate camera i.e back and front. Default (true).                                                                  |
| allowFlashControl       | boolean | Allow users to control flash options. Default (true).                                                                          |
| preview                 | boolean | If set true, users can view captured/selected media.                                                                           |
| maxCount                | number  | It used to control number of media that can be captured/selected                                                               |
| maxCountMessage         | string  | Custom message to show when captured/selected media is greater than maxCount                                                   |
| minCount                | number  | It used to control number of media that can be captured/selected                                                               |
| minCountMessage         | string  | Custom message to show when captured/selected media is greater than minCount                                                   |
| permissionDeniedMessage | string  | Set custom message when access to camera is denied                                                                             |
| nextButtonLabel         | string  | Set custom label on next button.                                                                                               |
| cameraRotateIcon        | widget  | Set custom icon for camera rotate button. [see here](/widget-reference/Icon)                                                   |
| galleryPickerIcon       | widget  | Set custom icon for gallery picker button. [see here](/widget-reference/Icon)                                                  |
| focusIcon               | widget  | Set custom icon for focus node.                                                                                                |
| assistAngle             | object  | Show assist message whenever angle goes below minAngle or above minAngle. [see properties](#values-for-optionsassistangle)     |
| assistSpeed             | object  | Show assist message whenever camera is moving faster than maxSpeed. [see properties](#values-for-optionsassistspeed)           |
| autoCaptureInterval     | integer | If set any number n, on each n interval camera will capture                                                                    |

##### Values for options.assistAngle

| Property                   | Type   | Description                                   |
| :------------------------- | :----- | :-------------------------------------------- |
| minAngle                   | number | Minimum angle                                 |
| maxAngle                   | number | Maximum Angle                                 |
| maxAngleassistAngleMessage | number | Custom message to show when condition is hit. |

##### Values for options.assistSpeed

| Property           | Type   | Description                                   |
| :----------------- | :----- | :-------------------------------------------- |
| maxSpeed           | number | Maximum speed in km/hr.                       |
| assistSpeedMessage | number | Custom message to show when condition is hit. |

**Usage Examples**

<div class="code-container" markdown=1>
  <button onclick="copyCode()" class="copy-code-button">Copy Code</button>

```yaml
View:
  header:
    title: "Action: openCamera"
  styles:
    scrollableView: true
  body:
    Column:
      styles: { gap: 16, padding: 24 }
      children:
        - Button:
            label: Open Camera
            onTap:
              openCamera:
                id: cameraId

                options:
                  mode: photo

        - Conditional:
            conditions:
              - if: ${cameraId.files.length > 0}
                Carousel:
                  item-template:
                    data: ${cameraId.files}
                    name: file
                    template:
                      Image:
                        source: ${file.path}
```

</div>

`openCamera` also comes with options

<div class="code-container" markdown=1>
  <button onclick="copyCode()" class="copy-code-button">Copy Code</button>

```yaml
- Button:
    label: Camera with options
    onTap:
      openCamera:
        id: cameraId1
        options:
          allowGalleryPicker: true
          allowCameraRotate: true
          allowFlashControl: true
          preview: true
          maxCount: 2
          mode: photo

- Conditional:
    conditions:
      - if: ${cameraId1.files.length > 0}
        Carousel:
          item-template:
            data: ${cameraId1.files}
            name: file
            template:
              Image:
                source: ${file.path}
```

</div>

`openCamera` also comes with advance options

- assistAngle, show message when phone angle goes below min angle or goes beyond max angle.
- assistSpeed, show message when phone goes beyond max speed.
- minCount/maxCount, type is a number and can also be set to `minCount: ${ensemble.storage.xyz}` to get a dynamic value

<div class="code-container" markdown=1>
  <button onclick="copyCode()" class="copy-code-button">Copy Code</button>

```yaml
- Button:
    label: Camera with advance options.
    onTap:
      openCamera:
        options:
          allowGalleryPicker: true
          allowCameraRotate: true
          allowFlashControl: true
          preview: true

          assistAngle:
            minAngle: 80
            maxAngle: 100
            assistAngleMessage: Please try to keep angle approx. 90 degree.

          assistSpeed:
            maxSpeed: 10
            assistSpeedMessage: Please try to speed below 10 km/hr.
```

</div>

You can capture and upload to specified API

<div class="code-container" markdown=1>
  <button onclick="copyCode()" class="copy-code-button">Copy Code</button>

```yaml
        - Button:
            label: Capture and upload
            onTap:
              openCamera:
                id: captureMedia
                onComplete:
                  uploadFiles:
                    id: uploader
                    files: ${captureMedia.files}
                    uploadApi: fileUploadApi
                    fieldName: files
                    inputs:
                      url: <specify your url>


        - Markdown:
            text: ${uploader.body}

API:
  fileUploadApi:
    inputs:
      - url
    uri: ${url}
    method: POST
```

</div>

To learn more about openCamera functionalities, test it out here in [Ensemble Kitchen Sink](https://studio.ensembleui.com/app/e24402cb-75e2-404c-866c-29e6c3dd7992/screen/USuOaOZApSgzE2uVrqlv) app.
