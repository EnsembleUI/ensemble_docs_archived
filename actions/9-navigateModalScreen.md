# Action: navigateModalScreen

navigateModalScreen action enables users to open a specific screen or page as a modal overlay, creating a temporary and focused view to capture user input or display additional content without losing context of the main app flow.

### Properties

| Property       | Type   | Description                                              |
| :------------- | :----- | :------------------------------------------------------- |
| name           | string | Enter the Name or ID of your screen                      |
| inputs         | object | Specify the key/value pairs to pass into the next Screen |
| onModalDismiss | action | Execute an Action when the modal screen is dismissed     |

**Note:** To close the modal from within the modal screen, just call the [navigateBack](7-navigateBack.md) action

**Example**

<div class="code-container" markdown=1>
  <button onclick="copyCode()" class="copy-code-button">Copy Code</button>

```yaml
View:
  title: "Action: navigateModalScreen"
  styles:
    scrollableView: true

  body:
    Column:
      styles: { gap: 16, padding: 24 }
      children:
        - Markdown:
            text: You can open new screen on above the main screen using action `navigateModalScreen`
        - Button:
            label: Show Modal
            onTap:
              navigateModalScreen:
                name: Actions & events
        - Markdown:
            text: You can navigateModalScreen from code blocks using `ensemble.navigateModalScreen('ScreenName');`.
        - Button:
            label: Show Modal Using Code
            onTap:
              executeCode:
                body: |
                  //@code

                  // no inputs
                  ensemble.navigateModalScreen('Actions & events');
                  //with inputs
                  //ensemble.navigateModalScreen({name: 'Actions & events',inputs:{input1: 'abc', input2: 'ced'}} );
```

</div>

You can try complete example [here](https://studio.ensembleui.com/app/e24402cb-75e2-404c-866c-29e6c3dd7992/screen/67ICgJIX0McKswXCybb0?propertyPanelEnabled=true&instantPreviewDisabled=false&editorV2Enabled=true)
