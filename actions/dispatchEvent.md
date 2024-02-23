# dispatchEvent action
Custom widgets in Ensemble, just like widgets in any UI framework, can dispatch events

`dispatchEvent` action is used in custom widgets to let the caller of the widget know when something interesting has happened. 

For example 
- a calendar widget may dispatch an event named 'onDataRangeSelected' to notify the caller that the user selected a range of dates. 
- in this example, we have a custom widget named `DispatchEventSample` that is a simple Form widget with two fields and a Submit button. When you tap the Submit button, `DispatchEventSample` dispatches an event namd `onFormSubmit`. A Text widget below the form just prints out the data received in the event

## Example: 
`DispatchEventSample` is Custom Widget that dispatches `onFormSubmit` event 
```yaml
  Widget:
  inputs:
    - nameLabel
    - emailLabel
    - submitBtnLabel
  events:
    onFormSubmit:
      data:
        name:
        email:
  body:
    Form:
      onSubmit:
        dispatchEvent:
          onFormSubmit:
            data:
              name: ${name.value}
              email: ${email.value}
      children:
        - Text:
            text: Sample Form that dispatches onFormSubmit whenever the Submit button is pressed
        - TextInput:
            label: ${nameLabel}
            required: true
            id: name
            validateOnUserInteraction: true
        - TextInput:
            label: ${emailLabel}
            id: email
            required: true
            inputType: email
            validateOnUserInteraction: true
        - Button:
            label: ${submitBtnLabel}
            submitForm: true
```
The screen that uses the widget `listens` to the `onFormSubmit` event and simply prints out the data
```yaml
View:
    # Optional - style the screen
    styles:
      scrollableView: true

    # Optional - set the header for the screen
    header:
      title: 'Action: dispatchEvent'

    # Specify the body of the screen
    body:
      Column:
        styles:
          padding: 24
          gap: 8
        children:
          - Markdown:
              text: |
                Custom widgets in Ensemble, just like widgets in any UI framework, can dispatch events
                
                `dispatchEvent` action is used in custom widgets to let the caller of the widget know when something interesting has happened. 
                
                For example 
                - a calendar widget may dispatch an event named 'onDataRangeSelected' to notify the caller that the user selected a range of dates. 
                - in this example, we have a custom widget named `DispatchEventSample` that is a simple Form widget with two fields and a Submit button. When you tap the Submit button, `DispatchEventSample` dispatches an event namd `onFormSubmit`. A Text widget below the form just prints out the data received in the event
          - Divider:

          - DispatchEventSample:
              inputs:
                nameLabel: Full Name
                emailLabel: Email Address
                submitBtnLabel: Submit
              events:
                onFormSubmit:
                  executeCode:
                    body: |-
                      eventData.text = 'Received Data from onFormSubmit: '+event.data.name + ' ' + event.data.email
          - Divider:
              
          - Text:
              id: eventData
```
See Kitchen Sink for the detailed example[(here](https://studio.ensembleui.com/app/e24402cb-75e2-404c-866c-29e6c3dd7992/screen/RajOE62KtSkOHYHJQVJF)
