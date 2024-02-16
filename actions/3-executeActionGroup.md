# Action: executeActionGroup

`executeActionGroup` is an Action and can be used like any other action. A group of actions that are executed sequentially in order but without waiting for an action to finish.

The most common use case for this is calling APIs in parallel using the `invokeAPI` action. Since APIs are asynchronous, multiple APIs will be triggered one after the other in parallel. The parallism is governed by the underlying operating system.

See [Kitchen Sink Example](https://studio.ensembleui.com/app/e24402cb-75e2-404c-866c-29e6c3dd7992/screen/VJQun4rJ91mATTBopsNy#)

## Example
```yaml
          - Button:
              label: Round
              onTap:
                executeActionGroup:
                  actions:
                    - invokeAPI:
                        name: callDelayedAPI
                        inputs:
                          num: 1
                    - showToast:
                        message: second action - 2
                        options:
                          duration: 4
                    - executeCode:
                        body: |- 
                          console.log('executed code - 2');
                    - invokeAPI:
                        name: callDelayedAPI
                        inputs:
                          num: 3
                        onResponse: |-
                          console.log('inline onResponse - 3');
                    - invokeAPI:
                        name: callDelayedAPI
                        inputs:
                          num: 4
                    - showToast:
                        message: number 5
                        options:
                          duration: 3
                    - executeCode:
                        body: |- 
                          console.log('executed code - 5');
```
