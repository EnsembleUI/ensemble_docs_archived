# Setup Deferred Deeplink
In this guide, we'll integrate the deferred deep linking for the Android and iOS Apps. There are some service providers like branch, appsflyer, etc for deferred deep linking.

*NOTE: Currently, we support only the BranchIO as of now.*

## BranchIO (http://branch.io)
For Detailed Doc - https://help.branch.io/developers-hub/docs

####  Configure Branch Dashboard
1. Go to Configuration -> General
2. Setup Default URL
3. Android Redirects
    - Android URI Scheme
    - Google Play Search or Custom URL
    - SHA 256 Certificate Fingerprints
    - Additional Settings
4. iOS Redirects
    - iOS URI Scheme
    - Apple Store Search or Custom URL
    - Enable Universal Links (BundleID, Apple App Prefix)
    - Additional Settings

#### Configure Native Platforms
1. Android
    - Add Branch to your AndroidManifest.xml
    - Add Branch App Links (Test and Live)
    - Add Branch Keys (Test and Live)

2. iOS
    - Configure Bundle ID
    - Add associated domains from branch dashboard's Link Domain section of the configuration page to the iOS project "Signing & Capabilities" associated domain
    - Configure Info.plist for adding branch keys (Test and Live) and Links (Test and Live)
    - Add Custom URL Scheme in the URL types of Info.plist

### Module (ensemble_deeplink)
Enable Deeplink service in Ensemble code

By default, Ensemble does not include the deeplink module to avoid installing unnecessary packages. Here, we uncomment a few lines of code to get the necessary packages.

Inside the directory where you cloned Ensemble Starter, open `/lib/generated/ensemble_modules.dart`.

* Search for this line and uncomment it:
```
// import 'package:ensemble_deeplink/deferred_link_manager.dart';
```

* Search for this line and uncomment it:
```
      // GetIt.I.registerSingleton<DeferredLinkManager>(DeferredLinkManagerImpl());
```

* Search for this line and set it to true
```
  static const useDeeplink = false;
```

---

#### Initialize Branch SDK
1. In the ensemble project, Initialize your branch SDK using the ```deeplinkInit``` action

```yaml
deeplinkInit:
    provider: branch
    options:
        useTestKey: true
        enableLog: true
        disableTrack: false
    onSuccess: |
        //@code
        console.log("BranchSDK:: initialized successfully");
    onLinkReceived: |
        //@code
        console.log("BranchSDK:: Branch Link Received: " + event.data.link);
    onError: |
        //@code
        console.log("BranchSDK:: Failed to initialize" + event.error);
```

2. Create branch deep link using the ```createDeeplink``` action

```yaml
Button:
    label: Create Branch Link
    onTap:
        createDeeplink:
        provider: branch
        universalProps:
            id: item/12345
            title: My Content Title
            contentDescription: My Content Description
            imageUrl: https://ensembleui.com/mycontent-123.png
            contentSchema: product
        linkProps:
            channel: ensembleui
            feature: Sharing
            campaign: content launch
            stage: New User
            tags: [data, fsdf, sdd]
            controlParams:
                ref: 1234
                name: Ensemble
        onSuccess: |
            //@code
            console.log("BranchSDK:: Link created successfully: " + event.data.result);
        onError: |
            //@code
            console.log("BranchSDK:: Failed to create a link" + event.error);
```