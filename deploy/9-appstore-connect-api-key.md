# Guide: Generating API Key for App Store Connect

## Overview

This guide provides step-by-step instructions on generating an API key for App Store Connect. This key allows you to interact programmatically with App Store Connect which would be required for deploying apps directly to App Store Connect using Build System.

**Note:** Ensure you have the necessary permissions in your App Store Connect account to generate API keys.

## Steps for Creating API Key

1. **Navigate to App Store Connect:**
   - Visit [App Store Connect](https://appstoreconnect.apple.com/).

2. **Log in to Your Account:**
   - Log in with your App Store Connect credentials.

3. **Access API Keys Section:**
   - From the homepage, navigate to the `Users and Access` section.

4. **Select API Keys:**
   - Click on the `Keys` option from top.

5. **Generate a New API Key:**
   - Click on the `+` button.

6. **Fill in the Details:**
   - Provide a name for your API key. It will be useful to identify your key later on.
   - Choose `App Manager` in the access part of the dialog.

7. **Generate the Key:**
   - Click on the `Generate` button to create the API key.

8. **Download and Store the Key:**
   - There will be a `Download` button for the newly generated key. Download the `.p8` file which is the API key.
   - Safely store the key file, as it cannot be downloaded again.

9. **Copy Key ID and Issuer ID:**
   - Copy the `Key ID` for the generated key. Also copy the `Issuer Id` which is present in the top.
   - They both will be required later on in the build system.

Follow these steps to successfully generate an API key for App Store Connect, allowing seamless integration with Build System.
