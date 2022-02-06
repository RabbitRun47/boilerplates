# React Native Boilerplate Setup
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
