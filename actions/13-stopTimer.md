# Action : stopTimer

stopTimer action allows developers to halt or pause a running timer within the app, providing control over time-sensitive processes and facilitating efficient handling of time-related events, enhancing user interactions and application behavior.

### Properties

| Property | Type   | Description                                  |
| :------- | :----- | :------------------------------------------- |
| id       | string | Stop the timer with this ID if it is running |

**Example**

<div class="code-container" markdown=1>
  <button onclick="copyCode()" class="copy-code-button">Copy Code</button>

```yaml
Joke:
  body:
    Column:
      styles: { gap: 10 }
      children:
        - Text:
            text: Click the button to show a Chuck Norris joke every 10 seconds. Click Stop when you have enough.
        - Row:
            styles: { gap: 10 }
            children:
              - Button:
                  label: Tell me a joke
                  onTap:
                    startTimer:
                      id: jokeTimer
                      options:
                        isGlobal: true
                        repeat: true
                        repeatInterval: 10
                        startAfter: 0
                      onTimer:
                        invokeAPI:
                          name: jokeAPI
                          onResponse: |-
                            //@code
                            output.text = response.body.value;

              - Button:
                  label: Stop
                  onTap:
                    stopTimer:
                      id: jokeTimer
        - Text:
            id: output
```

</div>

see the complete example [here](https://studio.ensembleui.com/app/e24402cb-75e2-404c-866c-29e6c3dd7992/screen/86fba216-4f96-408b-abff-d3ddcfbdcf49?propertyPanelEnabled=true&instantPreviewDisabled=false&editorV2Enabled=true) to understand usage
