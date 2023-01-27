import React from 'react';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { Button, Form, InputGroup } from 'react-bootstrap';


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
    password: yup
        .string('Enter your password')
        .min(8, 'Password should be of minimum 8 characters length')
        .required('Password is required field'),
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
        .min(3, `country name must contain at least 3 characters`)
        .matches(
            countryNameRegex,
            {
                message: 'The country name may contain only letters',
                excludeEmptyStrings: true
            }
        )
});

const WithBootstrap = () => {
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
        <div style={{ backgroundColor: '#023e8a', padding: '10px' }}>
            <h1>With Bootstrap!</h1>
            <form onSubmit={formik.handleSubmit}>
                <div className='field_container'>
                    <InputGroup className='mb-3'>
                        <Form.Label>Firstname</Form.Label>
                        <Form.Control
                            id="firstName"
                            name="firstName"
                            aria-label="Firstname"
                            value={formik.values.firstName}
                            onChange={formik.handleChange}
                            placeholder='Firstname'
                            aria-describedby='firstName'
                        />
                        {formik.errors.name && formik.touched.name ? (<div>{formik.errors.name}</div>) : null}
                    </InputGroup>
                </div>

                <div className='field_container'>
                    <InputGroup className='mb-3'>
                        <Form.Label>Lastname</Form.Label>
                        <Form.Control
                            id="lastName"
                            name="lastName"
                            aria-label="Lastname"
                            value={formik.values.lastName}
                            onChange={formik.handleChange}
                            placeholder='Lastname'
                            aria-describedby='lastName'
                        />
                        {formik.errors.name && formik.touched.name ? (<div>{formik.errors.name}</div>) : null}
                    </InputGroup>
                </div>

                <div className='field_container'>
                    <InputGroup className='mb-3'>
                        <Form.Label>Age</Form.Label>
                        <Form.Control
                            id='age'
                            name='age'
                            aria-label='Age'
                            value={formik.values.age}
                            onChange={formik.handleChange}
                            placeholder='Age'
                            aria-describedby='age'
                        />
                        {formik.errors.name && formik.touched.name ? (<div>{formik.errors.name}</div>) : null}
                    </InputGroup>
                </div>
                <div className='field_container'>

                    <InputGroup className='mb-3'>
                        <Form.Label>Location</Form.Label>
                        <Form.Control
                            id='location'
                            name='location'
                            aria-label='location'
                            value={formik.values.location}
                            onChange={formik.handleChange}
                            placeholder='Location'
                            aria-describedby='location'
                        />
                        {formik.errors.name && formik.touched.name ? (<div>{formik.errors.name}</div>) : null}
                    </InputGroup>
                </div>
                <div className='field_container'>
                    <InputGroup className='mb-3'>
                        <Form.Label>Email</Form.Label>
                        <Form.Control
                            id="email"
                            name="email"
                            aria-label="Email"
                            value={formik.values.email}
                            onChange={formik.handleChange}
                            placeholder='Email'
                            aria-describedby='email'
                        />
                        {formik.errors.name && formik.touched.name ? (<div>{formik.errors.name}</div>) : null}
                    </InputGroup>
                </div>

                <div className='field_container'>
                    <InputGroup className='mb-3'>
                        <Form.Label>Password</Form.Label>
                        <Form.Control
                            id="password"
                            name="password"
                            aria-label="Password"
                            type="password"
                            value={formik.values.password}
                            onChange={formik.handleChange}
                            placeholder='Password'
                            aria-describedby='password'
                        />
                        {formik.errors.name && formik.touched.name ? (<div>{formik.errors.name}</div>) : null}
                    </InputGroup>
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

export default WithBootstrap;