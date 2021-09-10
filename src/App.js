import React from "react";
import AddTodo from "./Components/AddTodo";
import TodoList from "./Components/todoList";
import TodoProvider from "./Contexts/TodoContext.jsx";

const App = () => {
  return (
    <div>
      <TodoProvider>
        <TodoList></TodoList>
        <AddTodo></AddTodo>
      </TodoProvider>
    </div>
  );
};
export default App;
