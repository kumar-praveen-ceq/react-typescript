import React from "react";
import { Formik, Field, FieldArray } from "formik";
import * as Yup from "yup";

const CreateForm = () => {
  const initialValues = {
    programs: [{ name_of_program: "", command_line: "" }],
  };

  const validationSchema = Yup.object().shape({
    programs: Yup.array().of(
      Yup.object().shape({
        name_of_program: Yup.string()
          .required("Name of program is required")
          .test(
            "unique",
            "Program names must be unique",
            function (value) {
              const { programs } = this.parent || {};
              if (programs) {
                console.log(programs)
                return programs.every(
                  (program, index) =>
                    program.name_of_program !== value || index === this.path
                );
              } else {
                return true;
              }
            }
          ),
        command_line: Yup.string().required("Command line is required"),
      })
    ),
  });  

  const handleSubmit = (values) => {
    console.log(values);
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {({ values, errors, touched, handleSubmit }) => (
        <form onSubmit={handleSubmit}>
          <FieldArray name="programs">
            {({ push, remove }) => (
              <>
                {values.programs.map((program, index) => (
                  <div key={index}>
                    <Field name={`programs[${index}].name_of_program`} />
                    {errors.programs &&
                      errors.programs[index] &&
                      touched.programs &&
                      touched.programs[index] &&
                      errors.programs[index].name_of_program && (
                        <div>{errors.programs[index].name_of_program}</div>
                      )}
                    <Field name={`programs[${index}].command_line`} />
                    {errors.programs &&
                      errors.programs[index] &&
                      touched.programs &&
                      touched.programs[index] &&
                      errors.programs[index].command_line && (
                        <div>{errors.programs[index].command_line}</div>
                      )}
                    <button type="button" onClick={() => remove(index)}>
                      Remove
                    </button>
                  </div>
                ))}
                <button type="button" onClick={() => push({ name_of_program: "", command_line: "" })}>
                  Add Program
                </button>
              </>
            )}
          </FieldArray>
          <button type="submit">Submit</button>
        </form>
      )}
    </Formik>
  );
};

export default CreateForm;
