import {ActionConst} from '../Actions/ActionConst';

const initState={
	firstname:'',
	lastname:'',
	email:'',
	password:'',
	authentiCated:false,
	authenticating:"",
	message:''
}
const AuthReducers=(state=initState,action)=>{
	console.log(action);
	switch(action.type){
case `${ActionConst.USER_REGISTER}_REQUEST`:
return {
	...state
};
case `${ActionConst.USER_REGISTER}_SUCCESS`:
 return state={
	...state,

	message:action.payload.message
}

case `${ActionConst.USER_REGISTER}_FAILURE`:
return state={
	...state,
	error:action.payload.error
}
default:
return state;
	}

}

export default AuthReducers;