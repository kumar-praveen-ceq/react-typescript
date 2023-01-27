import React from "react";
import { useFormik } from "formik";
import "../App.css";

const validate = values => {
  const errors = {};
  const checkPass = values.password === values.confirmPassword;

  if (!values.firstName) {
    errors.firstName = 'Firstname is Required';
  } else if(values.firstName.length === 1){
    errors.firstName = "Come'n your name is not just "+values.firstName
  }  else if (values.firstName.length > 15) {
    errors.firstName = 'Must be 15 characters or less';
  }

  if (!values.lastName) {
    errors.lastName = 'Lastname is Required';
  } else if (values.lastName.length > 20) {
    errors.lastName = 'Must be 20 characters or less';
  }

  if (!values.email) {
    errors.email = 'Email is Required';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid email address';
  }

  if(!values.password){
    errors.password = "Password Required"
  }else if(values.password.length<8){
    errors.password = "Password should be atleast of 8 characters"
  }
  if(!values.confirmPassword && values.password){
    errors.confirmPassword = "Confirm Password is Required"
  } else if(!checkPass){
    errors.confirmPassword = "Password did not match"
  }

  return errors;
};

const SignupForm = () => {
  const formik = useFormik({
    initialValues: { email: "", firstName: '', lastName: "", password:"", confirmPassword:""},
    
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
      console.log(values)
    }
  });
  return (
    <form onSubmit={formik.handleSubmit}>
      <h1>Sign Up!</h1>
      <h5>Sign up for social media</h5>
      <label htmlFor="firstName">Firstname</label>
      <input
        id="firstName"
        name="firstName"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.firstName}
        placeholder="Firstname"
        onBlur={formik.handleBlur}
      />
      {formik.touched.firstName && formik.errors.firstName ? (
         <div className="errors">{formik.errors.firstName}</div>
       ) : null}

      <label htmlFor="lastName">Lastname</label>
      <input
        id="lastName"
        name="lastName"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.lastName}
        placeholder="Lastname"
        onBlur={formik.handleBlur}

      />
      {formik.touched.lastName && formik.errors.lastName ? (
         <div className="errors">{formik.errors.lastName}</div>
       ) : null}

      <label htmlFor="email">Email Address</label>
      <input
        id="email"
        name="email"
        type="email"
        onChange={formik.handleChange}
        value={formik.values.email}
        placeholder="Email"
        onBlur={formik.handleBlur}
      />
      {formik.touched.email && formik.errors.email ? (
         <div className="errors">{formik.errors.email}</div>
       ) : null}

      <div className="">
        
      <label htmlFor="password">Password</label>
      <input
        id="password"
        name="password"
        type="password"
        onChange={formik.handleChange}
        value={formik.values.password}
        placeholder="Password"
        onBlur={formik.handleBlur}
      />
      {formik.touched.password && formik.errors.password ? (
         <div className="errors">{formik.errors.password}</div>
       ) : null}
      </div>
      <div className="">

      <label htmlFor="confirmPassword">Confirm Password</label>
      <input
        id="confirmPassword"
        name="confirmPassword"
        type="password"
        onChange={formik.handleChange}
        value={formik.values.confirmPassword}
        placeholder="confirm Password"
        onBlur={formik.handleBlur}
      />
      {formik.touched.confirmPassword && formik.errors.confirmPassword ? (
         <div className="errors">{formik.errors.confirmPassword}</div>
       ) : null}
      </div>
      <div>
      <button type="submit">Submit</button>
      </div>
    </form>
  );
};

export default SignupForm;