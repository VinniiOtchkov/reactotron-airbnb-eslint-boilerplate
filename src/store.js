import { applyMiddleware } from 'redux';
import rootReducer from  './reducers';
import logger from 'redux-logger';
import promises from 'redux-promise-middleware';
import Reactotron from 'reactotron-react-js'

export default(initialState) => {
    return Reactotron.createStore(rootReducer, applyMiddleware(logger, promises()))
}
