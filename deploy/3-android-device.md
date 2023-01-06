# Deploy to Android devices

* Make sure you completed the [Preparing your App](/deploy/1-prepare-app.md) step, then navigate to the folder created (e.g. my_first_app).
* Run `flutter create --platforms=android .` (note the period at the end)
* Run `flutter build apk --split-per-abi --no-tree-shake-icons` to build the APKs (destination is /build/app/outputs/flutter-apk/).
* Connect your Android device to your computer, then run `adb install build/app/outputs/flutter-apk/app.apk`.
  * Note: you may need to select the right APK depending on your device (e.g. ARM vs x86).


### Customizing your App
* Play Store requires each app to have a unique app ID, which cannot be changed after your submit your App.
  * To update the app ID, open `/android/app/build.gradle`. Go to `android > defaultConfig > applicationId` and update the value.
  * Remove `/android/app/src/main/AndroidManifest.xml`.
  * Run `flutter create --platforms=android .`.
* To update the app's name. Open `/android/app/src/main/AndroidManifest.xml` and change the `android:label=` to the app name.