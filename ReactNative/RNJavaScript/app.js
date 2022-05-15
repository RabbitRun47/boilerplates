import React from 'react';
import {Provider} from 'react-redux';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {rootReducer} from './src/reducer';
import {SCREENS} from './src/screens';

const Stack = createNativeStackNavigator();

const AppRoot = () => {
  return (
    <Provider store={rootReducer}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen {...SCREENS.HOME} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default AppRoot;
