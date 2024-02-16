# Action: executeConditionalAction
`executeConditionalAction` is an Action and can be used like any other action. that allows actions to be executed based on if/elseif/else conditions

- `if` condition is required and should be the first condition
- `elseif` is optional and there can be any number of elseif conditions
- `else` is optional and there can only be one else condition

See [Kitchen Sink Example](https://studio.ensembleui.com/app/e24402cb-75e2-404c-866c-29e6c3dd7992/screen/HoLgqsVN4zS20TxTHe4M#)

## Example
```yaml
          - Button:
              label: Tap to compare the price with 10
              onTap:
                executeConditionalAction:
                  conditions:
                    - if: ${parseInt(price.value) < 10}
                      action:
                        showToast:
                          message: Price is less than $10
                          options:
                            duration: 5
                    - elseif: "${parseInt(price.value) > 10}"
                      action:
                        showToast:
                          message: Price is greater than $10
                          options:
                            duration: 5
                    - else: 
                      action:
                        showToast:
                          message: Price is $10
                          options:
                            duration: 5
```
