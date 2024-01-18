# Action: checkPermission

`checkPermission` is designed to check the permission status. It includes components for checking notification, location, contacts, and camera permissions.

**Callbacks**
1. `onAuthorized`: Executes when the components permission to authorized. Updates the text of the component to "Authorized."

2. `onDenied`: Executes when the components permission to denied. Updates the text of the component to "Denied."

3. `onNotDetermined`: Executes when the components permission to not determined. Updates the text of the component to "Not Determined."

```yaml
- Button:
    label: Notification Permission
    onTap:
        checkPermission:
        type: notification
        onAuthorized: |
            //@code
            notificationStatus.text = "Authorized";
            console.log("onAuthorized called");
        onDenied: |
            //@code
            notificationStatus.text = "Denied"
            console.log("onDenied called");
        onNotDetermined: |
            //@code
            notificationStatus.text = "Not Determined"
            console.log("onNotDetermined called");
```
When a user taps the "Notification Permission" button, the app checks the notification permission status. Depending on the status, one of the specified callbacks (onAuthorized, onDenied, or onNotDetermined) is executed. 