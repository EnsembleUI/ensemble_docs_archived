# Action: copyToClipboard

copyToClipboard action allows users to copy text or content to their device's clipboard with a simple interaction, facilitating easy sharing and transfer of information within the app, enhancing productivity and user convenience.

### Properties

| Property  | Type   | Description                                              |
| :-------- | :----- | :------------------------------------------------------- |
| value     | string | The text to copy to clipboard                            |
| onSuccess | action | Execute another Action upon successful copy to clipboard |
| onFailure | action | Execute an Action when copy to clipboard fails           |

**Example**

<div class="code-container" markdown=1>
  <button onclick="copyCode()" class="copy-code-button">Copy Code</button>

```yaml
View:
  header:
    title: "Action: copyToClipboard"
  styles:
    scrollableView: true

  body:
    Column:
      styles:
        gap: 16
        padding: 24

      children:
        - Markdown:
            text: |
              Use the `copyToClipboard` action to copy a value to the clipbaord.

        - TextInput:
            label: Value to copy
            id: textInput
            value: Hello there
        - Button:
            label: Copy to clipboard
            onTap:
              copyToClipboard:
                value: ${textInput.value}
                onSuccess:
                  showToast:
                    message: ${textInput.value} + "copied!"
                    options:
                      dismissable: true
                      type: success
                      duration: 3
                onFailure:
                  showToast:
                    message: ${textInput.value} + "copied!"
                    options:
                      dismissable: true
                      type: error
                      duration: 3
```

</div>

complete example [here](https://studio.ensembleui.com/app/e24402cb-75e2-404c-866c-29e6c3dd7992/screen/oQGrStPwLqERIc7kzHFn?propertyPanelEnabled=true&instantPreviewDisabled=false&editorV2Enabled=true)
