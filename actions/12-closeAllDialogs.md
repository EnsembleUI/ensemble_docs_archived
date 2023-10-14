# Action : closeAllDialogs

closeAllDialogs action dismisses or closes all open modal dialogs within the app, allowing developers to easily manage and reset the dialog stack, ensuring a clutter-free and user-friendly interface for a seamless app experience.

**Example**

<div class="code-container" markdown=1>
  <button onclick="copyCode()" class="copy-code-button">Copy Code</button>

```yaml
MyStartingDialog:
  body:
    Column:
      styles:
        gap: 10
      children:
        - Text:
            text: Welcome to Ensemble
            styles:
              fontSize: 16
              fontWeight: bold
        - Text:
            text: This dialog pops up when the user first visits the page.
        - Button:
            label: Close dialog
            onTap: closeAllDialogs
```

</div>

The complete example [here](https://studio.ensembleui.com/app/e24402cb-75e2-404c-866c-29e6c3dd7992/screen/HRIajN2i8bDDVTL32j8m?propertyPanelEnabled=true&instantPreviewDisabled=false&editorV2Enabled=true) demonstrates its usage along with showDialog
