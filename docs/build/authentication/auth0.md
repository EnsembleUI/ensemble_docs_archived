# Setting up Authentication with Auth0

In this guide, we will authenticate users against an existing Auth0 tenant.

#### Prerequisites

1. You have an existing Auth0 tenant
2. You have created an app on Ensemble Studio
3. You have [Flutter](https://docs.flutter.dev/get-started/install) installed on your machine
4. You have a Simulator for testing

## 1. Provision Auth0 App Credentials

Login to your Auth0 tenant and go the [Applications](https://manage.auth0.com/#/applications) section of your dashboard.

#### Create an Auth0 Application

Click on "Create Application", and enter a name for your application. Select "Native" as the application type and click "Create".

#### Enable Connections

Your application should have at least one enabled Connection. Click on "Connections" and enable any database or identity provider, e.g. Google.

#### Configure Application

Navigate to the "Settings" tab on your application page, and scroll to the "Application URIs" section. This is where we will set your Allowed Callback URLs and Allowed Logout Urls for Android and iOS. The values will follow this template:

- Android: `SCHEME://AUTH0_DOMAIN/android/YOUR_PACKAGE_NAME/callback`
- iOS: `YOUR_BUNDLE_ID://AUTH0_DOMAIN/ios/YOUR_BUNDLE_ID/callback`

`SCHEME` can be a custom protocol key for you to differentiate client schemes. If this is not needed, you can simply use `http`.

---

## 2. Configure Ensemble app

#### Get starter app

Clone [Ensemble Starter](https://github.com/EnsembleUI/starter) from GitHub. Using a code or text editor, open `/ensemble/ensemble-config.yaml` .

Set your definition source to be Ensemble:

```yaml
    definitions:
	  # where your page definitions are hosted ('local', 'remote' or 'ensemble')
	  from: ensemble

	  ensemble:
	  appId: <add your Ensemble app id here>
```

You can find your Ensemble app id by navigating to the app on Ensemble Studio, clicking the menu icon, and selecting `Copy App ID` option.

#### Configure Auth0 details for Ensemble app

In the same file, `ensemble-config.yaml` , add your Auth0 app client ID in the following format.

```yaml
    services:
      signIn:
        serverUri: # the domain of your auth0 tenant
        providers:
          auth0:
            iOSClientId: # the client id of of the Auth0 application your created in step 1
            # you may specify additional client ids if you have different applications, otherwise this will be the same client id for all
            androidClientId: 
            webClientId: 
            serverClientId:
```

---

## 3. [iOS only] Update Info.plist file

Inside the directory where you cloned Ensemble Starter, open `/ios/Runner/Info.plist` with a code editor. Add the following to this file.

```
    <key>CFBundleURLTypes</key>
    <array>
        <dict>
            <key>CFBundleTypeRole</key>
            <string>Editor</string>
            <key>CFBundleURLName</key>
            <!-- Replace <yourappdomain> with the top level domain you created your app with, e.g. ensembleui -->
            <string><yourappdomain></string>
            <key>CFBundleURLSchemes</key>
            <array>
              <string>$(PRODUCT_BUNDLE_IDENTIFIER)</string>
            </array>
        </dict>
    </array>
```

---

## 4. [Android only] Update build.gradle

Inside the directory where you cloned Ensemble starter, open `/android/build.gradle` in your code editor. Add the following to this file.

```groovy
// android/app/build.gradle

android {
    // ...

    defaultConfig {
        // ...
        manifestPlaceholders += [auth0Domain: "<YOUR_AUTH0_DOMAIN>", auth0Scheme: "<YOUR_SCHEME>"]
    }

    // ...
}
```

## 4. Enable Auth service in Ensemble code

By default, Ensemble does not include the authentication module to avoid installing unnecessary packages. Here, we uncomment a few lines of code to get the necessary packages.

Inside the directory where you cloned Ensemble Starter, open `/lib/generated/ensemble_modules.dart`.

* Search for this line and uncomment it:
```
// import 'package:ensemble_auth/auth_module.dart';
```

* Search for this line and uncomment it:
```
      // AuthModuleImpl().init();
```

* Search for this line and set it to true
```
  static const useAuth = false;
```

---

## 5. Add a Sign in screen

Now that your app is set up to use Auth0, add a new screen in the studio with following definition.


```yaml
View:
  body:
    Column:
      styles:
        mainAxis: center
        crossAxis: center
        padding: 40
      children:
        - SignInWithAuth0:
            scheme: flutterdemo
            provider: auth0
            onAuthenticated:
              showToast:
                message: ${auth.user.email}
```

---

## 6. Build and run the app

* Review `/ensemble/ensemble.properties`. Update the appId as needed - this is your app's bundle ID in the format of . e.g. `com.ensembleui.myfirstapp` (all lowercase, no special characters).
* Run `flutter pub upgrade`. Run this occasionally when the Ensemble framework has been updated.
* Run `flutter create --org com.ensembleui --project-name starter --platform=ios,android .` (note the period at the end). If you modified the appId, make sure the org and project name match the bundle ID.
* Run the App with `flutter run`. If you currently have a running iOS or Android emulator, the command will prompt for a selection, otherwise the App will be opened in the web browser.
