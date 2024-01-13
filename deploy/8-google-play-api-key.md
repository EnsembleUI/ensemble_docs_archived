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

4. **Navigate to Credentials:**
    - In the left panel, click on `Credentials`.

5. **Create Service Account:**
    - Click on `+ Create Credentials` at the top, then select `Service Account`.
    - Provide a name for the service account (memorable for identification).
    - Click `Create and Continue`.

6. **Define Role:**
    - Choose the role as `Service Account User`.
    - Click `Done` to create the API Key.

7. **Copy Email Address:**
    - Copy the email address of the created key (will be needed later).

8. **Manage Key:**
    - Click on the edit icon in the Action row, select `Manage Key`.

9. **Generate JSON Key File:**
    - In the `Keys` tab, click on `Add Key`, then `Create new key`.
    - Choose `JSON` and click `Create`.
    - Save the downloaded `.json` file securely.

**Note:** This key needs to be linked to Google Play Console before use.

10. **Link Key to Google Play Console:**
    - Open [Google Play Console](https://play.google.com/console/) and go to `Users and Permissions` in the sidebar.

11. **Invite New Users:**
    - Click on `Invite New Users` and paste the email address saved in step 7.

12. **Set App Permissions:**
    - In the App Permissions tab, select the apps for direct upload using the build system.

13. **Configure Account Permissions:**
    - In the `Account Permissions` tab, check relevant options under `App Access` and `Releases`.

14. **Send Invite:**
    - Click on `Invite User`, then `Send Invite` to link the generated key with the apps successfully.

Follow these steps diligently to ensure a hassle-free setup of your Google Play Console API Key.
