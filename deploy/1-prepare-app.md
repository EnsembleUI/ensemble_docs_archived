# Preparing your App for deployment

Once you have built, previewed and tested your Ensemble app, follow these documentation to deploy it to the iOS and Google Play Store.

### Prerequisites
* Your Ensemble App ID. From [Ensemble Studio](https://studio.ensembleui.com), go to your App's Settings screen to retrieve the App ID.

### Download the Ensemble Starter
* Clone the Starter App `git clone https://github.com/EnsembleUI/ensemble_starter my_first_app` into the folder *my_first_app*. You may change the name, but don't use camelCase (e.g. myFirstApp) or dash (-) as the separators.
* Go into this folder, and open the file `/ensemble/ensemble-config.yaml`. Enter your Ensemble App ID under `definitions > ensemble > appId`.
* Install [Flutter](https://docs.flutter.dev/get-started/install) on your machine, then go to the next steps for iOS/Android deployment.


