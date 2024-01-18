# Action: Share

Using the native sharing capabilities of the device to provide users with the ability to share a specific piece of content.

```yaml
View:
  styles:
    scrollableView: true

  header:
    title: 'Action: Share'

  body:
    Column:
      styles:
        padding: 24
        gap: 8
      children:
        - Button:
            label: Open Share Sheet
            onTap:
              share:
                title: EnsembleUI
                text: https://ensembleui.com/
        - Text:
            text: Works only on Native iOS and Android
```
The share action is triggered when the "Open Share Sheet" button is tapped. It typically opens the native share sheet on the device, allowing users to share content. In this case, it shares a title ("EnsembleUI") and a URL ("https://ensembleui.com/").