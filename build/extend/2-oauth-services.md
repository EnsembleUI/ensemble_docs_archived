# Connecting to OAuth services

Ensemble supports authorizing and fetching data from OAuth2 services like Google and Microsoft. The entire flow is handled automatically if you are using Ensemble Go to preview your app. 

When deploying your Production App, please follow these instructions to configure your back-end server to work with Ensemble's UI.

## App Redirect
When an OAuth flow is initiated within the UI, Ensemble will redirect the users to the appropriate OAuth service's login page. Once the users enter their username/password and authorize your app, the OAuth service will invoke a callback URL (known as Redirect URL) that your app defines. This Redirect URL will re-open your app and continue the OAuth flow.

The Redirect URL to open your App can be a Http App Link or a Custom Scheme (non-http).

### Custom Scheme
#### iOS
- Look for `CFBundleURLTypes` inside the ios/Runner/Info.plist and update accordingly.
  - `CFBundleURLName` - for convention match this with your bundleID
  - `CFBundleURLSchemes` - When registering with the OAuth services, they may give you a unique string or enable you to enter your own. The scheme follows this format `com.something.globally.unique://<string>`. This has to be unique enough so it doesn't clash with any other apps out there.
    - Enter only the portion before the `://`.
```
<key>CFBundleURLTypes</key>
<array>
    <dict>
        <key>CFBundleURLName</key>
        <string>com.mycompany.myapp</string>
        <key>CFBundleURLSchemes</key>
        <array>
            <!-- Microsoft OAuth -->
            <string>msauth.com.ensembleui.starter</string>
        </array>
    </dict>
</array>
```

#### Android
- Open `android/app/src/main/AndroidManifest.xml`. Look for the callback Activity and add an `intent-filter` for your callback.
- e.g. if your callback URL looks like this `com.something.unique://authorize`, the android:scheme should be `com.something.unique`, and android:host should be `authorize`.
```
<activity
    android:name="com.linusu.flutter_web_auth_2.CallbackActivity"
    android:exported="true">

  <intent-filter android:label="flutter_web_auth_2">
    <action android:name="android.intent.action.VIEW" />
    <category android:name="android.intent.category.DEFAULT" />
    <category android:name="android.intent.category.BROWSABLE" />

    <!-- enter your callback scheme and host here -->
    <data
        android:scheme="com.something.unique"
        android:host="authorize" />
  </intent-filter>
  
  <!-- other callbacks -->
  <intent-filter ....>
```


### Http App Link
Using a URL to redirect and open your App requires two steps for each platform: 1. adding a configuration similar to the custom schemes above, and 2. prove that you own the redirect URL.  
#### iOS
- Open `ios/Runner/Runner.entitlements` and add an entry for the URL you want to redirect to your App. Note the required prefix `applinks:`.
- For example, if your want the URL `https://auth.mycompany.com/callback` to open your app. Enter only the domain to the URL below. 
```
<dict>
	<key>com.apple.developer.associated-domains</key>
	<array>
        <!-- other URLs -->
	    <string>applinks: .... </string>
	
	    <!-- add your URL, either root or subdomain is OK -->
		<string>applinks:auth.mycompany.com</string>
	</array>
</dict>
```

- Prove that you own the domain URL above by uploading the json file below to your domain (or subdomain - depending what you used).
  - The file should be called `apple-app-site-association` and served with Content-Type of `application/json`.
  - The file can be at the root of your server or under a folder called `.well-known`.
  - Using the example URL above, add `/callback` to the paths.
```
{
  "applinks": {
    "apps": [],
    "details": [
      {
        "appID": "<your_app_team_ID>.<your_app_bundle_id>",     // e.g. 3GHDU3434.com.mycompany.myapp
        "paths": ["/<path after the domain>"]                   // e.g. /callback
      },
      {
        .. other Apps and paths here ...
      }
    ]
  }
}
```

#### Android
- Open `android/app/src/main/AndroidManifest.xml`. Look for the callback Activity and add an `intent-filter` for your callback.
  - android:host is the URL domain or subdomain that will open the app, while android:pathPrefix is the path after the domain.
  - For example, use the below if your want the URL `https://auth.mycompany.com/callback` to open your app. 
```
<intent-filter android:label="flutter_web_auth_2">
    <action android:name="android.intent.action.VIEW" />
    <category android:name="android.intent.category.DEFAULT" />
    <category android:name="android.intent.category.BROWSABLE" />

    <data
        android:scheme="https"
        android:host="auth.mycompany.com"
        android:pathPrefix="/callback" />
</intent-filter>
```
- Prove that you own the domain URL above by uploading the json file below to your domain (or subdomain - depending what you used).
    - The file should be called `assetlinks.json` and served with Content-Type of `application/json`.
    - The file can be at the root of your server or under a folder called `.well-known`.
    - Get your app's SHA256 by going to Google Play's developer console. 
```
[
  {
    "relation": ["delegate_permission/common.handle_all_urls"],
    "target": {
      "namespace": "android_app",
      "package_name": "com.mycompany.myapp",
      "sha256_cert_fingerprints": [
        "<your_app_sha256>",
      ]
    }
  }
]
```

