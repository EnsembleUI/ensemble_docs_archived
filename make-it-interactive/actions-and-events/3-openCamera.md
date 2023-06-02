# Action: openCamera

Use the `openCamera`  action capture media. 

With `id` property we can bind results of camera.

Then use the `onComplete`  properties to execute other actions after capture or selection is done.

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

`openCamera`  also comes with options

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

`openCamera`  also comes with advance options
- assistAngle, show message when phone angle goes below min angle or goes beyond max angle.
- assistSpeed, show message when phone goes beyond max speed.

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

You can capture and upload to specified API

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

To learn more about openCamera functionalities, test it out here in [Ensemble Kitchen Sink](https://studio.ensembleui.com/app/e24402cb-75e2-404c-866c-29e6c3dd7992/screen/USuOaOZApSgzE2uVrqlv) app.