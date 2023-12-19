# onError

When making API calls, it's crucial to handle errors gracefully to provide a better user experience and ensure the robustness of your application. In the given code snippet, the onError section is utilized to manage errors that might occur during the execution of the createToDoError API call.

```yaml
- Button:
    label: Call API
    onTap:
        invokeAPI:
        name: createToDoError
        onResponse: |
            //@code
            apiStatus.text = 'Call was successful';
        onError: |
            //@code
            apiStatus.text = 'API returned an error';
```

```yaml
onError: |
  //@code
  apiStatus.text = 'API returned an error';
```
Error Handling Trigger:
The onError section is triggered when there is an error during the execution of the associated API call (createToDoError).
Response Status Check:
This part of the code checks for errors in the response. If an error occurs, it sets the apiStatus.text to indicate that an error has occurred.
User Feedback:
The apiStatus.text is a variable or element in the user interface used to display feedback to the user. In case of an error, it informs the user that the API call encountered an issue.