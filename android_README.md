
Create an Emulator in Android Studio with a specific name Pixel4

1) Spin up Emulator automatically

$ANDROID_HOME/emulator/emulator -avd Pixel4


2) Appium Inspector

Download Appium Desktop inspector 1.20.2 and use below capabilities to connect android session
{ 
"deviceName": "PixelXL", 
"platformName": "Android", 
"platformVersion": "12", 
"appPackage": "com.pqaa_detox", 
"appActivity": ".SplashActivity" 
}

detoxrc.js config

module.exports = {
    "configurations": {
        "ios.sim.debug": {
            "binaryPath": "ios/build/Build/Products/Debug-iphonesimulator/pqaa_detox.app",
            "build": "xcodebuild -workspace ios/pqaa_detox.xcworkspace -scheme pqaa_detox -configuration Debug -sdk iphonesimulator -derivedDataPath ios/build",
            "type": "ios.simulator",
            "device": {
                "type": "iPhone 12 Pro",
            }
        },
        "android.emu.debug": {
            "binaryPath": "android/app/build/outputs/apk/debug/app-debug.apk",
            "build": "cd android && ./gradlew assembleDebug assembleAndroidTest -DtestBuildType=debug && cd ..",
            "type": "android.attached",
            //"type": "android.emulator",
            "device": {
                "adbName": "emulator-5554",
                // "avdName": "Pixel4",
            }
        }
    }
}
