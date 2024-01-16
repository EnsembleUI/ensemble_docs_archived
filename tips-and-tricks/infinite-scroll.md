# Infinite Scroll 

Gone are the days where users will click the next and previous page or load more button to see more data.
Every modern app requires some form of infinite scroll. In ensemble we enables app devs to build infinite scroll view with ListView and GridView with the help of attribute called `onScrollEnd`.

`onScrollEnd` takes any supported actions. Let's see how to implement infinite scroll with ListView and the technic is similar if your screen requires the use of GridView.

```yaml
ListView:
  id: listView
  showLoading: true
  onScrollEnd:
    invokeAPI:
      name: getPeople
      onResponse: |
        //@code
        var results = getPeople.body.results;
        var oldResults = ensemble.storage.users;
        var total = oldResults.concat(results);
        ensemble.storage.users = total;

  item-template:
    data: ${ensemble.storage.users}
    name: user

    template:
      MyRow:
        inputs:
          p: ${user}
```

Here `onScrollEnd` we call `invokeAPI` action. As the name suggest `onScrollEnd` will get called whenever the ListView or the GridView has built the last element. 
Now in above snippet, onResponse of invokeAPI we are concating the old list with the new data from the reponse and storing it in the storage. On updating the storage it automatically builds the listView with more data.

Their is another attribute with ListView called `showLoading`, the function of this attribute is to showLoading when the item-template data reaches to the end of list and waiting for more data.

This goes without saying that `onScrollEnd` is a general purpose callback of action.
