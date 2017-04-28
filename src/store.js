import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';

import reviewReducer from './reducers';

const middlewares = applyMiddleware(thunk, logger);

const store = createStore(reviewReducer, middlewares);

export default store;