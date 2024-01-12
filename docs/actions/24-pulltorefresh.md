# Pull To Refresh

Pull to Refresh is a common interaction pattern in mobile app development, allowing users to refresh the content of a view by pulling it down. In Ensemble, you can implement Pull to Refresh using the `onPullToRefresh` event and update the content dynamically. Let's break down the example:

```yaml
 Column:
    styles:
        scrollable: true
        padding: 20 20 200
        gap: 8
    onPullToRefresh: |-
        generateRandomNumber();
    item-template:
        data: ${ensemble.storage.RandomNumbers}
        name: number
        template:
        Text:
            text: ${number}
            styles:
            backgroundColor: cyan
            textAlign: center
Global: |-
  //@code
  ensemble.storage.RandomNumbers = [8, 3, 5];

  function generateRandomNumber() {
    //.....
    }
```

onPullToRefresh Event:
`onPullToRefresh`: |- 
    generateRandomNumber();: 
Specifies the callback function (`generateRandomNumber`) to be executed when the user pulls to refresh. This ensures that new random numbers are generated and the list is updated when the user performs a pull-to-refresh gesture.

Item Template:
`data`: ${ensemble.storage.RandomNumbers}: 
Binds the list of random numbers (stored in ensemble.storage.RandomNumbers) to the item template. This data will be used to populate the list.
`name: number`: Sets a reference name for each item in the list.
`text: ${number}`: Binds each Text widget to a specific number in the list, ensuring that the correct data is displayed for each item.

Global Section (Initialization):
`ensemble.storage.RandomNumbers = [8, 3, 5];`: 
Initializes the RandomNumbers array with some initial values.
`generateRandomNumber` function: 
Generates new random numbers when called. This function is triggered on pull-to-refresh.