# React Native
## Utils

```
npm install @react-native-async-storage/async-storage
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
