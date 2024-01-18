## Configure Social Sign In for Deployment
Before deployment, you need to configure your own OAuth credentials plus specific setups for each platforms.

### Setting up Sign In credentials
On Google's API Console, create your OAuth client ID for each platform (i.e. iOS, Android, Web).

For `iOS`, enter the bundle ID of your App.

<img src="/images/signin-google-ios.png" alt="Google iOS client ID" style="border: solid 1px lightgrey; max-width: 900px" />

For `Android`, use Web Application type (don't use Android type). You can leave Authorized Origins and Redirect URIs blank.

<img src="/images/signin-google-android.png" alt="Google Android client ID" style="border: solid 1px lightgrey; max-width: 900px" />

For `Web`, use Web Application type. 
- Authorized Origins should be your domain (e.g. https://mycompany.com). You can also use localhost while in development (e.g. http://localhost:3000).
- Redirect URIs can be empty.

<img src="/images/signin-google-web.png" alt="webclient ID" style="border: solid 1px lightgrey; max-width: 900px" />

Using a code or text editor, open `/ensemble/ensemble-config.yaml` and enter these credentials.

```yaml
...
services:
  signIn:
    providers:
      google:
        iOSClientId: <iOS client ID here>
        androidClientId: <Android client ID here>
        webClientId: <Web client ID here>
```

#### Setting up iOS
On Google's API Console, open the OAuth client ID for iOS and look for the `iOS URL Scheme` under Additional Information.

Open `/ios/Runner/Info.plist` with a code editor, look for the block below and replace the value with your iOS URL Scheme.

```yaml
    <!-- UPDATE for your Starter. Custom Scheme for OAuth -->
	<key>CFBundleURLTypes</key>
    <array>
        <!-- Google Sign in, replace with your URL scheme -->
        <dict>
            <key>CFBundleTypeRole</key>
            <string>Editor</string>
            <key>CFBundleURLSchemes</key>
            <array>
                <string>your_iOS_URL_scheme_here</string>
            </array>
        </dict>
    </array>
```

#### Setting up Android
There is no additional setup required for Android.

#### Setting up Web
In the `web/index.html` file, look for the block below and replace the value with your Web client ID.
```html
<meta name="google-signin-client_id" content="YOUR_GOOGLE_SIGN_IN_OAUTH_CLIENT_ID.apps.googleusercontent.com">
```





### Enable Auth service in Ensemble code

By default, Ensemble does not include the authentication module to avoid installing unnecessary packages. Here, we uncomment a few lines of code to get the necessary packages.

* Under pubspec.yaml. Uncomment the Auth module block, then run `flutter pub get`.
```yaml
  # Uncomment to enable Auth service
  ensemble_auth:
    git:
      url: https://github.com/EnsembleUI/ensemble_module_auth.git
      ref: main
```

* Uncomment and update the following lines in `/lib/generated/ensemble_modules.dart`.  Try running it with `flutter run`
```
...
import 'package:ensemble_auth/auth_module.dart';
...
static const useAuth = true;    # set to true
...
if (useAuth) {
  // Uncomment to enable Auth service
  AuthModuleImpl().init();
} else {
  AuthModuleStub().init();
}
...
```
