# Write code

Ensemble allows you to write JavaScript code so you can have client-side logic to satify your use-cases. You can write code by using the `action: executeCode` property on any event.

When using `executeCode`, also specify a `body` property so you can include the code:

```yaml
View:
  onLoad:
    action: executeCode
    body: |
        //@code

        // your JavaScript code goes here
        // and it could be on multiple lines
```

Note the following in the above example:

1. Use a `|` after `body: ` since you will be writing on multiple lines. This a YAML syntax requirement.
2. Add `//@code` so Ensemble runtime libraries know how to treat the following lines


