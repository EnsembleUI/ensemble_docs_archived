# Action: rateApp

The "Rate Us" functionality is available only for iOS devices when the app is in production. 

```yaml
View:
  header:
    title: 'Action: RateApp'

  body:
    Column:
      styles:
        padding: 24
        gap: 8
      children:
        - Text:
            text: Works only for iOS when app is in production (will not work for Ensemble Go while on TestFlight)
        - Button:
            label: Rate Us
            onTap:
              rateApp:
```
The rateApp action is triggered when the "Rate Us" button is tapped. It is to handle the logic for prompting users to rate the app.