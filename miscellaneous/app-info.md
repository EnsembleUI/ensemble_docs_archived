# App Information

Get ensemble app informations such as appId, version, etc in Ensemble Definition Language

- appId - Ensemble AppId (ex: GJ4nZIEFlZTv2HQGw)
- appName - Project App Name
- packageName - Android package name or iOS bundleId
- version - Project Version (ex: 1.0.0)
- bundleNumber - Project Build Number (2)

```yaml
View:
  styles:
    scrollableView: true
  header:
    title: AppInfo
  body:
    Column:
      styles:
        gap: 16
        padding: 24
      children:
        - Text:
            text: "${appInfo.appId}"
        - Text:
            text: "${appInfo.appName}"
        - Text:
            text: "${appInfo.packageName}"
        - Text:
            text: "${appInfo.version}"
        - Text:
            text: "${appInfo.buildNumber}"
```
