# ensemble.RatingStars widget

The `ensemble.RatingStars` widget in Ensemble provides an intuitive solution for displaying star ratings with customizable attributes. It is fixed at 5 stars.


[Kitchen Sink example](https://studio.ensembleui.com/app/e24402cb-75e2-404c-866c-29e6c3dd7992/screen/Ywo5qN6fAbx0pC3l5aLZ)


**Input Parameters**
Required:
1. `rating`: An integer or double between 1 and 5, indicating the number of stars to be filled

Optional:
1. `starColor`: The color used to fill the stars, default is 0xFFF5970A
2. `starBackgroundColor`: The color used as the background of the box containing each star, default is 0xFFFFFAEB
3. `size`: An integer to set the size of each star, default is 16
4. `starGaps`: An integer to set the gap between stars, default is 4
5. `starPadding`: An integer to set the padding for each star, default is 2
6. `starBorderRadius`: An integer to set the gap between stars, default is 2

By utilizing these Input Parameters, you can customize the appearance of the rating stars by adjusting these parameters tailored to your app's design. Below is an example of how to use the public widget `RatingStars`:
```yaml
- ensemble.RatingStars:
    inputs: 
      rating: 3
      size: 24
      starColor: white
      starBackgroundColor: red
```
Since this widget is globally available, you only need to specify the rating input. The example above also showcases optional input parameters for further customization. Incorporate the `ensemble.RatingStars` widget in your app to enhance the visual representation of rating stars.
