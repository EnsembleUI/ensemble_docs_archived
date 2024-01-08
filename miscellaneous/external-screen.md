# External Screen

Let's say their is a flutter screen already built or their is a screen which can't be made with Ensemble at the moment, you can construct that screen and Ensemble allows you to navigate to that custom screen.

> [NOTE]  
> You can find the entire source code [here](https://github.com/EnsembleUI/starter/tree/external-screen).


## How it works.

This is our beloved counter widget. Let's see how you can specify this widget and call it in your Ensemble App. 

```dart
class CounterWidget extends StatefulWidget {
  const CounterWidget({
    super.key,
    this.message,
  });

  final String? message;

  @override
  State<CounterWidget> createState() => _CounterWidgetState();
}

class _CounterWidgetState extends State<CounterWidget> {
  int counter = 0;

  void _incrementCounter() {
    setState(() {
      counter++;
    });
  }

  @override
  void initState() {
    super.initState();
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        backgroundColor: Theme.of(context).colorScheme.inversePrimary,
        title: const Text('Flutter Page'),
      ),
      floatingActionButton: FloatingActionButton(
        onPressed: _incrementCounter,
        tooltip: 'Increment',
        child: const Icon(Icons.add),
      ),
      body: Center(
        child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          children: <Widget>[
            Text(
              widget.message ?? 'You have pushed the button this many times:',
            ),
            Text(
              '$counter',
              style: Theme.of(context).textTheme.headlineMedium,
            ),
          ],
        ),
      ),
    );
  }
}

```


First we need to specify a map of name and builder widget. The builder has context and args as parameters. 
The args are basically passed using `navigateScreen`'s inputs. 


```dart
void main() async {
  WidgetsFlutterBinding.ensureInitialized();
  Ensemble().setExternalScreenWidgets({
    'counterScreen': (context, args) {
      final message = args?['message'];
      return CounterWidget(message: message);
    },
  });
  runApp(const EnsembleApp());
}
```

Now, the ensemble framework know about external screen named `counterScreen`. We can now navigate to external screen like following.

```yaml
Button:
    label: Navigate external screen
    onTap:
        navigateScreen:
        name: counterScreen
        external: true
        inputs:
            message: Hello world

```

