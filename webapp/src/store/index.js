import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import throttle from 'lodash/throttle';
import { fromLocalStorage, toLocalStorage } from '../util';

import { data } from './data';
import { representing } from './representing';
import { home_view } from './home_view';
import { thumb } from './thumb';

export const configStore = () => {
  let middlewares = [];

  if (process.env.NODE_ENV !== 'production') {
    middlewares.push(logger);
  }

  const store = createStore(combineReducers({
    data,
    representing,
    home_view,
    thumb
  }), fromLocalStorage(), applyMiddleware(...middlewares));

  store.subscribe(throttle(() => {
    toLocalStorage(store.getState());
  }, 1000));

  return store;
}