# Action: openUrl

openUrl action allows users to open external URLs or web links directly from the app, facilitating seamless integration with external content and enhancing the user's browsing experience within the application.

### Properties

| Property          | Type    | Description                 |
| :---------------- | :------ | :-------------------------- |
| url               | string  | The URL to open             |
| openInExternalApp | boolean | (optional) Default: false. Open URL in an external app |

The openUrl action may be invoked from javascript as well by simply calling 
```javascript
ensemble.openUrl({url: 'https://ensembleui.com', openInExternalApp: true});
```
The openInExternalApp parameter is optional and has the default value of false. 

**Example**

1.  This one is simple example related to how one can make use of `openUrl` to open given url inside browser or an external browser app in android or ios.

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

You can use `openInExternalApp` property, this will open the url in the right app based on the url scheme in native apps. For browser, it doesn't matter

```yaml
- Button:
    label: Open Url in external app
    onTap:
      openUrl:
        url: ${uri.value}
        openInExternalApp: true
```

2. In this example we will open the default email app depending on the device or OS like on Windows its `Mail`.

```yaml
			- TextInput:
				id: email
				value: 'mailto: khurram.mahmood@gmail.com'
			- Button:
				label: Open Url
				onTap:
					openUrl:
						url: ${email.value}
```

3. Will open the default `Phone` app depending on the android or ios.

```yaml

			- TextInput:
				id: tel
				value: 'tel: +1 (201) 867-5309'
			- Button:
				label: Open Url
				onTap:
					openUrl:
						url: ${tel.value}

```

4. Will open the default `Message` app depending on the android or ios.

```yaml

			- TextInput:
				id: sms
				value: 'sms: +1 (201) 867-5309'
			- Button:
				label: Open Url
				onTap:
					openUrl:
						url: ${sms.value}

```

5. Will open the default `Message` app depending on the android or ios along with pre populated text as equal to `body`.

```yaml
			- TextInput:
				id: smsWithBody
				value: "sms: +918812345678&body=Build amazing apps 20x faster using EnsembleUI"
			- Button:
				label: Open Url
				onTap:
					openUrl:
						url: ${smsWithBody.value}
```

To learn more about how to use openUrl action, check out the [Ensemble Kitchen Sink](https://studio.ensembleui.com/app/e24402cb-75e2-404c-866c-29e6c3dd7992/screen/TnoazbWLihcenxD1NBkr) example.
