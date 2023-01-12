# Preparing your App for deployment

Once you have built, previewed and tested your Ensemble app, follow these instructions to deploy it to any iOS or Android devices, or to submit it to the Apple AppStore or Google Play Store.

### Prerequisites
* Your Ensemble App ID. From [Ensemble Studio](https://studio.ensembleui.com), go to your App's Settings screen to retrieve the App ID.

### Download Ensemble Starter
Ensemble Starter is our packaging solution, enabling you to connect to your Ensemble app, package it, and deploy to an iOS or Android device.   
* Clone the Starter App `git clone https://github.com/EnsembleUI/ensemble_starter my_first_app` into the folder *my_first_app*. You may change the name, but don't use camelCase (e.g. myFirstApp) or dash (-) as the separators.
* Go into this folder, and open the file `/ensemble/ensemble-config.yaml`. Enter your Ensemble App ID under `definitions > ensemble > appId`.
* Run `flutter create --platforms=ios,android .` (note the period at the end).

### Requesting permissions from your end-users
If your app requires capabilities like location, camera, ..., you will need to enter a reason per capability. These reasons will be prompted to the end users, who can decide whether to grant or deny your requests.
* For iOS, edit `<my_first_app>/ios/Runner/Info.plist` and add the below permissions as the direct children of the `<dict>` tag.
* For Android, edit `<my_first_app>/android/app/src/main/AndroidManifest.xml` and add the below permissions as the direct children of the `<manifest>` tag.

Below are the snippet per capability to insert for iOS and Android respectively.

**Location**
```xml
<key>NSLocationWhenInUseUsageDescription</key>
<string>e.g. This app needs access to your location to ....</string>
```
```xml
<!-- accuracy equivalent to a city block -->
<uses-permission android:name="android.permission.ACCESS_COARSE_LOCATION" />

<!-- or request more accurate location -->
<uses-permission android:name="android.permission.ACCESS_FINE_LOCATION" />
```

**Camera**
```xml
<key>NSCameraUsageDescription</key>
<string>e.g. your reason for requesting camera access</string>

<key>NSMicrophoneUsageDescription</key>
<string>e.g. your reason for requesting microphone access</string>
```

### Next Steps
* Install [Flutter](https://docs.flutter.dev/get-started/install) on your machine, then go to the next steps for iOS/Android deployment.


