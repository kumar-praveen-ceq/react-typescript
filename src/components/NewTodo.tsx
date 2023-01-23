import { useContext, useRef } from "react";
import { TodosContext } from "../store/todos-context";
import classes from "./NewTodo.module.css";


const NewTodo = () => {
  const todoctx = useContext(TodosContext);
  const textRef = useRef<HTMLInputElement>(null);

  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault();
    const enteredValue = textRef.current!.value;
    if (enteredValue.trim().length === 0) {
      return;
    }
    todoctx.addTodo(enteredValue);
    textRef.current!.value = "";
  };

  const handleChangeHandler = (event:React.ChangeEvent<HTMLInputElement>)=>{
    console.log(event.target.value);  
  }

  const MouseEventHandler =(event:React.MouseEvent<HTMLInputElement>)=>{
    console.log("Hello");
  }
  
  return (
    <form onSubmit={submitHandler} className={classes.form}>
      <label htmlFor="text">Text</label>
      <input type="text" name="text" id="text" ref={textRef} placeholder="Enter new todos" onChange={handleChangeHandler} onMouseEnter={MouseEventHandler}/>
      <button>Add Todo</button>
    </form>
  );
};

export default NewTodo;
