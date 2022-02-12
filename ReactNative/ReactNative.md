# React Native Boilerplate

## Environment Setup

**_Package versions last checked on 2022-02-12_**

[React Native Environment Setup Docs](https://reactnative.dev/docs/environment-setup)\
[How to install Android SDK and setup AVD Emulator without Android Studio](https://medium.com/michael-wallace/how-to-install-android-sdk-and-setup-avd-emulator-without-android-studio-aeb55c014264)

### Node

Install node using [nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

### JDK

```
sudo apt-get install openjdk-8-jre
```

### Android SDK and Emulator

1. Download Android SDK Command line tools from: Android Studio [site](https://developer.android.com/studio) > Download Options > Command line tools only
2. Extract this zip and navigate to the folder containing `bin`, `lib` and other contents. Rename the folder (containing `bin`, `lib` and other contents) to `latest`.
3. Move commandline tools

    ```
    sudo mkdir -p /opt/android/sdk/cmdline-tools
    sudo mv ./latest /opt/android/sdk/cmdline-tools
    ```

4. Download platform-tools and emulator package

    ```
    cd /opt/android/sdk/cmdline-tools/latest/bin
    sudo ./sdkmanager platform-tools emulator
    ```

5. Add environment variables\
   Add highlighted lines in `/etc/environment` as shown below.\
   <pre><code>PATH="<span style="background-color: bisque;">/opt/android/sdk/emulator:/opt/android/sdk/platform-tools:/opt/android/sdk/cmdline-tools/latest/bin:</span>/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin:/usr/games:/usr/local/games:/snap/bin"
   <span style="background-color: bisque;">ANDROID_SDK_ROOT="/opt/android/sdk"</span>
   <span style="background-color: bisque;">ANDROID_HOME="/opt/android/sdk"</span></code></pre>

6. Download platform specific packages
    ```
    sudo /opt/android/sdk/cmdline-tools/latest/bin/sdkmanager "platforms;android-29"
    sudo /opt/android/sdk/cmdline-tools/latest/bin/sdkmanager "system-images;android-29;default;x86_64"
    sudo /opt/android/sdk/cmdline-tools/latest/bin/sdkmanager "build-tools;29.0.2"
    ```
7. Create an AVD and run it

    ```
    avdmanager create avd --name android29 --package "system-images;android-29;default;x86_64"
    emulator -avd android29
    ```

    You can edit `~/.android/avd/<AVD name>.avd/config.ini` to configure your AVD.\
    Currently active configurations can be found in `hardware-qemu.ini` (created after the emulator runs for the first time).

```
npx react-native init <ProjectName>
cd <ProjectName>
npm install @react-native-async-storage/async-storage
npm install @react-navigation/native @react-navigation/stack
npm install react-native-reanimated react-native-gesture-handler react-native-screens react-native-safe-area-context @react-native-community/masked-view
npm install @reduxjs/toolkit react-redux
npm install react-native-vector-icons
npx react-native start
npx react-native run-android
```

## App.js

```
// import line for react-native-gesture-handler should be at the top of your entry file, such as `index.js` or `App.js`
import 'react-native-gesture-handler';

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Account } from './src/screens/Account';
import { store } from './src/reducer';
import { Provider } from 'react-redux';

const Stack = createStackNavigator();
const App = () => {
    return (
        <Provider store={store}>
            <NavigationContainer>
                <Stack.Navigator initialRouteName="Your Account">
                    <Stack.Screen name="Your Account" component={Account} />
                </Stack.Navigator>
            </NavigationContainer>
        </Provider>
    );
};

export default App;
```

## /src/reducer/index.js

```
import { configureStore } from '@reduxjs/toolkit';
import { coinsDataReducer } from './CoinsDataSlice';

export const store = configureStore({
    reducer: {
        coinsData: coinsDataReducer,
    },
});
```

## Reducer Slice

```
import { createSlice } from '@reduxjs/toolkit';

export const coinsDataSlice = createSlice({
    name: 'coinsData',
    initialState: {
        value: []
    },
    reducers: {
        updateCoinsData: (state, action) => {
            state.value = action.payload;
        },
    },
});

export const { updateCoinsData } = coinsDataSlice.actions;
export const coinsDataReducer = coinsDataSlice.reducer;

/*
import { useSelector, useDispatch } from 'react-redux';
import { updateCoinsData } from "../../reducers/CoinsDataSlice";

const coinsData = useSelector((state) => state.coinsData.value);
const dispatch = useDispatch();
dispatch(updateCoinsData(response));
*/
```

## Async Storage

```
import AsyncStorage from "@react-native-async-storage/async-storage";

export const setAsyncStoreData = async (key, value) => {
    try {
        const jsonValue = JSON.stringify(value);
        await AsyncStorage.setItem(key, jsonValue);
    } catch (error) {
        // console.log('error: ', error);
        return null;
    }
}

export const getAsyncStoreData = async (key) => {
    try {
        const value = await AsyncStorage.getItem(key);
        const parsedValue = JSON.parse(value);
        return parsedValue;
    } catch (error) {
        // console.log('error: ', error);
        return null;
    }
}
```
