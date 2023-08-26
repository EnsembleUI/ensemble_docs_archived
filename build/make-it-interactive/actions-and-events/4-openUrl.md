# Action: openUrl

`openUrl` action is used to open a URL in a browser or an external app. To open a URL in a browser, use the `openUrl` action with `url` property.

### Properties

| Property | Type   | Description                                                |
| :------- | :----- | :--------------------------------------------------------- |
| type     | object | Open URL in ensemble or a separate app. [see properties]() |

#### properties.type

| Property          | Type    | Description                 |
| :---------------- | :------ | :-------------------------- |
| url               | string  | The URL to open             |
| openInExternalApp | boolean | Open URL in an external app |

**Usage Example**

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
```

</div>

You can use `openInExternalApp` property, this will open the url in the right app based on the url scheme in native apps. For browser, it doesn't matter

<div class="code-container" markdown=1>
  <button onclick="copyCode()" class="copy-code-button">Copy Code</button>

```yaml
- Button:
    label: Open Url in external app
    onTap:
      openUrl:
        url: ${uri.value}
        openInExternalApp: true
```

</div>

To learn more about how to use openUrl action, check out the [Ensemble Kitchen Sink](https://studio.ensembleui.com/app/e24402cb-75e2-404c-866c-29e6c3dd7992/screen/TnoazbWLihcenxD1NBkr) example.
