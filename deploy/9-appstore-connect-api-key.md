# Guide: Generating API Key for App Store Connect

## Overview

This guide provides step-by-step instructions on generating an API key for App Store Connect. This key allows you to interact programmatically with App Store Connect which would be required for deploying apps directly to App Store Connect using Build System.

**Note:** Ensure you have the necessary App Store Connect account permissions to generate API keys.

## Steps for Creating API Key

1. **Navigate to App Store Connect:**
   - Visit [App Store Connect](https://appstoreconnect.apple.com/).

2. **Log in to Your Account:**
   - Log in with your App Store Connect credentials.

3. **Access API Keys Section:**
   - From the homepage, navigate to the `Users and Access` section.

4. **Select API Keys:**
   - Click on the `Keys` option from the top.

5. **Generate a New API Key:**
   - Click on the `+` button.
  
![Keys section](https://github.com/EnsembleUI/ensemble_docs/assets/46677360/a1622af9-6bc4-44e8-9d40-01ecaa802e38)

6. **Fill in the Details:**
   - Provide a name for your API key. It will be useful to identify your key later on.
   - Choose `App Manager` in the access part of the dialog.

![API Key form](https://github.com/EnsembleUI/ensemble_docs/assets/46677360/63059213-709b-4686-84ab-7293398951e1)

7. **Generate the Key:**
   - Click on the `Generate` button to create the API key.

8. **Download and Store the Key:**
   - There will be a `Download` button for the newly generated key. Download the `.p8` file which is the API key.
   - Safely store the key file, as it cannot be downloaded again.

![Download the generated API Key](https://github.com/EnsembleUI/ensemble_docs/assets/46677360/4998013e-c189-4289-97b9-e4a6fb61038a)

9. **Copy Key ID and Issuer ID:**
   - Copy the `Key ID` for the generated key. Also, copy the `Issuer Id` at the top.
   - They both will be required later on in the build system.

Follow these steps to successfully generate an API key for App Store Connect, allowing seamless integration with the Build System.
