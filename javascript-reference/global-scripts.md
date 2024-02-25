# Defining and Re-using Javascript Code

There are two ways to re-use js code as follows - 

- `Global` block within a screen definition. This, despite its name, is limited to the screen it is defined in and cannot be referenced in other screens
- `Scripts` a script that is defined independent of a screen (see video below) may be used anywhere in the app by simply importing it. 

In both cases above, you can define javascript variables (only `var` is supported as this is ES5, see [here](README.md)) or functions. 

## Example of `Global` code block within a screen

```yaml
View:
  #your screen definition
Global: |-
  //code block
  function sum(a,b) {
    return a + b;
  }
```

## Example of re-usable `Script` defined outside a screen and imported in any screen or widget
A script defined outside a screen, however, can be imported on any screen or widget across the app by simply doing - 

```yaml
Import:
  - myScript
```
Watch the following video for how to define a js library and re-use it across the app

## Demo

<div style="position: relative; padding-bottom: calc(55.463451394122075% + 41px); height: 0; width: 100%;"><iframe src="https://demo.arcade.software/6YFOTXvqE5kmEs8mJptS?embed&show_copy_link=true" title="Demo" frameborder="0" loading="lazy" webkitallowfullscreen mozallowfullscreen allowfullscreen allow="clipboard-write" style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;color-scheme: light;"></iframe></div>
