import { useContext } from "react";
import { TodosContext } from "../store/todos-context";
import classes from "./TodoItem.module.css";


type todoItemProps ={
  text: string;
  id:string
}

const TodoItem = (props:todoItemProps) => {
  const todoctx = useContext(TodosContext);
  return (
    <li className={classes.item} onClick={()=>todoctx.removeTodo(props.id)}>
      {props.text}
    </li>
  );
};

export default TodoItem;
