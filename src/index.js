import React from 'react';
import ReactDOM from 'react-dom';
import TimersDashboard from './TimersDashboard';
import registerServiceWorker from './registerServiceWorker';

import { Provider } from 'react-redux';  
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';  
import reducers from './reducers';

const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);  
const store = createStoreWithMiddleware(reducers);


ReactDOM.render(
  <Provider store={store}>
    <TimersDashboard />
  </Provider>, document.getElementById('content'));
registerServiceWorker();
