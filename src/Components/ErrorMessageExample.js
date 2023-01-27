import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from "yup";

const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;

const SignupSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, 'Too Short!')
    .max(70, 'Too Long!')
    .required('Required'),
  email: Yup.string()
    .email('Invalid email')
    .matches(
      emailRegex,
      {
        message: 'Enter a valid email',
        excludeEmptyStrings: true
      }
    )
    .required('Required'),
});

export const ErrorMessageExample = () => (
  <div>
    <h3>Used Error Message Component with Yup</h3>
    <Formik
      initialValues={{
        name: '',
        email: '',
      }}
      validationSchema={SignupSchema}
      onSubmit={values => {
        // same shape as initial values
        console.log(values);
      }}
    >
      {({ errors, touched }) => (
        <Form>
          <div className='field_container'>
            <label htmlFor='name'>Name</label>
          <Field name="name" type="text"  />
           {/* {errors.name && touched.name ? (<div>{errors.name}</div>) : null} */}
         <ErrorMessage  render={msg => <div className='errors'>{msg}</div>} name="name" />
          </div>

          <div className='field_container'>
            <label htmlFor='email'>Email</label>
          <Field name="email" type="email" />
           {/* {errors.email && touched.email ? <div>{errors.email}</div> : null} */}
         <ErrorMessage render={msg => <div className='errors'>{msg}</div>} name="email" />
          </div>

          <button type="submit">Submit</button>
        </Form>
      )}
    </Formik>
  </div>
);