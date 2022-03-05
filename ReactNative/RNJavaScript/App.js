import React from 'react';

import {Provider} from 'react-redux';
import {rootReducer} from './src/reducer';
import {ViewableAppRoot} from './src/ViewableAppRoot';

const App = () => {
  return (
    <Provider store={rootReducer}>
      <ViewableAppRoot />
    </Provider>
  );
};

export default App;
