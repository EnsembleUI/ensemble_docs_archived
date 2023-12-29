# Setup Deeplink

In this guide, we'll integrate the deep linking for the Android and iOS Apps

## Android Setup
1. Create a file named ```assetlinks.json``` and add namespace, package and sha256
2. Upload the ```assetlinks.json``` file to the website (https://example.com/.wellknown/assetlinks.json)
3. Add ```intent-filter with domain, path, scheme,``` etc in the ```activity``` tag of ```AndroidManifest.xml```
4. meta-data ```flutter_deeplinking_enabled``` to the ```activity``` tag
5. To test deep links, Execute the following command in the terminal 

```
adb shell am start -a android.intent.action.VIEW \
-c android.intent.category.BROWSABLE \
-d [https://example.com](https://example.com/)
```

6. Test it in physical device, Send the url to any of the notes app and click the link.

For more info: [Android App Links](https://developer.android.com/training/app-links)

## iOS Setup
1. Add ```Associated Domain``` capability. Prefix the domain with ```applinks:```
2. Create a new file named ```apple-app-site-association``` with no file extension. Add details like appIds (teamId.BundleID), components (url path), etc
3. It must be uploaded in the (https://ensembleui.com/.wellknown/apple-app-site-association), needs to be served with content type (application/json) but without the file extension
4. Add ```FlutterDeepLinkingEnabled``` to the ```Info.plist``` file
5. To test deep links, Use ```xcrun simctl openurl booted [https://example.com/path]```(https://example.com/path)
6. Test it in physical device, Send the url to any of the notes app and click the link

For more info: [iOS Universal Link](https://developer.apple.com/ios/universal-links/)


## For Deferred Deep Linking
Checkout - https://docs.ensembleui.com/#/build/deep-link/deferred-deeplink