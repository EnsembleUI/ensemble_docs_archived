# Write code

Ensemble allows you to write JavaScript code so you can have client-side logic to satisfy your use-cases. You can write code by using the `executeCode` property on any event.

When using `executeCode`, also specify a `body` property so you can include the code:

```yaml
View:
  onLoad:
    executeCode:
      body: |
        //@code

        // your JavaScript code goes here
        // and it could be on multiple lines
```

Note the following in the above example:

1. Use a `|` after `body: ` since you will be writing on multiple lines. This a YAML syntax requirement.
2. Add `//@code` so Ensemble runtime libraries know how to treat the following lines
3. There is another way to write code directly under `onLoad` event and it works as well.

```yaml
View:
  onLoad: |
    //@code
    // Write an javascript code here
```

**Note**

Ensemble uses ES5 syntax so using `let`, `const`, `arrow functions ()=>{}` is not supported yet. However you can make use use plain functions and `var` for declaring variables. See more details about JavaScript in ensemble [here](/javascript-reference/README)
