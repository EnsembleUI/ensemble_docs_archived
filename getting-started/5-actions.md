# Handle events

Ensemble widgets can trigger events. For instance, a button has an `onTap` event, and a view has an `onLoad` event.

You handle events by assigning an action to the event:

```yaml
View:
  onLoad: 
    action: # perform an action here
```

Let's add a `onLoad` property to the `View`, and then an `action` to this property. You should now see available actions in Ensemble.

<img src="/images/gs5a.png" alt="actions" />

Let's use `executeCode` action so we can initiate a local storage variable in the next step.

