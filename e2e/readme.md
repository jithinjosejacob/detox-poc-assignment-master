===================== Steps from start ======================

Required Softwares to install
- Xcode 13.3.1
- Android Studio Bumblebee | 2021.1.1 Patch 2 and add the path to .zshrc file
- Install Java and add the path in .zshrc file
 .zshrc file content

 - Adding cmd to env : nano ~/.zshrc and its content
alias pod='arch -x86_64 pod'
export JAVA_HOME=$(/usr/libexec/java_home)
export ANDROID_HOME=/Users/radhakrishna/Library/Android/sdk
export PATH=$PATH:$ANDROID_HOME/platform-tools:$ANDROID_HOME/tools:$ANDROID_HOME/bin

-----------------------------
- Clone repo
- Cmd “yarn” to install packages the project
    - Yarn install
- Setting up IOS env
    - https://github.com/wix/Detox/blob/master/docs/Introduction.iOSDevEnv.md
- Cmd - sudo gem install cocoapods
- Cmd - sudo arch -x86_64 gem install ffi
- Cmd - cd ios && arch -x86_64 pod install && cd .. 

- We can add ‘arch -x86_64 pod’ to nano ~/.zshrc file like below
After adding it to .zshrc file use below cmd 
cd ios && pod install && cd .. 
 
- Cucumber and detox setup cmds
    - yarn global add detox-cli && yarn global add nps  
    - yarn add -D detox && yarn add -D @cucumber/cucumber && yarn add -D @babel/register

- Then build execute
    - ios
        - Yarn detox:build:ios-debug
    - Android
        - Yarn detox:build:android-debug
- To run e2e tests
    - ios 
        -  yarn detox:e2e:ios-debug
    - Android
        - yarn detox:e2e:android-debug
