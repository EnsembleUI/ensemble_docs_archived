# Custom Lottie Animations with Events and Controls

With features like onStart, onPause, onComplete, and control buttons, you can create interactive animations tailored to your application.

The Lottie animations have events such as onForward, onReverse, onPause, and onComplete. Control buttons are provided to trigger these events dynamically.
- Lottie:
    id: MyLottie
    autoPlay: false
    repeat: false
    onForward: |
        //@code
        console.log("Forward");
    onReverse: |
        //@code
        console.log("Reverse");
    onPause: |
        //@code
        console.log("Pause");
    onComplete: |
        //@code
        console.log("Completed");
       source: https://assets6.lottiefiles.com/private_files/lf30_rnpgzd17.json
          styles:
            width: 400
            height: 200

- Button:
    styles:
        outline: true
        borderColor: 0xffed5742
        borderRadius: 20
        backgroundColor: 0xffaad6de
        labelStyle:
            color: 0xffed5742
    label: Forward
    onTap: |
    //@code
    console.log("Forward");
    MyLottie.forward();