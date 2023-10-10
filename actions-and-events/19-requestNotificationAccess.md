# Action: requestNotificationAccess

requestNotificationAccess action prompts users to grant permission for the app to send notifications to their device, enabling personalized alerts and updates, enhancing user engagement, and ensuring timely delivery of relevant information within the application.

### Properties

| Property | Type   | Description                                                      |
| :------- | :----- | :--------------------------------------------------------------- |
| onAccept | action | Execute an Action when notification permission has been granted  |
| onReject | action | Execute an Action when notification permission has been rejected |

**Example**

The first important thing to consider while implementing notifications is to make sure that its authorized by user itself. Thus first step is to ensure complete access to ensemble. let us see how it works

<div class="code-container" markdown=1>
  <button onclick="copyCode()" class="copy-code-button">Copy Code</button>

```yaml
View:
  header:
  title: "Action: showNotification"

  # Specify the body of the screen
  body:
    Column:
    styles:
      padding: 24
      gap: 8
    children:
      - Text:
          text: Hi there!
      - Button:
          label: Checkout Ensemble Kitchen Sink
          onTap:
          requestNotificationAccess:
            onAccept:
            showNotification:
              title: A Notification
              body: As you can see me working here
```

</div>

When user clicks on button browser pop-up asks for permission and as you allow it notification can be seen at bottom-right corner of screen. You can refer complete example [here](https://studio.ensembleui.com/app/e24402cb-75e2-404c-866c-29e6c3dd7992/screen/NiF1zG2VKspdlxNM2F1n?propertyPanelEnabled=true&instantPreviewDisabled=false&editorV2Enabled=true).

**Output**

![Alt text](image.png)

![Alt text](image-2.png)
