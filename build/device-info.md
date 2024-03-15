# Device information

You have access to the following properties of the device.

## device.platform

Returns the device platform, such as `web`, `ios`, `android`, `windows`, and `mac`.

```yaml
View:
  body:
    Text:
      text: ${device.platform}
```



## device.width and device.height

Returns the device platform, such as `web`, `ios`, `android`, `windows`, and `mac`.

```yaml
View:
  body:
    Text:
      text: Current device is ${device.height} by ${device.width}
```

## Safe area

A safe area defines the area within a view that isn’t covered by a navigation bar, tab bar, toolbar, etc. Safe areas are essential for avoiding a device’s interactive and display features, like the Dynamic Island on iPhone. 

[See Apple Guidelines](https://developer.apple.com/design/human-interface-guidelines/layout)

[Android Guidelines](https://developer.android.com/develop/ui/views/layout/display-cutout)

It is only relevant if your view does not have a `header` and uses `useSafeAra: false`.


```yaml
View:
  styles:
    useSafeArea: false

  body:
    Column:
      styles:
        padding: 40
      children:
        - Text:
            text: Size of top area used by device is ${device.safeAreaTop}
        - Text:
            text: Size of bottom area used by device is ${device.safeAreaBottom}
```
