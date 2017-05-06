# Development

## Start the app:

Open the Android Virtual Device (AVD) Manager (`android avd`) and start a device).

Or open Genymotion and start and android device.

```
react-native run-android
```

## Live Reloading

In the emulator, hit Cmd+M, and tap "Enable Live Reload".

## Chrome Developer Tools

In the emulator, hit Cmd+M, and tap "Enable Live Reload".

## Accessing console logs

```
react-native log-android
```

## Installation

This is from the [React Native Getting Started guide](http://facebook.github.io/react-native/docs/getting-started.html)

### Install node and watchman

```
brew install node
brew install watchman
```

### Install the React Native CLI

```
npm install -g react-native-cli
```

### Install Android Studio

Make sure you have AVD (Android Virtual Device) and HAXM (Performance (Intel HAXM)).

Run `android` to start SDK Manager, look for "Intel x86 Emulator Accelerator (HAXM installer)" under Extras.

### Make sure you have JDK 8 (1.8.x)

```
javac -version
```

### Install the Android 6 and 7 SDK

Select "SDK Platforms" from within the SDK Manager, then check the box next to "Show Package Details". Look for and expand the Android 6.0 (Marshmallow) entry, then make sure the following items are all checked:

- Google APIs
- Intel x86 Atom System Image
- Intel x86 Atom_64 System Image
- Google APIs Intel x86 Atom_64 System Image

Next, select "SDK Tools" and check the box next to "Show Package Details" here as well. Look for and expand the "Android SDK Build Tools" entry, then make sure that Android SDK Build-Tools 23.0.1 is selected.

Finally, click "Apply" to download and install the Android SDK and related build tools.

### Add Android to your PATH

```
export ANDROID_HOME=~/Library/Android/sdk
export PATH=${PATH}:${ANDROID_HOME}/tools
export PATH=${PATH}:${ANDROID_HOME}/platform-tools
```

## Making a release

This is from the [React Native Documentation](http://facebook.github.io/react-native/docs/signed-apk-android.html).

1. Make sure you have the keystore file (`my-release-key.keystore`) in `android/app`.
1. Edit the file `~/android/gradle.properties` and add the following (replace ***** with the correct keystore password, alias and key password),

    ```
    MYAPP_RELEASE_STORE_FILE=my-release-key.keystore
    MYAPP_RELEASE_KEY_ALIAS=my-key-alias
    MYAPP_RELEASE_STORE_PASSWORD=*****
    MYAPP_RELEASE_KEY_PASSWORD=*****
    ```

1. Generating the release APK

    ```
    cd android
    ./gradlew assembleRelease
    ```
