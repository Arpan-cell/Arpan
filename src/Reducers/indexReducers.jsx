import {combineReducers} from 'redux';
import AuthReducers from './Authreduces';
import Productreducer from '../Reducers/Productreducer'
import Cartreducers from '../Reducers/Cartreducers'
// import {devToolsEnhancer} from 'redux-devtools-extension'

const rootReducer=combineReducers(
{
	authData:AuthReducers,
	Productdata:Productreducer,
	cartData: Cartreducers,
	
}
)

export default rootReducer;