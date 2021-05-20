import { createStore, compose, applyMiddleware  } from 'redux';
import thunkMiddleware from 'redux-thunk';
import LogReducer from '../Log/LogReducer'

export const store = createStore(
  LogReducer,
  compose(applyMiddleware(thunkMiddleware), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
)

store.subscribe(() => console.log(store.getState()));

