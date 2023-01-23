import React, { createContext, useState } from "react";
import Todo from "../models/todo";

type contextObj = {
  items: Todo[];
  addTodo: (text: string) => void;
  removeTodo: (todoId: string) => void;
  isLoggedIn:boolean ;
};

export const TodosContext = createContext<contextObj>({
  items: [],
  addTodo: (text: string) => {},
  removeTodo: (todoId: string) => {},
  isLoggedIn:false
});

export const TodoContextProvider: React.FC<{ children: React.ReactNode }> = (
  props
) => {
  const [todos, setTodos] = useState<Todo[]>([]);
  
  const todoHandler = (text: string) => {
    console.log(text);
    const newArray = [new Todo(text), ...todos];
    setTodos(newArray);
  };

  const removeHandler = (todoId: string) => {
    setTodos((prevTodos) => prevTodos.filter((i) => i.id !== todoId));
  };

  const contextValue: contextObj = {
    items: todos,
    addTodo: todoHandler,
    removeTodo: removeHandler,
    isLoggedIn:false
  };

  return (
    <TodosContext.Provider value={contextValue}>
      {props.children}
    </TodosContext.Provider>
  );
};
