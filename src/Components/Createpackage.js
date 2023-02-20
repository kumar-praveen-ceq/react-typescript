// import axios from 'axios';
import { Field, FieldArray, Form, Formik, useField } from 'formik';
// import React, { useEffect, useState } from 'react'
import * as Yup from 'yup';
import osJson from "../os.json"
import CustomSelect from './CustomSelect';
const FriendArrayErrors = errors =>
typeof errors.create_program === 'string' ? <div>{errors.create_program}</div> : null;


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

const Createpackage = () => {
  // const [jsonData, setJsonData] = useState([]);
  // const callApi = async () => {
  //   const apiCall = await fetch("https://rsmservicenowintegration.azurewebsites.net/api/httptriggeredgetallinfo").then((data) => data.json())
  //   console.log("ApiCall", apiCall)
  //   const response = await axios.get("https://rsmservicenowintegration.azurewebsites.net/api/httptriggeredgetallinfo");
  //   setJsonData([...response]);
  // }
  // useEffect(() => {
  //   callApi();
  //   console.log("called")
  // }, [])
  // console.log(jsonData)
  return (
    <>
      <div>
        <h1>Form with json data</h1>
        <Formik
          initialValues={{
            country_code: "",
            package_name: "",
            scope_availability: "",
            software_source_location: "",
            functionality_description: "",
            operating_system: '',
            create_program: [{ name_of_program: '', command_line: '' }],
          }}

          validationSchema={Yup.object({
            country_code: Yup.string()
              .required("Country Code is Required"),
            package_name: Yup.string()
              .required(),
            scope_availability: Yup.string()
              .required(),
            software_source_location: Yup.string()
              .required(),
            functionality_description: Yup.string()
              .required(),
            operating_system: Yup.array().required() || Yup.string().required(),
            create_program: Yup.array().of(
              Yup.object().shape({
                name_of_program: Yup.string()
                  .required("Name of program is required")
                  .test(
                    "unique",
                    "Program names must be unique",
                    function (value) {
                      const { create_program } = this.parent;
                      return !create_program.some(
                        (program) =>
                          program.name_of_program === value &&
                          program !== this.parent[this.path]
                      );
                    }
                  ),
                command_line: Yup.string().required("Command line is required"),
              })
            ),
          })}
          onSubmit={(values) => {
            alert(JSON.stringify(values, null, 2))
            console.log(values)
          }}
        >
          {({ values, handleSubmit }) => {
            console.log(values)
            return (
            
            <Form onSubmit={handleSubmit}>
              <MySelect
                label="Country Code"
                name="country_code"
              >
                <option value="">Select</option>
                <option value="in">India</option>
                <option value="us">US</option>
                <option value="uk">UK</option>
              </MySelect>

              <MyTextInput
                label="Package Name"
                name="package_name"
                type="text"
                placeholder="Package Name"
              />
              <MySelect
                label="Scope Availability"
                name="scope_availability"
              >
                <option value='market'>Market</option>
                <option value='global'>Global</option>
              </MySelect>
              <MyTextInput
                label="Software Source Location"
                name="software_source_location"
                type="text"
                placeholder="Software Source Location"
              />
              <MyTextInput
                label="Functionality Description"
                name="functionality_description"
                type="text"
                placeholder="Functionality Description"
              />
              {/* <MySelect
                label='Operating System' name="operating_system">
                <option value=''>Select</option>
                {osJson.map(({ label }) => {
                  return (<option value={label} key={label}>{label}</option>)
                })}
              </MySelect> */}
        <label>Operating Systems</label>
              <Field
        className="custom-select"
        name="operating_system"
        options={osJson}
        component={CustomSelect}
        placeholder="Select Operating System"
        isMulti={true}
      />
              <div>
                <h4>Create Additional Program</h4>
                <FieldArray
                  name="create_program"
                  children={arrayHelpers => (
                    <div>
                      {values.create_program && values.create_program.length > 0 && (
                        values.create_program.map((val, index) => {
                          return (
                            <div
                              key={index}>
                              <div className='create_program_form'>
                                <MyTextInput label='Name of Program' type="text" placeholder="Name of program" name={`create_program.${index}.name_of_program`} values={val} />
                                <FriendArrayErrors/>
                                <MyTextInput label='Command line' type="text" placeholder="Command line" name={`create_program.${index}.command_line`} values={val} />
                                <FriendArrayErrors/>
                              </div>
                              {values.create_program.length > 1 &&
                              <button type='button' onClick={() => arrayHelpers.remove(index)}>
                                Delete
                              </button>
                              }
                            </div>
                          )
                        })
                        )}
                      {values.create_program.length <= 4 && <button type='button' onClick={() => arrayHelpers.push({ name_of_program: "", command_line: "" })}>
                        Create Program
                      </button>}
                        <div>

                      <button type='submit'>Submit</button>
                        </div>
                    </div>

                  )}
                />
              </div>
             
            </Form>
          )}}
        </Formik>
      </div>
    </>
  )
}

export default Createpackage