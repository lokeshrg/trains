import React from 'react';
import {render} from 'react-dom';
import '../node_modules/toastr/build/toastr.min.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';

import {BrowserRouter} from 'react-router-dom';

import {Provider} from 'react-redux';
import configureStore from './store/configureStore';
// next line is alternative for line 9 using default react redux sotre provider
import {ApolloProvider} from 'react-apollo';
import {apolloClient} from "./graphql-client/client";

import {loadCatGQL} from './actions/categoryActions';

import App from './components/App';

const store = configureStore();

store.dispatch(loadCatGQL());

render(
  <ApolloProvider store={store} client={apolloClient}>
    <BrowserRouter>
      <App/>
    </BrowserRouter>
  </ApolloProvider>,
  document.getElementById('app')
);
