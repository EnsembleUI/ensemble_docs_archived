# Action: pickFiles

pickFiles action enables users to select files from their device for further processing or usage within the app, offering a seamless way to choose and work with files, enhancing user interactions and content management capabilities.

### Properties

| Property          | Type    | Description                                                                                                      |
| :---------------- | :------ | :--------------------------------------------------------------------------------------------------------------- |
| id                | string  | Give the picker an ID allows you to bind to its result, which can be access anywhere e.g. ${filePicker.files...} |
| allowMultiple     | boolean | Allow users to pick multiple files (default False)                                                               |
| allowCompression  | boolean | It will allow media to apply the default OS compression (default True)                                           |
| allowedExtensions | array   | Allow files with specific extension e.g jpg, png, pdf                                                            |

**Example**

<div class="code-container" markdown=1>
  <button onclick="copyCode()" class="copy-code-button">Copy Code</button>

```yaml
View:
  # Optional - style the screen
  styles:
    scrollableView: true

  # Specify the body of the screen
  body:
    Column:
      styles: { gap: 16, padding: 24 }
      children:
        - Markdown:
            text: |
              Use the `uploadFiles`  action  upload files to specify `uploadApi`. 

              Then use the `onComplete`  properties to execute other actions when upload is successful.

        - Button:
            label: Pick Files
            onTap:
              pickFiles:
                id: picker

        - Button:
            label: Upload Picked files
            onTap:
              executeCode:
                body: |
                  //@code
                  loading.visible = true;

                onComplete:
                  uploadFiles:
                    id: fileUploader
                    files: ${picker.files}
                    uploadApi: fileUploadApi
                    inputs:
                      url: https://en09cdal5asztm.x.pipedream.net
                    onComplete: |
                      //@code
                      loading.visible = false;
                    onError: |
                      //@code

                      loading.visible = false;
                    maxFileSize: 100
                    overMaxFileSizeMessage: Please select files less than 100kb

        - Markdown:
            text: ${fileUploader.body}

        - Progress:
            display: circular
            id: loading
            visible: false

        - Divider

        - Markdown:
            text: |
              Chain multiple file actions to pick files and upload them in one go
              - Using `pickFiles` to pick file based on platform picker
              - Using `uploadFiles` to upload selected files from file picker

        - Button:
            label: Pick & Upload
            onTap:
              pickFiles:
                id: filePicker
                onComplete:
                  uploadFiles:
                    files: ${filePicker.files}
                    uploadApi: fileUploadApi
                    inputs:
                      url: https://en09cdal5asztm.x.pipedream.net
                    onComplete: |
                      //@code
                      ensemble.debug('File uploaded');

        - Divider:

        - Markdown:
            text: |
              `pickFiles`  also comes with option such as:

                - `allowMultiple` : To allow muliple file selection from gallery picker default (false)
                - `allowCompression` : It will allow media to apply the default OS compression (default True)
                - `allowedExtensions` : To filter file picking based on extensions like jpg, png, pdf...

              `uploadFiles`  also comes with option such as:

                - `files` : Pass the files that needs to upload e.g ${filePicker.files}

                - `fieldName` : Field name that your server is expecting. (default files).

                - `maxFileSize`: File size that is allowed in kb (default 100 mb), If multiple is allow then sum of all files
                - `overMaxFileSizeMessage`: Error message to show when selected files size is above maxFileSize.

        - Row:
            styles: { mainAxis: spaceBetween, crossAxis: center }
            children:
              - Button:
                  label: Multiple Images
                  onTap:
                    pickFiles:
                      id: images
                      allowMultiple: true
                      allowCompression: false
                      allowedExtensions:
                        - jpg
                        - png

              - Text:
                  text: ${images.files.length}
        - Button:
            label: Upload Multiple images
            onTap:
              uploadFiles:
                id: imageUploader
                uploadApi: fileUploadApi
                files: ${images.files}
                fieldName: files
                inputs:
                  url: https://en09cdal5asztm.x.pipedream.net
                maxFileSize: 100 # in kb
                overMaxFileSizeMessage: Please select files less than 100kb

        - Markdown:
            text: ${imageUploader.body}
        - Divider

        - Markdown:
            text: |
              ### Background file upload
              - Pick and Upload files in background.
              - In unmetered connection (wifi/lan)
              - Also show notification
              - *Not supported on web / studio.

        - Button:
            label: Background upload
            onTap:
              pickFiles:
                id: bgFilePicker
                onComplete:
                  uploadFiles:
                    uploadApi: fileUploadApi
                    files: ${bgFilePicker.files}
                    inputs:
                      url: https://en09cdal5asztm.x.pipedream.net
                    id: bgUploader
                    options:
                      backgroundTask: true
                      showNotification: true
                      networkType: unmetered

        - Divider:

        - Markdown:
            text: |
              _Side Note: If you are using default uploadURL it's using RequestBin_

              _RequestBin has maxFileSize of __100 kb__ above it will fail._

              _You can see you API request [here](https://requestbin.com/r/en09cdal5asztm/2Lzx3lZ071EFF9dFKZCXJTnkJHS)_

        - Divider:

API:
  fileUploadApi:
    inputs:
      - url
    uri: ${url}
    method: POST
```

</div>

complete example [here](https://studio.ensembleui.com/app/e24402cb-75e2-404c-866c-29e6c3dd7992/screen/mvFbwP5K5yvAqTlncTga?propertyPanelEnabled=true&instantPreviewDisabled=false&editorV2Enabled=true) including uploadFiles example.
