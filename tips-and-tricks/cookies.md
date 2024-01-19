# Cookies in Webview

Cookies usage in the EnsembleUI WebView is designed to enhance functionality, especially in native applications. The code snippet allows you to set cookies directly for the WebView, and it provides options to control navigation based on cookie conditions.

## WebView Configuration
```yaml
    WebView:
        # Setting cookies for the WebView (only works for native applications)
        cookies: ${cookiesArray}

        # Taking cookies from the set-cookies header directly (only works for native applications)
        cookieHeader: ${cookieString}
        
        id: webview
        uri: https://ensembleui.com/
        styles:
            height: 400
```

### Cookies Setting
The `cookies` property allows you to set cookies directly for the WebView. The cookies are defined in the `cookiesArray` variable in the Global section.
The `cookieHeader` property takes cookies from the set-cookies header directly. The cookies are specified in the `cookieString` variable in the Global section.

### Cookie Usage Example
```yaml
    Global: |-
    //@code
    var cookieString = "CustomName=CustomValue; Max-Age=2592000; Domain=ensembleui.com; Path=/; Expires=Sun, 30 Nov 2024 14:08:46 GMT; HttpOnly=false; Secure=true; SameSite=None";
    
    var cookiesArray = 
    [
        {
        "name": "CustomName1",
        "value": "CustomValue1",
        "domain": ".ensembleui.com",
        "path": "/",
        "expires": 1727414966.520928,
        "httpOnly": false,
        "secure": false,
        "sameSite": "None"
        },
        {
        "name": "CustomName2",
        "value": "CustomValue2",
        "domain": "github.com",
        "path": "/",
        "expires": 1727414959.838461,
        "httpOnly": false,
        "secure": false,
        "sameSite": "None"
        },
    ]
```

**Notes**
Cookie handling features are applicable only to native applications, not web applications.
Customize the cookies and cookie-related settings according to your application's requirements.
Understand the navigation control mechanism based on cookies, especially regarding its platform-specific behavior.