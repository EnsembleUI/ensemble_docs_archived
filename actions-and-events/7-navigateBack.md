# Action: navigateBack

`navigateBack` action allows users to go back to the previous screen or page within the app's navigation stack, enhancing user experience and facilitating smooth app navigation. Navigating back to the previous screen if possible. The current screen will be removed from the navigation history. This also works for a modal screen.

**Example**

Using navigateBack is straight forward. In ensemble when you visit a screen using [navigateScreen]() by default there is a back button in the header ( if there is a header ). Otherwise you can also associate navigateBack action with either a custom button or icon as you wish.

<div class="code-container" markdown=1>
  <button onclick="copyCode()" class="copy-code-button">Copy Code</button>

```yaml
View:
  title: "Action: navigateBack"
  styles:
    scrollableView: true

  Column:
    styles: { gap: 16, padding: 24 }
    children:
      - Markdown:
          text: You can open a new screen above the current one and use "navigateScreen" to navigate back to this main screen.
      - Button:
          label: Show Detail Page
          onTap:
            navigateModalScreen:
              name: "Action: navigateBackModal"
```

</div>

can see complete example [here](https://studio.ensembleui.com/app/e24402cb-75e2-404c-866c-29e6c3dd7992/screen/XjvL2XseLnRvYO4FS82e?propertyPanelEnabled=true&instantPreviewDisabled=false&editorV2Enabled=true)
