# Action: executeCode

Utilize the `executeCode` action to compose custom JavaScript code within the context of this application. When the execution of the code concludes, you can incorporate a follow-up action by leveraging the `onComplete` property.

Keep in mind that you need to use **//@code** so Ensemble knows to treat the lines that follow as JavaScript.

```yaml
View:
  Column:
    children:
      - Button:
          label: Execute Code
          onTap:
            executeCode:
              body: |
                //@code
                codeExecuted.text = 'Code block under body is executed';
              onComplete: |
                //@code
                onCompleteCodeExecuted.text = 'Code block under onComplete is executed';

      - Text:
          id: codeExecuted

      - Text:
          id: onCompleteCodeExecuted
```

For examples of the `executeCode` action, see the [Ensemble Kitchen Sink](https://studio.ensembleui.com/app/e24402cb-75e2-404c-866c-29e6c3dd7992/screen/6f88beb2-efe0-4278-82f3-134d110a8551) app.

## Properties for executeCode

| Property   | Type | Description |
| :-------   | :--- | :---------- |
| body       | String  | Block of code writen in JavaScript. This block executes when the executeCode action is called. |
| onComplete | String  | Block of code writen in JavaScript. This block executes after thh executeCode action is called, and the body code block is executed. |

