# Action: getLocation

getLocation action enables users to retrieve their device's current location, facilitating location-based functionalities within the app, such as mapping, navigation, or personalized content delivery, enhancing user experience and context-aware interactions. It requests user's permission to get his/her current location

### Module (ensemble_location)
Enable Location service in Ensemble code

By default, Ensemble does not include the location module to avoid installing unnecessary packages. Here, we uncomment a few lines of code to get the necessary packages.

Inside the directory where you cloned Ensemble Starter, open `/lib/generated/ensemble_modules.dart`.

* Search for this line and uncomment it:
```
// import 'package:ensemble_location/location_manager.dart';
```

* Search for this line and uncomment it:
```
      // GetIt.I.registerSingleton<LocationManager>(LocationManagerImpl());
```

* Search for this line and set it to true
```
  static const useLocation = false;
```

---

### Properties

| Property           | Type   | Description                                                                                           |
| :----------------- | :----- | :---------------------------------------------------------------------------------------------------- |
| options            | object | [see properties](#propertiesoptions)                                                                  |
| onLocationReceived | action | Callback Action once we get the device location                                                       |
| onError            | action | Callback Action if we are unable to get the device location. Reason is available under 'reason' field |

#### properties.options

| Property                | Type    | Description                                                                                                                                                                                                  |
| :---------------------- | :------ | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| recurring               | boolean | Whether to continuously get the device location on this screen. Note that a screen can only have one recurring location listener. Adding multiple recurring location listeners will cancel the previous one. |
| recurringDistanceFilter | integer | If recurring, the minimum distance (in meters) the device has moved before new location is returned. (default: 1000 meters, minimum: 50 meters)                                                              |

**Example**

<div class="code-container" markdown=1>
  <button onclick="copyCode()" class="copy-code-button">Copy Code</button>

```yaml
View:
  # Optional - style the screen
  styles:
    scrollableView: true

  # Optional - set the header for the screen
  header:
    title: "Action: getLocation"

  # Specify the body of the screen
  body:
    Column:
      styles:
        padding: 24
        gap: 8
      children:
        - Text:
            text: Get location via Action
            styles:
              font: subtitle
        - Markdown:
            text: Use `getLocation` Action to get the location, with the option to continuously get location change updates.
        - Button:
            label: Listen for location changes
            onTap:
              getLocation:
                options:
                  recurring: true # while on this page, location changes will continue to execute onLocationReceived
                  recurringDistanceFilter: 50 # only dispatch if the new location is more than 50 meters away from the previous location
                onLocationReceived: |-
                  //@code
                  status.text = 'Lat: ' + latitude + ', Lng: ' + longitude;
                onError: |-
                  //@code
                  status.text = reason;
        - Text:
            id: status
```

</div>

complete example [here](https://studio.ensembleui.com/app/e24402cb-75e2-404c-866c-29e6c3dd7992/screen/uH9b2ZnmSS3HT7BsECu4?propertyPanelEnabled=true&instantPreviewDisabled=false&editorV2Enabled=true)
