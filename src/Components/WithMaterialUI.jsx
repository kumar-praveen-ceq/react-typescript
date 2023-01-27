import React from 'react';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { Button, TextField } from '@mui/material';


const countryNameRegex = /[A-Za-z]/g;
const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;


const validationSchema = yup.object({
    email: yup
        .string('Enter your email')
        .email('Enter a valid email')
        .matches(
            emailRegex,
            {
              message: 'Enter a valid email',
              excludeEmptyStrings: true
            }
          )
        .required('Email is required field'),
    // password: yup
    //     .string('Enter your password')
    //     .min(8, 'Password should be of minimum 8 characters length')
    //     .required('Password is required field'),
    password: yup.string('Enter your password').required('Password is required')
        .min(8, 'Password must be at least 8 characters'),
    confirmPassword: yup.string()
        .when('password', (password, schema) => {
          if (password) return schema.required('Confirm Password is required');
        })
        .oneOf([yup.ref('password')], 'Passwords must match'),
    firstName: yup
        .string("Enter your Firstname")
        .max(20, 'Firstname can be of minimum 20 characters length')
        .required('Firstname is required field'),
    lastName: yup
        .string("Enter your Lastname")
        .max(20, 'Lastname can be of minimum 20 characters length')
        .required('Lastname is required field'),
    age: yup
        .number("Enter you Age")
        .required("Age is required field"),
    location: yup.string()
        .required('Enter Country')
        .min(3, `country name must contain at least 3 characters`)
        .matches(
            countryNameRegex,
            {
                message: 'The country name may contain only letters',
                excludeEmptyStrings: true
             }
        )
});

const WithMaterialUI = () => {
    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
            firstName: '',
            lastName: '',
            age: '',
            location: '',
        },
        validationSchema: validationSchema,
        onSubmit: (values) => {
            alert(JSON.stringify(values, null, 2));
            console.log(values)
        },
    });

    return (
        <div style={{backgroundColor:'#0077b6',padding:'10px'}}>
            <h1>With Material UI!</h1>
            <form onSubmit={formik.handleSubmit}>
                <div className='field_container'>

                    <TextField
                        id="firstName"
                        name="firstName"
                        label="Firstname"
                        value={formik.values.firstName}
                        onChange={formik.handleChange}
                        error={formik.touched.firstName && Boolean(formik.errors.firstName)}
                        helperText={formik.touched.firstName && formik.errors.firstName}
                        variant='outlined'
                    />
                </div>

                <div className='field_container'>
                    <TextField
                        id="lastName"
                        name="lastName"
                        label="Lastname"
                        value={formik.values.lastName}
                        onChange={formik.handleChange}
                        error={formik.touched.lastName && Boolean(formik.errors.lastName)}
                        helperText={formik.touched.lastName && formik.errors.lastName}
                        variant='outlined'
                    />
                </div>

                <div className='field_container'>
                    <TextField
                        id='age'
                        name='age'
                        label='Age'
                        value={formik.values.age}
                        onChange={formik.handleChange}
                        error={formik.touched.lastName && Boolean(formik.errors.age)}
                        helperText={formik.touched.age && formik.errors.age}
                        variant='outlined'
                    />
                </div>
                <div className='field_container'>

                    <TextField
                        id='location'
                        name='location'
                        label='Country'
                        value={formik.values.location}
                        onChange={formik.handleChange}
                        error={formik.touched.location && Boolean(formik.errors.location)}
                        helperText={formik.touched.location && formik.errors.location}
                        variant='outlined'
                    />
                </div>
                <div className='field_container'>
                    <TextField
                        id="email"
                        name="email"
                        label="Email"
                        value={formik.values.email}
                        onChange={formik.handleChange}
                        error={formik.touched.email && Boolean(formik.errors.email)}
                        helperText={formik.touched.email && formik.errors.email}
                        variant='outlined'
                    />
                </div>

                <div className='field_container'>
                    <TextField
                        id="password"
                        name="password"
                        label="Password"
                        type="password"
                        value={formik.values.password}
                        onChange={formik.handleChange}
                        error={formik.touched.password && Boolean(formik.errors.password)}
                        helperText={formik.touched.password && formik.errors.password}
                        variant='outlined'
                    />
                </div>
                <div className='field_container'>
                    <TextField
                        id="confirmPassword"
                        name="confirmPassword"
                        label="Confirm Password"
                        type="password"
                        value={formik.values.confirmPassword}
                        onChange={formik.handleChange}
                        error={formik.touched.confirmPassword && Boolean(formik.errors.confirmPassword)}
                        helperText={formik.touched.confirmPassword && formik.errors.confirmPassword}
                        variant='outlined'
                    />
                </div>
                <div className='field_container'>
                    <Button color="primary" variant="contained" type="submit">
                        Submit
                    </Button>
                </div>
            </form>
        </div>
    );
};

export default WithMaterialUI;