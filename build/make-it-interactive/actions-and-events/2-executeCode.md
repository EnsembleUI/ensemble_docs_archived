# Action: executeCode

Use the `executeCode` action to write your own TypeScript code. If you need to perform a follow-up action when the code execution is completed, use the `onComplete` property.

Keep in mind that you need to use **//@code** so Ensemble knows to treat the lines that follow as TypeScript.

```yaml
View:
  header:
    title: "Action: executeCode"
  styles:
    scrollableView: true
  Column: 
    styles: { gap: 16, padding: 24 }
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

To check out the implementation of the `executeCode` action, see this [Ensemble Kitchen Sink](https://studio.ensembleui.com/app/e24402cb-75e2-404c-866c-29e6c3dd7992/screen/6f88beb2-efe0-4278-82f3-134d110a8551) app.