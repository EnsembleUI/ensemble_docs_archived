# Making your app work when offline

You can embed your app definition in your build output so that your app works without network connectivity. Note that once you make this change, you will not have the ability to change the app from Ensemble Studio.

## Prerequisites

* You have completed the [Prepare your app for deployment step](/deploy/1-prepare-app).
* You have a text or code editor on your machine. We recommend [VS Code](https://code.visualstudio.com/).

## Step 1. Create a folder for your app

In your local directory where you cloned Ensemble Starter, navigate to `/ensemble/apps` folder. Create a new folder with your desired name, and no spaces.

This name will not be customer-facing.

<img src="/images/local_app_folder.png" alt="Local app folder" height="500"/>

## Step 2. Copy your screen definitions

For each screen you've created in Ensemble Studio, follow these steps:

* Inside the folder you created, create a file with `.yaml` extension, and name the file matching your screen name in Studio. E.g. for a screen named `Home`, create a file named `Home.yaml`.
* Open the local file with your desired code or text editor.
* copy the screen definition from Studio to the local file, and save it.

## Step 3. Copy your theme

If you have added theme configuration in Studio, follow these steps:

* Inside the folder you created, create a file named `theme.ensemble`.
* Go to the theme section in Studio, and copy the theme definition to this file.
* Don't forget to save it!

## Step 4. Update your app to read the definitions locally

In your local directory where you cloned Ensemble Starter, open `/ensemble/ensemble-config.yaml` file with your desired code or text editor.

At the top, set the `from` property to `local`:

```yaml
definitions:
  # where your page definitions are hosted ('local', 'remote' or 'ensemble')
  from: local
```

Then set the `appId` and `appHome` properties under `local`

```yaml
  local:
    path: ensemble/apps/
    appId: myApp   # this is the name of the folder you created in step 1
    appHome: MyHomeScreen # this is the name of the screens that should be rendered first when your app id launched
```

## 5. Rebuild your app

Now you can follow the steps for iOS or Android to build and upload your app to the respective app stores.
