# Creating an Avatar

Display basic avatars with various configurations such as size, shape, and borders. You can also display avatars with initials when an image source is unavailable.

Use the `Avatar` component inside a `Flow` or other container.
Set the `source` attribute to the URL of the image for the avatar.

```yaml
- Avatar:
    source: https://mui.com/static/images/avatar/1.jpg
- Avatar:
    source: https://mui.com/static/images/avatar/2.jpg
    styles:
      width: 50
      borderColor: grey
```

Use the `Stack` component to overlay additional elements on the `Avatar`.

```yaml
- Stack:
    children:
      - Avatar:
          source: https://mui.com/static/images/avatar/2.jpg
          styles:
            width: 80
      - Icon:
          name: camera_line
          library: remix
          styles:
            color: black
```