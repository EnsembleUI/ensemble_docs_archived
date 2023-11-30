One common theme in most apps is to show a progress dialog while an API is being processed on the server and close it when the response from the API has been received. This can easily be achieved as follows. 

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
