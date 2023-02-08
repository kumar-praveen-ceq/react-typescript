import { convertLength } from "@mui/material/styles/cssUtils";
import { FieldProps } from "formik";
import React from "react";
import Select from "react-select";



export const CustomSelect = ({
    className,
    placeholder,
    field,
    form,
    options,
    isMulti = false
  }) => {
    const onChange = (option) => {
      form.setFieldValue(
        field.name,
        isMulti
          ? (option ).map((item) => item.value)
          : (option).value
      );
      console.log("option = ",option)
    };
  console.log("Field",field)
  console.log("option",options)
    const getValue = () => {
      if (options) {
        return isMulti
          ? options.filter(option => field.value.indexOf(option) >= 0)
          : options.find(option => option === field.value);
      } else {
        return isMulti ? [] : ("");
      }
    };
  
    return (
      <Select
        className={className}
        name={field.name}
        value={getValue()}
        onChange={onChange}
        placeholder={placeholder}
        options={options}
        isMulti={isMulti}
      />
    );
  };
  
  export default CustomSelect;
  