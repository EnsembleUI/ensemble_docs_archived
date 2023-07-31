# Ensemble Syntax for a screen

Ensemble apps are written in YAML. YAML is similar to XML and JSON but uses a more minimalist syntax. In general, most things in a YAML file are a form of key-value pair, like:

```yaml
title: ToDo app
```

Now back to Ensemble! `View` is the root object for a screen. View has several properties, such as `header`, `styles`, and `body`. You can read more about them [here](/build/user-interface/1-page-structure)

```yaml
View:
  # set screen styling such as backgroundColor
  styles:

  # set the screen title and its styling
  header:

  # specify the widget that will contain body of the screen
  # this is typically a container widget such as Column, ListView, Stack, ...
  body:
```

You can see all widget reference [here](/widget-reference/directory) and can also check out the [Kitchen Sink app](https://studio.ensembleui.com/preview/index.html?appId=e24402cb-75e2-404c-866c-29e6c3dd7992) which enlists all the widgets and actions along with example of each . To see the source code of these screens, see the Kitchen Sink app in [Ensemble Studio](https://studio.ensembleui.com/app/e24402cb-75e2-404c-866c-29e6c3dd7992/screens).

Similar to the `View`, each widget has properties that drive its behavior and styling.
