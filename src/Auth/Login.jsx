// import React from 'react';
// import { useState } from 'react'
// import { Container } from 'react-bootstrap';
// import {useDispatch} from 'react-redux';
// import {signin} from '../Actions/Auth.Action'
// export default function Login() {
//     const dispatchMethod = useDispatch();
//   const [reg, setReg] = useState({
//     email: "",
//     password: "",
//   })

//   const [error, setError] = useState({})
//   const validation = (reg) => {
//     let error = {}
//     if (!reg.email) {
//       error.email = "Email is required"
//     }
//     else if (!/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(reg.email)) {
//       error.email = "email is invalid"
//     }
//     if (!reg.password) {
//       error.password = "password is required"
//     }
//     else if (!/(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}/.test(reg.password)) {
//       error.password = 'Invalid password'
//     }
//     return error;
//   }

//   const onChangeHandler = (e) => {
//     let { name, value } = e.target
//     setReg({ ...reg, [name]: value })
//   }

//   const submitHandler = (e) => {
//     e.preventDefault()
//     setError(validation(reg))
//     console.log(reg);
//     let user = { email: reg.email, password: reg.password }
//     console.log(user);
//     dispatchMethod(signin(user));

//   }
//   return (
//     <>

//       <div className="center">
//         <Container>

//           <div className="main">

//             <h4>Login Form</h4>

//             <form onSubmit={submitHandler}>
//               <div className="text_field">
//                 <input type="text" name="email" autoComplete="off" placeholder='Email'
//                   onChange={onChangeHandler} />
//                 <p>{error.email}</p>

//               </div>

//               <div className="text_field">
//                 <input type="Password" name="password" placeholder='Password'
//                   onChange={onChangeHandler} />
//                 <p>{error.password}</p>

//               </div>

//               <button className="btn" type='submit'>Login</button>

//             </form>

//           </div>

//         </Container>
//       </div>

//     </>
//   )
// }

import React from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import { useDispatch } from "react-redux";
import { signin } from "../Actions/Auth.Action";
import { Row, Col } from "react-bootstrap";


const validationSchema = yup.object({
  email: yup
    .string("Enter your email")
    .email("Enter a valid email")
    .required("Email is required"),
  password: yup
    .string("Enter your password")
    .min(8, "Minimum 8 characters")
    .required("Password is required"),
});

const Login = () => {
  const dispatchMethod = useDispatch();
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      dispatchMethod(signin(values));
      //   alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
       
        <TextField
          id="email"
          name="email"
          label="Email"
          value={formik.values.email}
          onChange={formik.handleChange}
          error={formik.touched.email && Boolean(formik.errors.email)}
          helperText={formik.touched.email && formik.errors.email}
        />
        <br />
        <TextField
          id="password"
          name="password"
          label="Password"
          type="password"
          value={formik.values.password}
          onChange={formik.handleChange}
          error={formik.touched.password && Boolean(formik.errors.password)}
          helperText={formik.touched.password && formik.errors.password}
        />
        <br />
        <Button color="primary" variant="contained" type="submit">
          Submit
        </Button>
      </form>
    </div>
  );
};

export default Login;
