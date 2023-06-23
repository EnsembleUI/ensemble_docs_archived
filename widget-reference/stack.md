# Stack

The Stack Widget allows you to visually stack items on top of each other, providing a flexible and layered approach to layout and design within your application.

[Test in Kitchen Sink](https://studio.ensembleui.com/app/e24402cb-75e2-404c-866c-29e6c3dd7992/screen/572ecf3b-b9f2-46f4-960f-ff438e5fa1dc)

## Properties

| Property | Type   | Description               |
| :------- | :----- | :------------------------ |
| children | array  | List of widgets           |
| styles   | object | [See properties](#styles) |

### styles

| Property      | Type   | Description                                                                                                                                                                                                                                                                                      |
| :------------ | :----- | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| alignChildren | string | How to align the children within the stack such that their alignment points will be the same (default is topStart). Each child can override this with alignment property. `topLeft`, `topCenter`, `topRight`, `centerLeft`, `center`, `centerRight`, `bottomLeft`, `bottomCenter`, `bottomRight` |
