# Use device's camera for updating profile picture

This guide shows the typical interaction for updating a user's profile picture in a native app, where user can take a photo or pick an existing image from device's gallery. To see the full example in Ensemble Studio, [click here](https://studio.ensembleui.com/app/nWsD5baeykm3W772kkSw/screen/P2v4AOS8w3DXfUauqi0Q).

Here's the experience we'll work toward:

<div style="position: relative; height: 640px; width: 280px"><iframe src="https://demo.arcade.software/YDZArv16EF5lLUvVjTeb?embed" title="Arcade Flow (Wed Jan 03 2024)" frameborder="0" loading="lazy" webkitallowfullscreen mozallowfullscreen allowfullscreen style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;color-scheme: light;"></iframe></div>

## 1. Display user image with an icon

First, call the API that return's user image and pass the value to the Avatar widget. Using styles properties, we can display the avatar as a circle with a border.

```yaml
View:
  onLoad:
    invokeAPI:
      name: getUser

  body:
    Column:
      styles:
        mainAxis: center
      children:
        - Avatar:
            source: ${getUser.body.results[0].picture.large}
            styles:
              height: 100
              width: 100
              borderRadius: 100
              borderColor: blue
              borderWidth: 2
              margin: 2

API:
  getUser:
    uri: https://randomuser.me/api/?nat=us&randomapi
    method: GET
```


To display an icon on top of the avatar, we use a the Stack widget and pass these children, in this order:

1. Avatar
2. Icon

The Stack widget renders each child on top of the previous one. By setting `styles.alignChildren` to `bottomRight`, we can achive the following:

<img src="/images/profile-photo-1.png">


```yaml
        - Stack:
            styles:
              alignChildren: bottomRight
            children:
              - Avatar:
                  source: ${getUser.body.results[0].picture.large}
                  styles:
                    height: 100
                    width: 100
                    borderRadius: 100
                    borderColor: blue
                    borderWidth: 2
                    margin: 2
              - Icon:
                  name: camera_line
                  library: remix
                  styles:
                    size: 20
                    backgroundColor: white
                    color: blue
                    padding: 4
                    borderColor: blue
                    borderRadius: 200
                    borderWidth: 2
```


## 2. onTap, display a bottom sheet

When user taps the profile image, we want to display a bottom sheet with two buttons:

<div style="position: relative; height: 500px; width: 280px"><iframe src="https://demo.arcade.software/klblt8altkrLUAxoGEhi?embed" title="studio.ensembleui.com/preview/index.html?appId=nWsD5baeykm3W772kkSw&amp;screenId=P2v4AOS8w3DXfUauqi0Q&amp;showAction=false&amp;devicePreview=true&amp;instantPreview=true" frameborder="0" loading="lazy" webkitallowfullscreen mozallowfullscreen allowfullscreen style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;color-scheme: light;"></iframe></div>

To achieve the above, first wrap the Stack widget inside a Column widget so we can add an onTop to the Column. onTap, we use `showBottomModal` action to open a bottom sheet:

```yaml
View:
  onLoad:
    invokeAPI:
      name: getUser
  body:
    Column:
      styles:
        mainAxis: center
        crossAxis: stretch
      children:
        - Column:
            styles:
              crossAxis: center
            onTap:
              showBottomModal:
                widget: ProfilePhotoOptions
                options:
                  enableDrag: false
            children:
              - Stack:
                # ...
```

Note that we're passing a widget named `ProfilePhotoOptions` to be rendered inside the bottom sheet.

## 3. Add buttons to the bottom sheet

Let's define the ProfilePhotoOptions widget, which includes two buttons:

```yaml
ProfilePhotoOptions:
  body:
    Column:
      styles:
        crossAxis: stretch
        mainAxisSize: min
        gap: 24
        padding: 24 24 ${device.safeAreaBottom} 24
      children:
        - Button:
            label: Take photo
        - Button:
            label: Pick from gallery

```

Note a few styling configurations:

1. Buttons are placed inside a Column with `crossAxis: stretch`. This ensures the buttons width will stretch across the screen.
2. This Column also includes `mainAxisSize: min` to ensure the column just takes the space required by the children.
3. For padding, we use 24 on top, right, and left. For bottom padding, we use `${device.safeAreaBottom}` so that depending on the device, enough space is added to the bottom of the column.


## 4. Add action to Take Photo buttom

Here, we use the `openCamera` action with following configurations:

```yaml
        - Button:
            label: Take photo
            onTap:
              openCamera:
                id: profilePhoto
                options:
                  default: true
                  allowGalleryPicker: true
                  allowCameraRotate: true
                  allowFlashControl: true
                  enableMicrophone: false
                  preview: false
                  maxCount: 1
                  mode: photo
                onComplete:
                  # Either upload the photo, or navigate to a screen where user can crop the photo
                  # for both options, use the id of the action to access the file: ${profilePhoto.files[0].path}
                  # navigateScreen:
                  #   name: ProfileImageCropper
                  #   inputs:
                  #     newProfileImage: ${profilePhoto.files[0].path}
```

This configuration uses the device's native camera functionality, and limits it to one image.


## 5. Add action to Pick from Gallery buttom

Here, we use the `pickFiles` action with following configurations:

```yaml
        - Button:
            label: Pick from gallery
            styles:
              height: 50
            onTap:
              pickFiles:
                source: gallery
                id: filepicker
                allowMultiple: false
                allowedExtensions:
                  - png
                  - jpeg
                  - jpg
                onComplete:
                  # TODO - you can either use the selected photo, or navigate to a screen where user can crop the photo
                  # navigateScreen:
                  #   name: ProfileImageCropper
                  #   inputs:
                  #     newProfileImage: ${filepicker.files[0].path}

```

This configuration uses the device's native gallery, and limits it to one image.

----


To see the full example in Ensemble Studio, [click here](https://studio.ensembleui.com/app/nWsD5baeykm3W772kkSw/screen/P2v4AOS8w3DXfUauqi0Q).