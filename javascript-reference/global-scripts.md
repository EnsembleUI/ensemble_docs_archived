# Reusing javascript code across your app

You can define variables and functions in scripts and reuse them across screens and widgets. This is different from the `Global` script block that you can define within a screen. The `Global` script block (despite it's name) is limited to that particular screen only and cannot be used by other screens or widgets. 

Js Code libraries, however, can be imported on any screen or widget across the app by simply doing - 

```yaml
Import:
  - myScript
```
Watch the following video for how to define a js library and re-use it across the app

## Demo

<div style="position: relative; padding-bottom: calc(55.463451394122075% + 41px); height: 0; width: 100%;"><iframe src="https://demo.arcade.software/6YFOTXvqE5kmEs8mJptS?embed&show_copy_link=true" title="Demo" frameborder="0" loading="lazy" webkitallowfullscreen mozallowfullscreen allowfullscreen allow="clipboard-write" style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;color-scheme: light;"></iframe></div>
