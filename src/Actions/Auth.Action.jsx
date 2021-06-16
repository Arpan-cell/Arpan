import axios from "axios";
import { ActionConst } from "./ActionConst";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
toast.configure();
export const signup = (user) => {
  return async (dispatch) => {
    //action Request send to the server
    dispatch({ type: `${ActionConst.USER_REGISTER}_REQUEST` });
    const api1 = "https://nodeprojectapi.herokuapp.com/register";

    axios
      .post(`${api1}`, user)
      .then((res) => {
        const msg = res.data.message;
        console.log(res.data);
        toast.success(msg, {
          position: "top-right",
          autoClose: 1500,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });

        dispatch({
          type: `${ActionConst.USER_REGISTER}_SUCCESS`,
          payload: { message: msg },
        });
      })
      .catch((res) => {
        toast.error("Already Registered", {
          position: "top-right",
          autoClose: 1500,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
        //Failure action generated
        dispatch({
          type: `${ActionConst.USER_REGISTER}_FAILURE`,
          payload: { error: "Data not registered" },
        });
      });
  };
};

export const login = (user) => {
  return async (dispatch) => {
    //action Request send to the server
    dispatch({ type: `${ActionConst.USER_LOGIN}_REQUEST` });
    const api2 = "https://nodeprojectapi.herokuapp.com/login";
    axios
      .post(`${api2}`, user)
      .then((res) => {
        const msg = res.data.message;
        console.log(res);
        let storeData = res.data.data.token;
        let storeData1 = res.data.data.firstname;
        console.log(storeData1);

        console.log(storeData);
        window.localStorage.setItem("token", storeData);
        window.localStorage.setItem("firstname", storeData1);

        toast.success(msg, {
          position: "top-right",
          autoClose: 1500,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });

        // Success action generated

        dispatch({
          type: `${ActionConst.USER_LOGIN}_SUCCESS`,
          payload: { message: msg },
        });
      })
      .catch((err) => {
        toast.error("Email/Password does not match", {
          position: "top-right",
          autoClose: 1500,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
        //Failure action generated
        dispatch({
          type: `${ActionConst.USER_LOGIN}_FAILURE`,
          payload: { error: "Login Failed" },
        });
      });
  };
};

export const logout = () => {
  return async (dispatch) => {
    //action Request send to the server
    dispatch({ type: `${ActionConst.USER_LOGOUT}_REQUEST` });
    if (localStorage.getItem("token") !== "") {
      localStorage.clear();
      dispatch({
        type: `${ActionConst.USER_LOGOUT}_SUCCESS`,
        payload: { message: "logout" },
      });
    } else {
      dispatch({
        type: `${ActionConst.USER_LOGOUT}_FAILURE`,
        payload: { error: "failed" },
      });
    }
  };
};
