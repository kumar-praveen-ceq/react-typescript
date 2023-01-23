import  { useContext } from "react";
import { TodosContext } from "../store/todos-context";
import TodoItem from "./TodoItem";
import classes from "./todos.module.css";

const Todos = () => {
  const todoctx = useContext(TodosContext);
  return (
    <ul className={classes.todos}>
      {todoctx.items.length > 0 ? todoctx.items.map((i) => {
        return (
          <TodoItem
            text={i.text}
            id={i.id}
            key={i.id}
          />
        );
      }):<h3>No Todos</h3>}
    </ul>
  );
};

export default Todos;
