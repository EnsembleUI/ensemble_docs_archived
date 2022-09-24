---
sidebar_position: 5
---

# 5. Refactor tasks to a custom widget

To make our screen definition easier to read and maintain, let's move the `template` we've defined for each task to a custom widget.

In your screen definitions, you can define and reference customer widgets like this:

```yaml
View:
  Column:
    children:
      - MyCustomWidget
          inputs:
            name: Ensemble

MyCustomWidget:
  inputs:
    - name
  Text:
    text: Hi ${name}
```

Create a custom widget named `ToDo` that takes an input of `todoItem`:

```yaml
View:
  # the existing view content

ToDo:
  inputs:
    - todoItem
```

Now move the checkbox that is under the `template` to this custom widget, and replace the value of the template:

```yaml


### Here's the expected outcome

<img src="/img/exercise_4.png" alt="Exercise 4" width="300"/>