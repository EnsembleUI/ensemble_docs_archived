# Action: startTimer

Use the `onTimer` action to start a timer. Then use the `onTimer` and/or `onTimerComplete` properties to execute other actions once the timer finishes. 

In the example below, we start a time that calls an API after 5 seconds, and repeat this action 3 times. That means after 15 seconds, the `onTimerComplete` action is executed.

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

To learn more about how to use `startTimer` action, check out the [Ensemble Kitchen Sink](https://studio.ensembleui.com/app/e24402cb-75e2-404c-866c-29e6c3dd7992/screen/86fba216-4f96-408b-abff-d3ddcfbdcf49) example.