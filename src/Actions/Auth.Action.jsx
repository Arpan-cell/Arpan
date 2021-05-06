import axios from "axios";
import {ActionConst} from './ActionConst'

export const signup = (user) => {
    return async (dispatch)=>{
        //action Request send to the server
        dispatch({type:`${ActionConst.USER_REGISTER}_REQUEST`});
        axios.post(`https://api09.herokuapp.com/register`,user).then((res)=>{
            const msg=res.data.message
            console.log(res.data);
            alert(msg)
            
            // Success action generated
            // dispatch(actionType,paylode(opt))
        dispatch({type:`${ActionConst.USER_REGISTER}_SUCCESS`,payload:{message:msg}})
        
        }).catch((err)=>{
            // alert("Data not Registered")
            //Failure action generated
        dispatch({type:`${ActionConst.USER_REGISTER}_FAILURE`,payload:{error:"Data not registered"}})
        
    
        })
        }
}



export const signin = (user) => {
    return async (dispatch)=>{
        //action Request send to the server
        dispatch({type:`${ActionConst.USER_LOGIN}_REQUEST`});
        axios.post(`https://api09.herokuapp.com/login`,user).then((res)=>{
            const msg=res.data.message
            console.log(res.data);
            alert(msg)
            let storeData = res.data.token;
      console.log(storeData);
      window.localStorage.setItem('token', storeData);
            
            // Success action generated
            // dispatch(actionType,paylode(opt))
        dispatch({type:`${ActionConst.USER_LOGIN}_SUCCESS`,payload:{message:msg}})
        
        }).catch((err)=>{
            alert('Log in successful')
            //Failure action generated
        dispatch({type:`${ActionConst.USER_LOGIN}_FAILURE`,payload:{error:"Email/Password does not match"}})
        })
        }
}



export const logout = () => {
    return async (dispatch)=>{
        //action Request send to the server
        dispatch({type:`${ActionConst.USER_LOGOUT}_REQUEST`});
        if(localStorage.getItem('token')!==""){
            localStorage.clear()
            dispatch({type:`${ActionConst.USER_LOGOUT}_SUCCESS`,payload:{message:"logout"}})
        }else{
            dispatch({type:`${ActionConst.USER_LOGOUT}_FAILURE`,payload:{error:"failed"}})
        }
            
        }
        }
