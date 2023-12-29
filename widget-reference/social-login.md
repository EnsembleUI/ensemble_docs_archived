# Social Login Button Widget

The SocialLoginButton widget in Ensemble provides a seamless integration for adding social login functionality to your app with customizable options.

**Input Parameters**
Required:
1. `provider`: Provider name which can be of: google, facebook, apple, microsoft

Optional:
1. `label`: The text used inside the button

By leveraging these input parameters, you can tailor the appearance of the social login button to seamlessly align with your app's design. Below is an example demonstrating the usage of the public widget `ensemble.SocialLoginButton`:
```yaml
- ensemble.SocialLoginButton:
    inputs:
        provider: microsoft
        label: Sign in with Microsoft
```
Since this widget is globally available, you only need to specify the provider input. The example above also showcases optional input parameters for further customization. Integrate the `ensemble.SocialLoginButton` widget into your app effortlessly for the social login functionality.