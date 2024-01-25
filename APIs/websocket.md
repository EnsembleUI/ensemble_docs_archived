# Using WebSockets

The Websockets feature in EnsembleUI enables bidirectional communication between client and server, facilitating real-time data exchange.

## Supported Actions
1. Connect Socket: Establishes a connection to the specified socket.

```yaml
    - Button:
        label: Connect Action
        onTap:
        connectSocket:
            name: spark
```
2. Disconnect Socket: Terminates the connection to the specified socket.

```yaml
    - Button:
        label: Disconnect Action
        onTap:
        disconnectSocket:
            name: spark
```
3. Message Socket: Sends a message over the specified socket.

```yaml
    - Button:
        label: SendMessage Action
        onTap:
        messageSocket:
            name: spark
            message:
            "content": "Hello there"
```

## WebSocket Implementation

### Socket Configuration
The WebSocket configuration includes settings for connecting to the WebSocket server, handling connection events, and managing data exchange.

`spark`: Represents the WebSocket connection to the specified URI (`wss://spark.ensembleui.com/example/ws/`).

```yaml
    Socket:

    spark:
        uri: wss://spark.ensembleui.com/example/ws/

        onSuccess: |
        status.text = "connected";
        onDisconnect: |
        status.text = "disconnected";
        onReconnectAttempt: |
        status.text = "reconnecting";
        onReceive: |
        console.log(spark.data);
```