import React from 'react';

import {Provider} from 'react-redux';
import {rootReducer} from './src/reducer';
import {App} from './src/app';

const AppRoot = () => {
  return (
    <Provider store={rootReducer}>
      <App />
    </Provider>
  );
};

export default AppRoot;
