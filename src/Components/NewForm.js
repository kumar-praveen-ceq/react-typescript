import React from 'react';
import { Formik, Form, useField } from 'formik';
import * as Yup from 'yup';

const MyTextInput = ({ label, ...props }) => {
  // useField() returns [formik.getFieldProps(), formik.getFieldMeta()]
  // which we can spread on <input>. We can use field meta to show an error
  // message if the field is invalid and it has been touched (i.e. visited)
  const [field, meta] = useField(props);
  return (
    <>
      <label htmlFor={props.id || props.name}>{label}</label>
      <input className="text-input" {...field} {...props} />
      {meta.touched && meta.error ? (
        <div className="error">{meta.error}</div>
      ) : null}
    </>
  );
};

const MyCheckbox = ({ children, ...props }) => {
  // React treats radios and checkbox inputs differently other input types, select, and textarea.
  // Formik does this too! When you specify `type` to useField(), it will
  // return the correct bag of props for you -- a `checked` prop will be included
  // in `field` alongside `name`, `value`, `onChange`, and `onBlur`
  const [field, meta] = useField({ ...props, type: 'checkbox' });
  return (
    <div>
      <label className="checkbox-input">
        <input type="checkbox" {...field} {...props} />
        {children}
      </label>
      {meta.touched && meta.error ? (
        <div className="error">{meta.error}</div>
      ) : null}
    </div>
  );
};

const MyRadio = ({children,...props}) => {
  const [field, meta] = useField({ ...props, type: "radio"});
  return(
    <div>
      <label className='radio-input'>
          <input type='radio' {...field} {...props} />
          {children}
      </label>
      {meta.touched && meta.error?(
        <div className='error'>{meta.error}</div>
      ) : null}
    </div>
  )
}

const MySelect = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <div>
      <label htmlFor={props.id || props.name}>{label}</label>
      <select {...field} {...props} />
      {meta.touched && meta.error ? (
        <div className="error">{meta.error}</div>
      ) : null}
    </div>
  );
};

// And now we can use these
const NewForm = () => {
  return (
    <>
      <h1>Sign up!</h1>
      <h5>Validation With Yup!</h5>
      <Formik
        initialValues={{
          firstName: '',
          lastName: '',
          email: '',
          phone: '',
          gender: '',
          acceptedTerms: false, // added for our checkbox
          jobType: '', // added for our select
        }}
        validationSchema={Yup.object({
          firstName: Yup.string()
            .max(15, 'Must be 15 characters or less')
            .required('Firstname is Required'),
          lastName: Yup.string()
            .max(20, 'Must be 20 characters or less')
            .required('Lastnmae is Required'),
          email: Yup.string()
            .email('Invalid email address')
            .required('Email is Required'),
          gender: Yup.string().required("Gender is Requiered"),
          phone: Yup.string().required("Mobile No is required").min(10,"Number should be of 10 digits").max(10,"Number should be of 10 digits"),
          acceptedTerms: Yup.boolean()
            .required('Required')
            .oneOf([true], 'You must accept the terms and conditions.'),
          jobType: Yup.string()
            .oneOf(
              ['designer', 'development', 'product', 'other'],
              'Invalid Job Type'
            )
            .required('Required'),
        })}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 400);
        }}
      >
        <Form >
          <MyTextInput
            label="First Name"
            name="firstName"
            type="text"
            placeholder="Jane"
          />

          <MyTextInput
            label="Last Name"
            name="lastName"
            type="text"
            placeholder="Doe"
          />
          
          <MyRadio 
            label="Male"
            name='gender'
            value="male"
            type="radio"
          >Male</MyRadio>

          <MyRadio 
            label="Female"
            name='gender'
            value="female"
            type="radio"
          >Female</MyRadio>

          <MyRadio 
            label="Other"
            name='gender'
            value="other"
            type="radio"
          >Other</MyRadio>
          <MyTextInput
            label="Mobile Number"
            name="phone"
            type="text"
            placeholder="eg.8888888888"
          />


          <MyTextInput
            label="Email Address"
            name="email"
            type="email"
            placeholder="jane@formik.com"
          />

          <MySelect label="Job Type" name="jobType">
            <option value="">Select a job type</option>
            <option value="designer">Designer</option>
            <option value="development">Developer</option>
            <option value="product">Product Manager</option>
            <option value="other">Other</option>
          </MySelect>

          <MyCheckbox name="acceptedTerms">
            I accept the terms and conditions
          </MyCheckbox>

          <button type="submit">Submit</button>
        </Form>
      </Formik>
    </>
  );
};

export default NewForm;