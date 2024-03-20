# Floating Button

[Kitchen Sink Example](https://studio.ensembleui.com/app/YQGEapU8rrEfhTJJLzz8/screen/Vz7SuvSTF8i5no7jKXGx)

```yaml
    Stack:
      styles:
        alignChildren: bottomLeft
      children:
        - ListView:
            styles:
              padding: 12
              gap: 10
            children:
              - Text:
                  text: Hi there!
              - Button:
                  label: Checkout Ensemble Kitchen Sink
                  onTap:
                    openUrl:
                      url: "https://studio.ensembleui.com/preview/index.html?appId=e24402cb-75e2-404c-866c-29e6c3dd7992"

              - Card
              - Card
              - Card
              - Card

        - Button:
            startingIcon:
              name: plus
              library: fontAwesome
            styles:
              padding: 20 25
              margin: 30
```

### ListView:
- The `ListView` component displays a list of items on the screen.
- Additional styles are applied to customize its appearance, such as padding and gap between items.
- Within the `ListView`, various child components like `Text` and `Cards` are nested to represent different content sections.

### Button (Floating Button):
- Positioned alongside the `ListView` within the `Stack`, the `Button` component serves as the floating action button.
- Its placement on the same level as the `ListView` within the `Stack` allows it to overlay the content, creating the floating effect.
- `Styles` are applied to adjust the button's appearance, including padding and margin for spacing.

## Floating Button Implementation:
By placing the `Button` component within the `Stack` alongside the `ListView`, it remains visually separate from the list content and appears to float above it. This arrangement allows for easy access to important actions while maintaining a clean and organized UI layout.