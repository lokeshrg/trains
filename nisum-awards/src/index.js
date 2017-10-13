import 'babel-polyfill'; //features is ES6 that can't be transpiled to ES5
import React from 'react';
import {render} from 'react-dom';

import {BrowserRouter} from 'react-router-dom';

import {Provider} from 'react-redux';
import configStore from './store/configureStore';

//import './styles/styles.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/toastr/build/toastr.min.css';
import 'bootstrap';

import App from './components/App';

const store = configStore();

render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById('app')
);
