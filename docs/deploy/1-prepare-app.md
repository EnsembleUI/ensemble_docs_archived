# Preparing your App for deployment

Once you have built your UI with Ensemble and used it to build your app and are ready to take it to production, follow these instructions to deploy it to any iOS or Android devices, or to submit it to the Apple AppStore or Google Play Store.

### Prerequisites
* Your Ensemble App ID. From [Ensemble Studio](https://studio.ensembleui.com), go to your App's Settings screen to retrieve the App ID. 

### Download Ensemble Starter
Ensemble Starter is our packaging solution, enabling you to connect to your Ensemble UI and package it. 
* Clone the Starter App `git clone https://github.com/EnsembleUI/starter my_first_app` into the folder *my_first_app*. You may change the name, but don't use camelCase (e.g. myFirstApp) or dash (-) as the separators.
* Follow the README in this repo.

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

**Camera**
```xml
<key>NSCameraUsageDescription</key>
<string>e.g. your reason for requesting camera access</string>

<key>NSMicrophoneUsageDescription</key>
<string>e.g. your reason for requesting microphone access</string>
```


