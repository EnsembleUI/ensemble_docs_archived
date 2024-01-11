# BackgroundColor issue in Ensemble Emulator or Preview App

There Can be issue with button text color when using a backgroundColor for button specially when testing app using _Ensemble Go_ ( IOS ) or _Ensemble Preview App_ ( Android ). Like this

**Output**

![Alt text](image-7.png)

Note: `As we can see in the image the text Color is not what we declared it in our App which can be resolved using Ensemble Theme `.

**Code:**

<div class="code-container" markdown=1>
  <button onclick="copyCode()" class="copy-code-button">Copy Code</button>

```yaml
- Button:
    label: $6,780 income
    startingIcon:
    name: dollarSign
    library: fontAwesome
    size: 16
    color: 0xFF667483B2
    gap: 6
    styles:
    backgroundColor: 0x20667483
    borderRadius: 20
    padding: 8
    labelStyle:
      fontSize: 16
      color: 0xFF000000
```

</div>

- The color for text is slight grayish but it appears as white in the Ensemble Preview App.

### Remedy

We can make use of outline property set it to true and also set primary color in theme ( look at this [trick](/tips-and-tricks/general_primary_color-theme.md) ).

**Output:**

![Alt text](<WhatsApp Image 2023-07-12 at 00.04.57.jpeg>)

The primary color in theme is `0xFF308775`.
