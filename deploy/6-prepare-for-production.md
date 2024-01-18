# Prepare for Production

Now, that you have built and tested an ensemble app, you would like to publish. Before publishing your app, it is recommended to make it production-ready. 

This guide covers covers the following topics.

- **Adding a launcher icons**
- **Adding native splash screen** 

## Adding a launcher icons

Launcher icons are required as the visual representation of the app on the device's home screen and app drawer, helping users quickly identify and launch the app. 

Currently, the Flutter logo serves as the default icon. Let's see how to replace it with your product's logo.

We'll be using a package called fluter launcher icons from [pub.dev](https://pub.dev/packages/flutter_launcher_icons).

- First add the package as dev dependency in `pubspec.yaml`.
```yaml
dev_dependencies:
    flutter_launcher_icons: any
```

- Add launcher icon configuration inside `pubspec.yaml`
```yaml
flutter_icons:
    android: "launcher_icon"
    ios: true
    # Add path to your icon image.
    image_path: "assets/icon/icon.png"
    web:
      generate: true
      image_path: "path/to/image.png"
      background_color: "#hexcode"
      theme_color: "#hexcode"
```

- Run the following command in terminal, to update native launcher icons with above configuration
```bash
flutter pub get
flutter pub run flutter_launcher_icons
```

For more nitty-gritty detail check [flutter_launcher_icons#book-guide](https://pub.dev/packages/flutter_launcher_icons#book-guide)


## Adding Native Splash screen

When launching an app, a splash screen is the initial display that a user sees. By default, a native app shows a white screen, but with a splash screen, you can showcase your brand or product logo, and provide the user with a visual cue that the app is in the process of loading. 

We'll be using a package called fluter native screen from [pub.dev](https://pub.dev/packages/flutter_native_splash).

To add a splash screen to your app, these steps should be followed:

- First add the package as dev dependency in `pubspec.yaml`.
```yaml
dev_dependencies:
    flutter_native_splash: any
```

- Add splash screen configuration inside `pubspec.yaml`
```yaml
flutter_native_splash:

    # color or background_image is the only required parameter. 
    # Only one parameter can be used, color and background_image cannot both be set.
    color: "#hexcode"
    #background_image: "assets/background.png"

    # The image parameter allows you to specify an image used in the splash screen.  It must be a
    # png file and should be sized for 4x pixel density.
    #image: assets/splash.png

    # The branding property allows you to specify an image used as branding in the splash screen.
    # It must be a png file. It is supported for Android, iOS and the Web.  For Android 12,
    # see the Android 12 section below.
    #branding: assets/dart.png

    # To position the branding image at the bottom of the screen you can use bottom, bottomRight,
    # and bottomLeft. The default values is bottom if not specified or specified something else.
    #branding_mode: bottom

    # Dark theme parameters, if not set above params will be used.
    #color_dark: "#042a49"
    #background_image_dark: "assets/dark-background.png"
    #image_dark: assets/splash-invert.png
    #branding_dark: assets/dart_dark.png
```

- Run the following command in terminal, to update native slash screen setting with above configuration
```bash
flutter pub get
flutter pub run flutter_native_splash:create
```

Re-run your app and you'll see newly added splash screen. 

For more nitty-gritty detail check [flutter_native_splash#usage](https://pub.dev/packages/flutter_native_splash#usage)
