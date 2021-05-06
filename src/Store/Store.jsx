import {createStore,applyMiddleware} from 'redux';
// import { devToolsEnhancer } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import rootReducer from '../Reducers/indexReducers';
const Store=createStore(rootReducer,applyMiddleware(thunk));

export default Store;