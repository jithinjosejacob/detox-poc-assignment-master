# Detox-poc-assignment

 
- Clone repo
- Cmd “yarn” to install packages the project
- yarn install

# Setting up IOS env
- https://github.com/wix/Detox/blob/master/docs/Introduction.iOSDevEnv.md
- Cmd - sudo gem install cocoapods
- Cmd - sudo arch -x86_64 gem install ffi
- Cmd - cd ios && arch -x86_64 pod install && cd .. 
- We can add ‘arch -x86_64 pod’ to nano ~/.zshrc file like below(if we would like to shorten the cmd)
- After adding it to .zshrc file use below cmd 
  - cd ios && pod install && cd .. 
 
# Adding cmd to env : nano ~/.zshrc and its content
alias pod='arch -x86_64 pod' <br/>
export JAVA_HOME=$(/usr/libexec/java_home) <br/>
export ANDROID_HOME=/Users/jithin-till/Library/Android/sdk <br/>
export PATH=$PATH:$ANDROID_HOME/platform-tools:$ANDROID_HOME/tools:$ANDROID_HOME/bin <br/>
 
 
# Cucumber and detox setup cmds
- yarn global add detox-cli && yarn global add nps  
- yarn add -D detox && yarn add -D @cucumber/cucumber && yarn add -D @babel/register (this just need to added cucumber to framework, but not need as already added in package.json)

# Then build execute

## - IOS
- yarn detox:build:ios-debug

## - Android
- yarn detox:build:android-debug

# To run e2e tests

## - IOS 
- yarn detox:e2e:ios-debug

## Android
- yarn detox:e2e:android-debug
 
