import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'react-jss';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import reduxthunk from 'redux-thunk';
import * as serviceWorker from './serviceWorker';

import './index.css';
import { App } from './containers/App';
import reducers from './reducers';
import { theme } from './theme';

const store = createStore(
  reducers,
  composeWithDevTools(applyMiddleware(reduxthunk))
);

ReactDOM.render(
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </Provider>,
  document.getElementById('root')
);

serviceWorker.unregister();
