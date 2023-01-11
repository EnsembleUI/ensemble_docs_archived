# Ensemble Syntax for a screen

Ensemble apps are written in YAML. YAML is similar to XML and JSON but uses a more minimalist syntax. In general, most things in a YAML file are a form of key-value pair, like:

```yaml
title: ToDo app
```

Now back to Ensemble! `View` is the root object for a screen. View has several properties, such as `header` and `styles`, and it also takes a widget such as `Column` as the starting widget.

To see what widgets are available, check out the [Kitchen Sink app](https://studio.ensembleui.com/preview/index.html?appId=e24402cb-75e2-404c-866c-29e6c3dd7992) and browser the [source](https://studio.ensembleui.com/app/e24402cb-75e2-404c-866c-29e6c3dd7992/screens) for it to see examples.

Similar to the `View`, each widget has properties that drive its behavior and styling. You can see available properties for a widget in the properties panel. Let's try it for `Text` widget:

1. Place your cursor on line 14.
2. Click on Widget Properties on the right side of the browser.

<img src="/images/gs3a.png" alt="properties panel" />


You should now see all the available properties for a `Text` widget.

<img src="/images/gs3b.png" alt="properties panel expanded" />
