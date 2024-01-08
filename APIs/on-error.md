# onError

When making API calls, it's crucial to handle errors gracefully to provide a better user experience. When invoking an API, `onError` event is dispatched when the response is a not a success.

```yaml
View:
  body:
    Column:
      children:
        - Button:
            label: Call API
            onTap:
                invokeAPI:
                name: createToDo
                onResponse: |
                    apiStatus.text = 'Call was successful';
                onError: |
                    apiStatus.text = 'API returned an error';
        - Text:
            id: apiStatus
```
