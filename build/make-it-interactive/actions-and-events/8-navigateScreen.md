# Action: navigateScreen

navigateScreen action allows users to transition to a specific screen or page within the app, facilitating seamless navigation and enhancing user interaction with different sections of the application.

### Properties

| Property | Type   | Description                                              |
| :------- | :----- | :------------------------------------------------------- |
| name     | string | Enter the Name or ID of your Screen                      |
| inputs   | object | Specify the key/value pairs to pass into the next Screen |
| options  | object | [see properties]()                                       |

#### properties.options

| Property             | Type    | Description                                                                                                                                                                                   |
| :------------------- | :------ | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| replaceCurrentScreen | boolean | If true, the new screen will replace the current screen on the navigation history. Navigating back from the new screen will skip the current screen.                                          |
| clearAllScreens      | boolean | If true, clear out all existing screens in the navigation history. This is useful when navigating to a Logout or similar page where users should not be able to go back to the prior screens. |

**Example**

<div class="code-container" markdown=1>
  <button onclick="copyCode()" class="copy-code-button">Copy Code</button>

```yaml
View:
  title: "Action: navigateScreen"
  styles:
    scrollableView: true

  Column:
    styles: { gap: 16, padding: 24 }
    children:
      - Markdown:
          text: You can navigate to another screen using action `navigateScreen`
      - Button:
          label: Navigate to Home
          onTap:
            navigateScreen:
              name: Home

      - Markdown:
          text: You can navigateScreen from code blocks using `ensemble.navigateScreen('ScreenName');`.
      - Button:
          label: Navigate to Home using code
          onTap:
            executeCode:
              body: |
                //@code
                ensemble.navigateScreen('Home');

      - Divider

      - Markdown:
          text: |
            #### Pass inputs
            You have the option of passing inputs to the target screen.

      - TextInput:
          id: messageInput
          label: Message to pass
          value: Hello there

      - Button:
          label: Navigate and pass inputs
          onTap:
            navigateScreen:
              name: "Action: navigateScreen inputs demo"
              inputs:
                message: ${messageInput.value}

      - Button:
          label: Navigate and pass inputs using code
          onTap:
            executeCode:
              body: |
                //@code
                ensemble.navigateScreen({
                  "name": "Action: navigateScreen inputs demo",
                  "inputs":  { 
                    "message": messageInput.value
                  }
                });

      - Divider

      - Markdown:
          text: |
            #### options: clearAllScreens
            By default, Ensemble retains your previous screens. On browser, user can press back button and get the previous view. 

            When you need to remove all the previous screens from the history stack, as in a logout scenario, use `clearAllScreens: true`.

      - Button:
          label: Navigate and clear all screen history
          onTap:
            navigateScreen:
              name: Home
              options:
                clearAllScreens: true

      - Divider

      - Markdown:
          text: |
            #### options: replaceCurrentScreen
            Sometimes when navigating to a new screen, you may not want the user to go back to the current screen. An example is after logging in, hitting back should not take the user back to the login screen. Use the flag `replaceCurrentScreen: true` to remove the current screen from the history stack.

      - Button:
          label: Navigate to new screen and replace the current screen
          onTap:
            navigateScreen:
              name: Home
              options:
                replaceCurrentScreen: true
```

  </div>

You can try complete example [here](https://studio.ensembleui.com/app/e24402cb-75e2-404c-866c-29e6c3dd7992/screen/kgGUzKx0YiIWp96auaEO?propertyPanelEnabled=true&instantPreviewDisabled=false&editorV2Enabled=true)
