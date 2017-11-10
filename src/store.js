import { applyMiddleware } from 'redux';
import logger from 'redux-logger';
import promises from 'redux-promise-middleware';
import rootReducer from './reducers';
import Reactotron from 'reactotron-react-js'

export default(initialState) => {
  return Reactotron.createStore(rootReducer, applyMiddleware(logger, promises()))
}
