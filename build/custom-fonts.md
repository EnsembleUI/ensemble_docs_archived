# Using Custom Fonts

Ensemble supports Google Fonts, but you also have the option to use your own custom fonts when deploying your app with [Ensemble Starter](https://docs.ensembleui.com/#/deploy/1-prepare-app).

###
- From the root directory of Ensemble Starter, open `pubspec.yaml`.
- Under `flutter > fonts`, add your font entry in the following format:
```
  - family: <fontName>
    fonts:
      - asset: assets/fonts/...
        weight: <optional - if you have different font weight>
        style:  <optional - if you have an italic font>
```
- Add your fonts under the directory specified above (e.g. assets/fonts/).
- In your definitions, you may now reference the font specified here using `fontFamily`.
```
Text:
  text: Hello world
  styles:
    textStyle:
      fontFamily: <fontName>
```