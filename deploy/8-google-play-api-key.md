# Guide: Generating Google Play Console API Key

## Overview

This guide outlines the steps to generate a Google Play Console API Key, enabling seamless deployment of APKs or App Bundles directly to the Google Play Store. Make sure to follow these steps sequentially for a smooth process.

**Note:** Before using the Google API for direct app uploads, you must manually upload at least one build to Google Play Console. However, the build system can still be used to obtain the APK/App Bundle for subsequent uploads.

## Steps for Creating Google Play API Key

1. **Log in to Google Cloud Console:**
    - Open [Google Cloud Console](https://console.cloud.google.com/).
    - Ensure you are logged in with the same account as your Google Play Console.
    - If needed, switch accounts by clicking on the avatar.

2. **Select Google Play Console Developer:**
    - Confirm that your account is set to `Google Play Console Developer` in the dropdown menu (located right of the Google Cloud Console logo).

3. **Access APIs & Services:**
    - Select `APIs & Services` from Quick Access. If not visible, use the search bar in the top center.

![Google Cloud Console Home screen](https://github.com/EnsembleUI/ensemble_docs/assets/46677360/b88f2d9e-8959-4c03-aa3d-b30b3aac56da)

4. **Navigate to Credentials:**
    - In the left panel, click on `Credentials`.

5. **Create Service Account:**
    - Click on `+ Create Credentials` at the top, then select `Service Account`.
    - Provide a name for the service account (memorable for identification).
    - Click `Create and Continue`.

![Add Credentials](https://github.com/EnsembleUI/ensemble_docs/assets/46677360/2f64dff5-5657-40dd-9461-e79eb5ccb6aa)

6. **Define Role:**
    - Choose the role as `Service Account User`.
    - Click `Done` to create the API Key.

![Select adequate role](https://github.com/EnsembleUI/ensemble_docs/assets/46677360/81cb60a6-acac-41d4-b18b-53faceaa2bd6)

7. **Copy Email Address:**
    - Copy the email address of the created key (will be needed later).

8. **Manage Key:**
    - Click on the edit icon in the Action row, select `Manage Key`.

![Manage Key](https://github.com/EnsembleUI/ensemble_docs/assets/46677360/da4986fe-311c-4080-87cc-240b119fbce2)

9. **Generate JSON Key File:**
    - In the `Keys` tab, click on `Add Key`, then `Create new key`.
    - Choose `JSON` and click `Create`.
    - Save the downloaded `.json` file securely.

![Download json key](https://github.com/EnsembleUI/ensemble_docs/assets/46677360/0cede178-01ac-4fe8-841d-25e59067f9ec)

**Note:** This key needs to be linked to Google Play Console before use.

10. **Link Key to Google Play Console:**
    - Open [Google Play Console](https://play.google.com/console/) and go to `Users and Permissions` in the sidebar.

11. **Invite New Users:**
    - Click on `Invite New Users` and paste the email address saved in step 7.

![Invite new user](https://github.com/EnsembleUI/ensemble_docs/assets/46677360/bd4df269-e351-4dad-a82d-acb45bc99801)

12. **Set App Permissions:**
    - In the App Permissions tab, select the apps for direct upload using the build system.

![App Permissions](https://github.com/EnsembleUI/ensemble_docs/assets/46677360/e2294e7f-01e2-4223-a378-9851fc34b1fe)

13. **Configure Account Permissions:**
    - In the `Account Permissions` tab, check relevant options under `App Access` and `Releases`.

![Account permissions 1](https://github.com/EnsembleUI/ensemble_docs/assets/46677360/41ae9244-7dd3-4ba5-b7bf-26068bd85ac7)
![Account permissions 2](https://github.com/EnsembleUI/ensemble_docs/assets/46677360/5fd3b828-cfd9-4be8-9b21-54125c38a09e)

14. **Send Invite:**
    - Click on `Invite User`, then `Send Invite` to link the generated key with the apps successfully.

Follow these steps diligently to ensure a hassle-free setup of your Google Play Console API Key.
