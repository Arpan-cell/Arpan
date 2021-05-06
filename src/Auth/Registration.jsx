// import React from "react";
// import { useState } from "react";
// import { Container } from "react-bootstrap";
// import { useDispatch } from "react-redux";
// import { signup } from "../Actions/Auth.Action";
// export default function Login() {
//   const dispatchMethod = useDispatch();
//   const [reg, setReg] = useState({
//     firstname: "",
//     lastname: "",
//     email: "",
//     password: "",
//   });

//   const [error, setError] = useState({});
//   const validation = (reg) => {
//     let error = {};
//     if (!reg.firstname) {
//       error.firstname = "First name is required";
//     }
//     if (!reg.lastname) {
//       error.lastname = "Last name is required";
//     }
//     if (!reg.email) {
//       error.email = "Email is required";
//     } else if (
//       !/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
//         reg.email
//       )
//     ) {
//       error.email = "email is invalid";
//     }
//     if (!reg.password) {
//       error.password = "password is required";
//     } else if (!/(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}/.test(reg.password)) {
//       error.password = "Invalid password";
//     }
//     return error;
//   };

//   const onChangeHandler = (e) => {
//     let { name, value } = e.target;
//     setReg({ ...reg, [name]: value });
//   };

//   const submitHandler = (e) => {
//     e.preventDefault();
//     setError(validation(reg));
//     console.log(reg);
//     let user = {
//       firstname: reg.firstname,
//       lastname: reg.lastname,
//       email: reg.email,
//       password: reg.password
//     };
//     console.log(user);
//     dispatchMethod(signup(user));
//     if(validation){
//       alert("Data not registered");
//     }
//   };
//   return (
//     <>
//       <div className="center">
//         <Container>
//           <div className="main">
//             <h4>Registration Form</h4>

//             <form onSubmit={submitHandler}>

//             <div className="text_field">
//                 <input
//                   type="text"
//                   name="firstname"
//                   autoComplete="off"
//                   placeholder="First Name"
//                   onChange={onChangeHandler}
//                 />
//                 <p>{error.firstname}</p>

//               </div>
//               <div className="text_field">
//                 <input
//                   type="text"
//                   name="lastname"
//                   autoComplete="off"
//                   placeholder="Last Name"
//                   onChange={onChangeHandler}
//                 />
//                 <p>{error.lastname}</p>

//               </div>
//               <div className="text_field">
//                 <input
//                   type="text"
//                   name="email"
//                   autoComplete="off"
//                   placeholder="Email"
//                   onChange={onChangeHandler}
//                 />
//                 <p>{error.email}</p>

//               </div>

//               <div className="text_field">
//                 <input
//                   type="Password"
//                   name="password"
//                   placeholder="Password"
//                   onChange={onChangeHandler}
//                 />
//                 <p>{error.password}</p>
//                 {/* <label>Password</label> */}
//               </div>

//               <button className="btn" type="submit">
//                 Register
//               </button>
//             </form>
//           </div>
//         </Container>
//       </div>
//     </>
//   );
// }

import React from "react";
import './Registration.css'
import { useFormik } from "formik";
import * as yup from "yup";
import { useDispatch } from "react-redux";
import { signup } from "../Actions/Auth.Action";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";

const validationSchema = yup.object({
  firstname: yup
    .string("Enter your Firstname")
    .required("Firstname is required"),
  lastname: yup.string("Enter your Lastname").required("Lastname is required"),
  email: yup
    .string("Enter your email")
    .email("Enter a valid email")
    .required("Email is required"),
  password: yup
    .string("Enter your password")
    .min(8, "Minimum 8 characters")
    .required("Password is required"),
});

const Registration = () => {
  const dispatchMethod = useDispatch();
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      firstname: "",
      lastname: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      console.log("values", values);
      //   alert(JSON.stringify(values, null, 2));
      dispatchMethod(signup(values));
    },
  });

  return (
    <div className='form'>
      <form onSubmit={formik.handleSubmit}>
        <TextField
          id="standard-basic"
          name="firstname"
          label="Firstname"
          autoComplete='off'
          value={formik.values.firstname}
          onChange={formik.handleChange}
          error={formik.touched.firstname && Boolean(formik.errors.firstname)}
          helperText={formik.touched.firstname && formik.errors.firstname}
        /> <br/>
        <TextField
          id="standard-basic"
          name="lastname"
          label="Lastname"
          autoComplete='off'
          value={formik.values.lastname}
          onChange={formik.handleChange}
          error={formik.touched.lastname && Boolean(formik.errors.lastname)}
          helperText={formik.touched.lastname && formik.errors.lastname}
        /> <br/>
        <TextField
          id="standard-basic"
          name="email"
          label="Email"
          autoComplete='off'
          value={formik.values.email}
          autoComplete="off"
          onChange={formik.handleChange}
          error={formik.touched.email && Boolean(formik.errors.email)}
          helperText={formik.touched.email && formik.errors.email}
        /> <br/>
        <TextField
          id="standard-basic"
          name="password"
          label="Password"
          autoComplete='off'
          type="password"
          value={formik.values.password}
          onChange={formik.handleChange}
          error={formik.touched.password && Boolean(formik.errors.password)}
          helperText={formik.touched.password && formik.errors.password}
        /> <br/>
        
        <Button color="primary" variant="contained"  type="submit">
          Submit
        </Button>
        
      </form>
    </div>
  );
};

export default Registration;
