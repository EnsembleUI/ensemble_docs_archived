# Action: openUrl

openUrl action allows users to open external URLs or web links directly from the app, facilitating seamless integration with external content and enhancing the user's browsing experience within the application.

### Properties

| Property          | Type    | Description                 |
| :---------------- | :------ | :-------------------------- |
| url               | string  | The URL to open             |
| openInExternalApp | boolean | Open URL in an external app |

**Example**

<div class="code-container" markdown=1>
  <button onclick="copyCode()" class="copy-code-button">Copy Code</button>

```yaml
View:
  header:
    title: "Action: openUrl"
  styles:
    scrollableView: true

  body:
    Column:
      styles: { gap: 16, padding: 24 }
      children:
        - Form:
            styles: { mainAxis: center }
            children:
              - TextInput:
                  id: uri
                  value: "https://ensembleui.com"
              - Row:
                  styles: { gap: 8 }
                  children:
                    - Button:
                        label: Open Url in place
                        onTap:
                          openUrl:
                            url: ${uri.value}

                    - Button:
                        label: Open Url in external app
                        onTap:
                          openUrl:
                            url: ${uri.value}
                            #openInExternalApp: true will open the url in the right app based on the url scheme in native apps. For browser, it doesn't matter
                            openInExternalApp: true

              - TextInput:
                  id: email
                  value: "mailto: khurram.mahmood@gmail.com"
              - Button:
                  label: Open Url
                  onTap:
                    openUrl:
                      url: ${email.value}
              - TextInput:
                  id: tel
                  value: "tel: +1 (201) 867-5309"
              - Button:
                  label: Open Url
                  onTap:
                    openUrl:
                      url: ${tel.value}
              - TextInput:
                  id: sms
                  value: "sms: +1 (201) 867-5309"
              - Button:
                  label: Open Url
                  onTap:
                    openUrl:
                      url: ${sms.value}
```

</div>

Try complete example [here](https://studio.ensembleui.com/app/e24402cb-75e2-404c-866c-29e6c3dd7992/screen/TnoazbWLihcenxD1NBkr?propertyPanelEnabled=true&instantPreviewDisabled=false&editorV2Enabled=true)
