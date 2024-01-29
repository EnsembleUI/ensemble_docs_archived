# Creating Custom Headers and Footers

### Custom Header
App headers serve as a crucial element in your application's user interface, providing navigation options, branding, and contextual information. Here's how you can create and use app headers effectively in your application:

They typically include:
- Title
- Navigation Icons/Buttons
- Styling
```yaml
    header:
        title: App Header
        styles:
            color: white
            showNavigationIcon: true
```

To explore additional header properties and styles, please refer to this [documentation page](/build/user-interface/1-page-structure.md)!

### Custom Footer
Footers play a pivotal role in providing additional information, navigation options, or actions within your application.

They typically include: 
- Components
- Styling
```yaml
    footer:
        styles:
            backgroundColor: white
        children:
            - Button:
                styles:
                    backgroundColor: black
                    borderRadius: 40
                    padding: 20
                label: Submit
```