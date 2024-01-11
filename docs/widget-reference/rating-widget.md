# Rating Stars widget

The `RatingStars` widget in Ensemble provides an intuitive solution for displaying star ratings with customizable attributes.

**Input Parameters**
Required:
1. `rating`: An integer or double between 1 and 5, indicating the number of stars to be filled

Optional:
1. `starColor`: The color used to fill the stars
2. `starBackgroundColor`: The color used as the background of the box containing each star
3. `size`: An integer to set the size of each star, default is 16

By utilizing these Input Parameters, you can customize the appearance of the rating stars by adjusting these parameters tailored to your app's design. Below is an example of how to use the public widget `RatingStars`:
```yaml
- RatingStars:
    inputs: 
      rating: 3
      size: 24
      starColor: white
      starBackgroundColor: red
```
Since this widget is globally available, you only need to specify the rating input. The example above also showcases optional input parameters for further customization. Incorporate the `RatingStars` widget in your app to enhance the visual representation of rating stars.