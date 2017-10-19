import {createStore, applyMiddleware, compose} from 'redux';
import {apolloClient} from "../graphql-client/client";
import rootReducer from '../reducers';
import thunk from 'redux-thunk';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// connecting apollo to redux store here, if needed we can also use internal redix store used by apollo
export default (initialState) => {
  return createStore(
    rootReducer,
    initialState,
    composeEnhancers(
      applyMiddleware(
        thunk,
        apolloClient.middleware()
      )
    )
  );
};
