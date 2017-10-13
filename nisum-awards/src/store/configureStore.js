import {createStore} from 'redux';
import rootReducer from '../reducers'; // this relies on index.js being present in reducers folder

const store = (initialState) => {
  return createStore(
    rootReducer,
    initialState
  );
};

export default store;
