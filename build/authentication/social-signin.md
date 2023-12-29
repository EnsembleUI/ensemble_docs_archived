# Social Sign In

Ensemble supports Social Sign in with Google and Apple. This guide will specifically target the **Sign in with Google** flow.
For each service, we support three different mechanism for managing the signed-in users: on the client only, with your Server, or with Firebase.

## Client-side
Ensemble supports sign in exclusively on the client side, where user information is stored locally on the device.

<video width="70%"  controls>
  <source src="/images/signin-client.mov" type="video/mp4">
  <source src="movie.ogg" type="video/ogg">
  Your browser does not support the video tag.
</video>

### Setting up Sign In credentials
On Google's API Console, create your OAuth client ID for each platform (i.e. iOS, Android, Web).

On `iOS`, enter the bundle ID of your App.

<img src="/images/signin-google-ios.png" alt="Google iOS client ID" style="border: solid 1px lightgrey; max-width: 900px" />

on `Android`, use Web Application type (don't use Android type). You can leave Authorized Origins and Redirect URIs blank. 

<img src="/images/signin-google-android.png" alt="Google Android client ID" style="border: solid 1px lightgrey; max-width: 900px" />

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

### Setting up iOS
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
(tbc)

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

### Build your screens on Studio
We are now ready to build the screens on Studio. First build a **Login** screen.

```yaml
View:
  styles:
    useSafeArea: true

  body:
    Column:
      styles:
        # centering the content
        mainAxisSize: min
        crossAxis: center
        alignment: center
      children:
        - Text:
            text: Welcome to a SignIn Example
            styles:
              textStyle:
                fontSize: 20
              padding: 0 0 20 0

        - SignInWithGoogle:
            # Once signed in, go to the screen 'Home' 
            # Also clear all previous screens to prevent Back button navigation
            onSignedIn:
              navigateScreen:
                name: Home
                options:
                  clearAllScreens: true
```
Now build the screen **Home** to show the currently logged-in user's information.

```yaml
View:
  header:
    title: Welcome Home
  
  # onLoad check if currently signed in. If not go to the Login screen
  onLoad:
    verifySignIn:
      onNotSignedIn:
        navigateScreen:
          name: Login

  body:
    Column:
      styles:
        padding: 24
        gap: 8
      children:
        - Row:
            styles:
              gap: 7
            children:
              # Current user's info is under ${auth.user.*}
              - Avatar:
                  source: ${auth.user.photo}
              - Text:
                  text: |-
                    ${auth.user.name}
                    ${auth.user.email}
        - Button:
            label: Sign Out
            onTap:
              # sign out will clear the user info
              signOut:
                onComplete:
                  # once signed out, go to the Login screen
                  # Also clear all existing screens so the user can't go back
                  navigateScreen:
                    name: Login
                    options:
                      clearAllScreens: true
```