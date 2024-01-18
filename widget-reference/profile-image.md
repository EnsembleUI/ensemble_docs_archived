# Profile Image Widget

The `ProfileImageWithIndicator` widget in Ensemble offers a convenient way to showcase user profile images along with customizable indicator labels.

**Input Parameters**
Required:
1. `image`: URL of profile image to be displayed

Optional:
1. `label`: Content within floating label
2. `labelPosition`: Position of the label, default is topRight. Possible values are topLeft, topCenter, topRight, centerLeft, center, centerRight, bottomLeft, bottomCenter, bottomRight
3. `imageSize`: Image size, default is 90
4. `labelColor`: Color used for the label, default is white
5. `labelBackgroundColor`: Color used for the label background, default is blue

By using these Input Parameters, you can effortlessly create various profile images tailored to your app's design. Below is an example of how to use the public widget `ensemble.ProfileImageWithIndicator`:
```yaml
- ensemble.ProfileImageWithIndicator:
    inputs: 
        label: 4
        image: https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2
        imageSize: 160
        labelSize: 40
        labelPosition: bottomRight
        labelColor: blue
        labelBackgroundColor: 0xFFDEDEDE
```
Since this widget is globally available, you only need to specify the image input. The example above also showcases optional input parameters for further customization. Simply use `ensemble.ProfileImageWithIndicator` in your app to streamline the integration of profile images with indicator labels.