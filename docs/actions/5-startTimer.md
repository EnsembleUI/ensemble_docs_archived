# Action: startTimer

Use the `onTimer` action to start a timer. Then use the `onTimer` and/or `onTimerComplete` properties to execute other actions once the timer finishes.

### Properties

| Property        | Type   | Description                                                        |
| :-------------- | :----- | :----------------------------------------------------------------- |
| id              | string | Give this timer an ID so it can be cancelled by a stopTimer action |
| onTimer         | action | Execute an Action every time the timer triggers                    |
| onTimerComplete | action | Execute an Action when the timer has completed and will terminate  |
| options         | object | [see properties](#propertiesoptions)                               |

#### properties.options

| Property                                                                                                                                                                        | Type     | Description                                                                                                                                                                                                                                                                                                                                |
| :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | :------- | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| isGlobal                                                                                                                                                                        | boolean  | Marking this timer as global will ensure the timer, if repeating indefinitely, will continue to run even if the user navigates away from the screen, until explicitly stopped by the stopTimer action. Note that there can only ever be one global timer. Creating a new global timer will automatically cancel the previous global timer. |
| In the example below, we start a time that calls an API after 5 seconds, and repeat this action 3 times. That means after 15 seconds, the `onTimerComplete` action is executed. |
| startAfter                                                                                                                                                                      | integer  | Delay the timer's start by this number of seconds. If not specified and repeat is true, repeatInterval will be used. If none is specified, there will be no initial delay                                                                                                                                                                  |
| repeat                                                                                                                                                                          | boolean  | Whether the time should repeat and trigger at every repeatInterval seconds. This Timer will run continuously unless a maxNumberOfTimes is specified                                                                                                                                                                                        |
| repeatInterval                                                                                                                                                                  | integral | Trigger the timer periodically at this repeatInterval (in seconds)                                                                                                                                                                                                                                                                         |
| maxNumberOfTimes                                                                                                                                                                | integer  | Set the max number of times the timer will triggers, if repeat is true                                                                                                                                                                                                                                                                     |

**Usage Examples**

In the example below, we start a time that calls an API after 5 seconds, and repeat this action 3 times. That means after 15 seconds, the `onTimerComplete` action is executed.

<div class="code-container" markdown=1>
  <button onclick="copyCode()" class="copy-code-button">Copy Code</button>

```yaml
View:
  header:
    title: "Action: startTimer"
  styles:
    scrollableView: true

  body:
    Column:
      styles:
        gap: 16
        padding: 24
      children:
        - Button:
            label: Start Timer
            onTap:
              startTimer:
                onTimer:
                  invokeAPI:
                    name: getNYCTime
                options:
                  repeat: true
                  maxNumberOfTimes: 3
                  repeatInterval: 5
                onTimerComplete:
                  executeCode:
                    body: |
                      //@code
                      timerComplete.text = 'Timer completed';

        - Text:
            text: |
              API response:
              ${getNYCTime.body.datetime}

        - Text:
            id: timerComplete

API:
  getNYCTime:
    authentication: none
    method: GET
    uri: https://worldtimeapi.org/api/timezone/America/New_York
```

</div>

To learn more about how to use `startTimer` action, check out the [Ensemble Kitchen Sink](https://studio.ensembleui.com/app/e24402cb-75e2-404c-866c-29e6c3dd7992/screen/86fba216-4f96-408b-abff-d3ddcfbdcf49) example.
