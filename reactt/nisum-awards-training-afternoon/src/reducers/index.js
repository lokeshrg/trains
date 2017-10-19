import {combineReducers} from 'redux';
import {apolloClient} from "../graphql-client/client";
import categories from './categoryReducer';

const rootReducer = combineReducers({
  categories,
  apollo: apolloClient.reducer() // adding reducers from apollo lib
});

export default rootReducer;
