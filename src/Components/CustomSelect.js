import React from "react";
import Select from "react-select";



export const CustomSelect = ({className,placeholder,field,form,options,isMulti = false}) => {
console.log("Options == ",options)
let options2 = options;
    const onChange = (option) => {
      console.log("Option = ",option)
      form.setFieldValue(
        field.name,
        isMulti
          ? (option ).map((item) => item.label)
          : (option).label
      );
    };
    const getValue = () => {
      if (options2) {
        console.log("options2 == ",options2)
        let check =  options2.filter(option => field.value.indexOf(option.label) >= 0)
        console.log("Check", check)
        return isMulti
          ? options2.filter(option => field.value.indexOf(option.label) >= 0)
          : options2.find(option => option.label === field.value);
      } 
      // else {
      //   return isMulti ? [] : ("");
      // }
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
  