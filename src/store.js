import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import createLogger from 'redux-logger';
import reducers from './reducers';

const loggerMiddleware = createLogger();

// Async actions support
const createStoreWithMiddleware = applyMiddleware(
  thunk,
  loggerMiddleware
)(createStore);

// Store:
export default createStoreWithMiddleware(reducers);
