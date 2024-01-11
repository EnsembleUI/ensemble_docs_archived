# Setting up Authentication with Firebase

In this guide, we will enable authentication through Firebase.

<video width="70%"  controls>
  <source src="/images/firebase-auth.mov" type="video/mp4">
  <source src="movie.ogg" type="video/ogg">
  Your browser does not support the video tag.
</video>


#### Prerequisites

1. You have created a Firebase project
2. You have created an app on Ensemble Studio
3. You have [Flutter](https://docs.flutter.dev/get-started/install) installed on your machine
4. You have a Simulator for testing

## 1. Configure Firebase project

Login to your Firebase account and navigate to your project in order to complete following steps.

#### Enable Sign in with Google

Go to the Authentication section of your Firebase project, and enable Authentication. After that, enable Google as the sign-in method.

#### Add iOS app

Under project settings, add iOS app to your Firebase project. As you go through the steps, you will download a file named `GoogleService-Info.plist` . We will use details from this file later on.
 
#### Add Android app

Under project settings, add Android app to your Firebase project. As you go through the steps, you will download a file named `google-services.json` . We will use details from this file later on.

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

You can find you Ensemble app id by navigating to the app on Ensemble Studio, clicking the menu icon, and selecting `Copy App ID` option.

#### Add Firebase app details to Ensemble app

In the same file, `ensemble-config.yaml` , add Firebase account details in the following format.

```yaml
    accounts:
		firebase:
			iOS:
				apiKey: # In GoogleService-Info.plist, take the value of API_KEY
				appId: # In GoogleService-Info.plist, take the value of GOOGLE_APP_ID
				messagingSenderId: # In GoogleService-Info.plist, take the value of GCM_SENDER_ID
				projectId: # In GoogleService-Info.plist, take the value of PROJECT_ID
			android:
				apiKey: # In google-services.json, take value of client.api_key.current_key
				appId: # In google-services.json, take value of client.client_info.mobilesdk_app_id
				messagingSenderId: # In google-services.json, take value of project_info.project_number
				projectId: # In google-services.json, take value of project_info.project_id
```

To get these details, use the `GoogleService-Info.plist` and  `google-services.json` you downloaded during step 1.

Here's an example of the outcome.

<img src="/images/firebase-account-details.png" alt="firebase account details" style="max-width: 900px;">


#### Add sign-in providers to Ensemble app

In the same file, `ensemble-config.yaml` , under `services` add the following.

```yaml
    services:
      signIn:
        providers:
          google:
            iOSClientId: # In GoogleService-Info.plist, take the value of CLIENT_ID
            androidClientId: # In google-services.json, take value of client.oauth_client.client_id
```

Here's an example of the outcome.


<img src="/images/firebase-provider-details.png" alt="firebase provider details" style="max-width: 900px;">


---

## 3. [iOS only] Update Info.plist file

Inside the directory where you cloned Ensemble Starter, open `/ios/Runner/Info.plist` with a code editor. Add the following to this file.

```
    <array>
        <!-- Google Sign in, replace with your URL scheme -->
        <dict>
            <key>CFBundleTypeRole</key>
            <string>Editor</string>
            <key>CFBundleURLSchemes</key>
            <array>
                <string> URL SCHEME GOES HERE </string>
            </array>
        </dict>
    </array>
```

Use the `GoogleService-Info.plist` that you downloaded during step 1, and copy the value of REVERESED_CLIENT_ID. Paste this value in inside this string tag: `<string> URL SCHEME GOES HERE </string>`.

---

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

Now that your app is set up to use Firebase, add a new screen in the studio with following definition. Ensemble currently provides `SignInWithGoogle` and `SignInWithApple`. Set the provider `property` to `firebase`.


```yaml
View:
  body:
    Column:
      styles:
        mainAxis: center
        crossAxis: center
        padding: 40
      children:
        - SignInWithGoogle:
            provider: firebase
```

Depending on your need, assign actions to `onSignedIn` and `onError` properties as well. For demo purpusoes here, we will just show a toast message.


```yaml
        - SignInWithGoogle:
            provider: firebase
            onSignedIn:
              showToast:
                message: ${auth.user.email}
            onError:
              showToast:
                message: Something went wrong
```

---

## 6. Build and run the app

* Review `/ensemble/ensemble.properties`. Update the appId as needed - this is your app's bundle ID in the format of . e.g. `com.ensembleui.myfirstapp` (all lowercase, no special characters).
* Run `flutter pub upgrade`. Run this occasionally when the Ensemble framework has been updated.
* Run `flutter create --org com.ensembleui --project-name starter --platform=ios,android .` (note the period at the end). If you modified the appId, make sure the org and project name match the bundle ID.
* Run the App with `flutter run`. If you currently have a running iOS or Android emulator, the command will prompt for a selection, otherwise the App will be opened in the web browser.
