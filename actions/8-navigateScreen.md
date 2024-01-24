# Action: navigateScreen

navigateScreen action allows users to transition to a specific screen or page within the app, facilitating seamless navigation and enhancing user interaction with different sections of the application.

Like any other action, navigateScreen may be called in YAML or in the JS code. 

### Properties

| Property       | Type   | Description                                                                             |
| :------------- | :----- | :-------------------------------------------------------------------------------------- |
| name           | string | Enter the Name or ID of your Screen                                                     |
| inputs         | object | Specify the key/value pairs to pass into the next Screen                                |
| options        | object | [see properties]()                                                                      |
| onNavigateBack | action | triggers when users returns back to a screen it previously visited using navigateScreen |
| transition | Map | [Screen transition](#screen-transition) , [Screen transition example](#screen-transition-example)

#### Screen Transition
Animate screen transition from one to another.

| Property       | Type   | Description |
| :--- | :--- | :---|
| type | string | [transition type](#transition-type)
| alignment | string | [transition alignment](#transition-alignment)
| duration | integer| duration of transition in millisecond 

#### transition-type
| name |
| :--- |
|fade |
|rightToLeft |
|leftToRight |
|topToBottom |
|bottomToTop |
|scale |
|rotate |
|size |
|rightToLeftWithFade |
|leftToRightWithFade |
|leftToRightPop |
|rightToLeftPop |
|topToBottomPop |
|bottomToTopPop |

#### transition-alignment
|name|
|:---|
|topLeft|
|topCenter|
|topRight|
|centerLeft|
|center|
|centerRight|
|bottomLeft|
|bottomCenter|
|bottomRight|

#### properties.options

| Property             | Type    | Description                                                                                                                                                                                   |
| :------------------- | :------ | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| replaceCurrentScreen | boolean | If true, the new screen will replace the current screen on the navigation history. Navigating back from the new screen will skip the current screen.                                          |
| clearAllScreens      | boolean | If true, clear out all existing screens in the navigation history. This is useful when navigating to a Logout or similar page where users should not be able to go back to the prior screens. |

**Example: Calling navigateScreen - Detailed Examples for YAML and JS**

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

**Example: Calling navigateScreen in Javascript**

```javascript
//navigating to a screen without any options
ensemble.navigateScreen('My Screen');
//navigating to a screen with options
ensemble.navigateScreen({name: 'My Screen',options: {replaceCurrentScreen: true}}
```

### onNavigateBack

We can also make use of onNavigateBack in our navigateScreen action to achieve certain goals like calling an API when returning to screen, updating something which was modified on visited screen etc.

**Example**
Below is only a snippet from a use case where we can perform any action inside the onNavigateBack event. We can call an API or update any particular parameter we want

```yaml
navigateScreen:
  name: "${booking.completion_status == 'confirmed' ? 'ConfirmedTrip' : 'ConfirmTripRequest'}"
  inputs:
    booking: ${booking}
  onNavigateBack: |-
    ensemble.debug("got back")
```

Another example where using in context of a button we are updating certain local storage items inside the context of the onNavigateBack

```yaml
- Button:
    label: Categories
    styles:
      outline: true
      padding: 0
    labelStyle:
      fontSize: 12
      color: 4288060321
    endingIcon:
      name: chevron_right
      color: 4288060321
      size: 16
    onTap: null
    navigateScreen:
      name: Spending
      onNavigateBack: |-
        //@code
        getCategoriesAggregate(ensemble.storage.timeSpan);

```

Note: here we are chaining actions onTap -> navigateScreen -> onNavigateBack etc. Also getCategories(...) is a function used to update certain local storage items.

- We can also pass data from the visited screen to current screen using navigateBack action. let see an example for that as well.

```yaml
View:
  header:
    title: Home
  body:
    Button:
      label: Checkout Ensemble Kitchen Sink
      onTap:
        navigateBack:
          data: #  optional, can be simple or complex
            var1: 1
            var2: "s t r i n g"
```

on visited screen using navigateBack we pass certain variables which can be accessed on previous screen using onNavigateBack event.

```yaml
View:
  header:
    title: Home
  body:
    Button:
      label: Checkout Ensemble Kitchen Sink
      onTap:
        navigateScreen:
          name: nextScreen
          onNavigateBack: |-
            //@code
            console.log("navigated back to main screen");
            console.log(event.data);
```

#### Screen Transition Example

```yaml
View:
  header:
    title: Screen Transition

  body:
    Button:
      label: Navigate transition
      onTap:
        navigateScreen:
          name: <write-your-screen-name-here>
          transition: 
            type: rotate
            duration: 1000
            alignment: center
```