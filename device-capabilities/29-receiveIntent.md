# Action: receiveIntent

A ```receiveIntent``` action enables ensemble apps to receive sharing photos, videos, text, urls or any other file types from another app.

## Integration
### Android

Add the following filters to your AndroidManifest.xml file

```xml
<manifest xmlns:android="http://schemas.android.com/apk/res/android"
.....
 <uses-permission android:name="android.permission.READ_EXTERNAL_STORAGE"/>

  <application
        android:name="io.flutter.app.FlutterApplication"
        ...
        >
<!--Set activity launchMode to singleTask, if you want to prevent creating new activity instance everytime there is a new intent.-->
    <activity
            android:name=".MainActivity"
            android:launchMode="singleTask"
            android:theme="@style/LaunchTheme"
            android:configChanges="orientation|keyboardHidden|keyboard|screenSize|locale|layoutDirection|fontScale|screenLayout|density|uiMode"
            android:hardwareAccelerated="true"
            android:windowSoftInputMode="adjustResize">

            <!--TODO:  Add this filter, if you want support opening urls into your app-->
            <intent-filter>
               <action android:name="android.intent.action.VIEW" />
               <category android:name="android.intent.category.DEFAULT" />
               <category android:name="android.intent.category.BROWSABLE" />
               <data
                   android:scheme="https"
                   android:host="example.com"
                   android:pathPrefix="/invite"/>
            </intent-filter>

            <!--TODO:  Add this filter, if you want support opening files into your app-->
            <intent-filter>
              <action android:name="android.intent.action.VIEW" />
              <category android:name="android.intent.category.DEFAULT" />
              <data
                   android:mimeType="*/*"
                   android:scheme="content" />
            </intent-filter>

             <!--TODO: Add this filter, if you want to support sharing text into your app-->
            <intent-filter>
               <action android:name="android.intent.action.SEND" />
               <category android:name="android.intent.category.DEFAULT" />
               <data android:mimeType="text/*" />
            </intent-filter>

            <!--TODO: Add this filter, if you want to support sharing images into your app-->
            <intent-filter>
                <action android:name="android.intent.action.SEND" />
                <category android:name="android.intent.category.DEFAULT" />
                <data android:mimeType="image/*" />
            </intent-filter>

            <intent-filter>
                <action android:name="android.intent.action.SEND_MULTIPLE" />
                <category android:name="android.intent.category.DEFAULT" />
                <data android:mimeType="image/*" />
            </intent-filter>

             <!--TODO: Add this filter, if you want to support sharing videos into your app-->
            <intent-filter>
                <action android:name="android.intent.action.SEND" />
                <category android:name="android.intent.category.DEFAULT" />
                <data android:mimeType="video/*" />
            </intent-filter>
            <intent-filter>
                <action android:name="android.intent.action.SEND_MULTIPLE" />
                <category android:name="android.intent.category.DEFAULT" />
                <data android:mimeType="video/*" />
            </intent-filter>

            <!--TODO: Add this filter, if you want to support sharing any type of files-->
            <intent-filter>
                <action android:name="android.intent.action.SEND" />
                <category android:name="android.intent.category.DEFAULT" />
                <data android:mimeType="*/*" />
            </intent-filter>
            <intent-filter>
                <action android:name="android.intent.action.SEND_MULTIPLE" />
                <category android:name="android.intent.category.DEFAULT" />
                <data android:mimeType="*/*" />
            </intent-filter>
      </activity>

  </application>
</manifest>
....
```

### iOS

#### 1. Create Share Extension

- Using Xcode, go to File/New/Target and Choose "Share Extension".
- Give it a name, i.e., "Share Extension".

Make sure the deployment target for Runner.app and the share extension is the same.

#### 2. Replace your ```ios/Share Extension/Info.plist``` with the following:

```xml
<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE plist PUBLIC "-//Apple//DTD PLIST 1.0//EN" "http://www.apple.com/DTDs/PropertyList-1.0.dtd">
<plist version="1.0">
  <dict>
    <key>AppGroupId</key>
    <string>$(CUSTOM_GROUP_ID)</string>
	<key>CFBundleVersion</key>
	<string>$(FLUTTER_BUILD_NUMBER)</string>
	<key>NSExtension</key>
	<dict>
		<key>NSExtensionAttributes</key>
        <dict>
            <key>PHSupportedMediaTypes</key>
               <array>
                    <!--TODO: Add this flag, if you want to support sharing video into your app-->
                   <string>Video</string>
                   <!--TODO: Add this flag, if you want to support sharing images into your app-->
                   <string>Image</string>
               </array>
            <key>NSExtensionActivationRule</key>
            <dict>
                <!--TODO: Add this flag, if you want to support sharing text into your app-->
                <key>NSExtensionActivationSupportsText</key>
                <true/>
                <!--TODO: Add this tag, if you want to support sharing urls into your app-->
            	<key>NSExtensionActivationSupportsWebURLWithMaxCount</key>
            	<integer>1</integer>
            	<!--TODO: Add this flag, if you want to support sharing images into your app-->
                <key>NSExtensionActivationSupportsImageWithMaxCount</key>
                <integer>100</integer>
                <!--TODO: Add this flag, if you want to support sharing video into your app-->
                <key>NSExtensionActivationSupportsMovieWithMaxCount</key>
                <integer>100</integer>
                <!--TODO: Add this flag, if you want to support sharing other files into your app-->
                <!--Change the integer to however many files you want to be able to share at a time-->
				<key>NSExtensionActivationSupportsFileWithMaxCount</key>
				<integer>1</integer>
            </dict>
        </dict>
		<key>NSExtensionMainStoryboard</key>
		<string>MainInterface</string>
		<key>NSExtensionPointIdentifier</key>
		<string>com.apple.share-services</string>
	</dict>
  </dict>
</plist>
```
#### 3. Add the following to your ```ios/Runner/Info.plist```:

```xml
...
<key>AppGroupId</key>
<string>$(CUSTOM_GROUP_ID)</string>
<key>CFBundleURLTypes</key>
	<array>
		<dict>
			<key>CFBundleTypeRole</key>
			<string>Editor</string>
			<key>CFBundleURLSchemes</key>
			<array>
				<string>ShareMedia-$(PRODUCT_BUNDLE_IDENTIFIER)</string>
			</array>
		</dict>
	</array>

<key>NSPhotoLibraryUsageDescription</key>
<string>To upload photos, please allow permission to access your photo library.</string>
...
```

#### 4. Add the following to your ```ios/Runner/Runner.entitlements```:


```xml
....
    <!--TODO:  Add this tag, if you want support opening urls into your app-->
    <key>com.apple.developer.associated-domains</key>
    <array>
        <string>applinks:example.com</string>
    </array>
....
```


#### 5. Add the following to your ```ios/Podfile```:
```ruby
...
target 'Runner' do
  use_frameworks!
  use_modular_headers!

  flutter_install_all_ios_pods File.dirname(File.realpath(__FILE__))

  # Share Extension is name of Extension which you created which is in this case 'Share Extension'
  target 'Share Extension' do
    inherit! :search_paths
  end
end
...
```

#### 6. Add Runner and Share Extension in the same group

* Go to `Signing & Capabilities` tab and add App Groups capability in **BOTH** Targets: `Runner` and `Share Extension` 
* Add a new container with the name of your choice. For example `group.MyContainer` in the example project its `group.com.ensembleui.go`
* Add User-defined(`Build Settings -> +`) string `CUSTOM_GROUP_ID` in **BOTH** Targets: `Runner` and `Share Extension` and set value to group id created above. You can use different group ids depends on your flavor schemes

#### 7. Go to Build Phases of your Runner target and move `Embed Foundation Extension` to the top of `Thin Binary`. 


#### 8. Make your `ShareViewController`  (ios/Share Extension/ShareViewController.swift) inherit from `RSIShareViewController`:


```swift
// If you get no such module 'receive_sharing_intent' error. 
// Go to Build Phases of your Runner target and
// move `Embed Foundation Extension` to the top of `Thin Binary`. 
import receive_sharing_intent

class ShareViewController: RSIShareViewController {
      
    // Use this method to return false if you don't want to redirect to host app automatically.
    // Default is true
    override func shouldAutoRedirect() -> Bool {
        return false
    }
    
}
```

#### Compiling issues and their fixes

* Error: No such module 'receive_sharing_intent'
  * Fix: Go to Build Phases of your Runner target and move `Embed Foundation Extension` to the top of `Thin Binary`.
  
* Error: App does not build after adding Share Extension?
  * Fix: Check Build Settings of your share extension and remove everything that tries to import Cocoapods from your main project. i.e. remove everything under `Linking/Other Linker Flags` 

* You might need to disable bitcode for the extension target

* Error: Invalid Bundle. The bundle at 'Runner.app/Plugins/Sharing Extension.appex' contains disallowed file 'Frameworks'
    * Fix: https://stackoverflow.com/a/25789145/2061365



## EDL Example

```yaml
View:
  header:
    title: Receive Intent
  styles:
    scrollableView: true
  onLoad:
    receiveIntent:
      onReceive: |
        //@code
        if (event.data.media.length != 0) {
          var myJSON = JSON.stringify(event.data.media[0]);
          var mediaItem = JSON.parse(myJSON);
          console.log("Type: "+mediaItem.type);
          console.log("MimeType: "+mediaItem.mimeType);
          console.log("Data: "+mediaItem.data);
          console.log("Thumbnail: "+mediaItem.thumbnail);

          if (mediaItem.type == 'text') {
            textId.text = mediaItem.data;
          } else if (mediaItem.type == 'image') {
              imageId.source = mediaItem.data;
          }
        }
      onError: |
        //@code
        console.log("Something went wrong");
  body:
    Column:
      styles: { gap: 24, padding: 24 }
      children:
        - WarningNote:
            inputs:
              message: This action will work only in Android physical device/simulator.

        - Markdown:
            text: |
              ## Receive Intent

              Get datas such as text, images, videos from other apps.

              Received data can be accessed using ```event.data.medias```

        - Text:
            styles:
              textStyle: { fontWeight: bold, fontSize: 18 }
            text: Text will appear here

        - Text:
            id: textId
            styles:
              textStyle: { fontWeight: bold, fontSize: 25, color: green }
            text: I am going to change

        - Divider:

        - Text:
            styles:
              textStyle: { fontWeight: bold, fontSize: 18 }
            text: Apple Logo will change to the received Image

        - Image:
            id: imageId
            styles: { height: 250, width: 250, borderWidth: 1, fit: cover }
            source: https://phoenixcellular.com/wp-content/uploads/2022/09/overview__bcphzsdb4fpu_og.png

```

