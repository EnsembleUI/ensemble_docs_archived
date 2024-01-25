# Youtube

The YouTube feature in EnsembleUI allows integration of YouTube videos into your application, providing users with a rich multimedia experience.

### YouTube Player Configuration
The YouTube player component offers a range of options for customizing the behavior and appearance of YouTube videos within the application.

- URL: Specifies the URL of the main YouTube video to be played.
- Video List: Provides a list of additional videos to be displayed in the video player.
- Playback Rate: Allows users to adjust the playback speed of the video.
- Volume: Enables users to set the volume level for audio playback.
- Playback Controls: Offers options to show/hide video controls, enable captions, and display annotations.
- Autoplay: Determines whether the video should start playing automatically when loaded.
- Start and End Seconds: Specifies the start and end times of the video playback.
- Aspect Ratio: Defines the aspect ratio of the video player.

### Controlling Video Playback
The control buttons allow users to interact with the YouTube player and manage video playback effectively.

- Prev/Next: Navigate to the previous or next video in the playlist.
- Play/Pause: Start or pause video playback.
- Mute/Unmute: Toggle audio mute/unmute.
- Stop: Stop video playback.

### Setting Playback Rate and Volume
Users can set the playback rate and volume using the provided text input fields:

- Set playback rate: Adjust the playback speed of the video.
- Set volume: Control the audio volume of the video.

## Example Configuration
```yaml
    - TextInput:
            hintText: Set playback rate
            id: playback
        - TextInput:
            hintText: set volume
            id: volume
        - YouTube:
            volume: ${volume.value}
            showFullScreenButton: true
            url: https://www.youtube.com/watch?v=4NRXx6U8ABQ
            videoList:
              - https://www.youtube.com/watch?v=H5v3kku4y6Q
              - IoBP24I2lwA
            playbackRate: ${playback.value}
            enableCaptions: true
            showControls: true
            showAnnotations: false
            id: youtubeId
            startSeconds: 10
            endSeconds: 40
            autoplay: true
            aspectRatio: 4 / 3
        - Flow:
            styles:
              gap: 16
              lineGap: 16
            children:
              - Button:
                  label: Prev
                  onTap: |
                    youtubeId.previousVideo()
              - Button:
                  label: Play
                  onTap: |
                    youtubeId.playVideo()
              - Button:
                  label: Pause
                  onTap: |
                    youtubeId.pauseVideo()
              - Button:
                  label: Mute
                  onTap: |
                    youtubeId.mute()
              - Button:
                  label: Unmute
                  onTap: |
                    youtubeId.unMute()
              - Button:
                  label: Next
                  onTap: |
                    youtubeId.nextVideo()
              - Button:
                  label: Stop
                  onTap: |
                    youtubeId.stopVideo()
```

Note: The YouTube feature is compatible with Native iOS and Android applications.