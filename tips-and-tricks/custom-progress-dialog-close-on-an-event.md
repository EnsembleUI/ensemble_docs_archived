One common theme in most apps is to show a progress dialog while an API is being processed on the server and close it when the response from the API has been received. This can easily be achieved as follows. Note the use of closeAllDialogs action. 

This method will not work when the progress container is being displayed on top of an existing dialog as closeAllDialogs will close the dialog under it as well which may not be what you desire. 

Lastly a dialog is not the samething as a modal that is displayed with navigateModalScreen. Calling closeAllDialogs does NOT close the modal that is opened with navigateModalScreen

  ```yaml
          - Button:
            label: Custom Progress - closes in 3 seconds
            onTap:
              showDialog:
                widget:
                  ProgressDialog:
                    inputs:
                      userId: 1        

ProgressDialog:
  inputs:
    - userId
  onLoad:
    invokeAPI:
      name: getMockUser
      inputs:
        userId: ${userId}
      onResponse:
        #adding this timer here just so that we can delay closing the dialog
        startTimer:
          options:
            startAfter: 3
            repeat: false
          onTimer:
            #all you need to do to close the dialog is to call closeAllDialogs action
            closeAllDialogs:
  body:
    Column:
      styles:
        crossAxis: center
        gap: 8
      children:
        - Progress:
        - Text:
            text: Just a moment...

API:
  getMockUser:
    inputs:
      - userId
    uri: https://dummyjson.com/users/${userId}
    method: GET
```
See [this](https://studio.ensembleui.com/app/e24402cb-75e2-404c-866c-29e6c3dd7992/screen/c2c248f2-a289-40d3-acd5-65a1a7f3c5a2#) for a live example
