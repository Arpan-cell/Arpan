import React from 'react'
import { Redirect } from 'react-router-dom'
export default function Protectedroute(props) {
        let ProtectedCom = props.component;
        let isloggedin = window.localStorage.getItem('token')


        

        return (

                isloggedin ?
                        (<ProtectedCom />)
                        : (<Redirect to="/Login" />)




        )
}

