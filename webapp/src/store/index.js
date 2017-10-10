import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import throttle from 'lodash/throttle';
import { fromLocalStorage, toLocalStorage } from '../util';

import { data } from './data';

export const configStore = () => {
  let middlewares = [];

  if (process.env.NODE_ENV !== 'production') {
    middlewares.push(logger);
  }

  const store = createStore(combineReducers({
    data
  }), fromLocalStorage(), applyMiddleware(...middlewares));

  store.subscribe(throttle(() => {
    toLocalStorage(store.getState());
  }, 1000));

  return store;
}