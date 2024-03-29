// import logo from "./logo.svg";
import "./App.css";
import Header from "./MyComponents/Header";
import { Todos } from "./MyComponents/Todos";

import { Footer } from "./MyComponents/Footer";

import { AddTodo } from "./MyComponents/AddTodo";



import React, { useState, useEffect } from "react";
// import React from "react";


function App() {
  let initTodo;
  if (localStorage.getItem("todos") === null) {
    initTodo = [];
  } else {
    initTodo = JSON.parse(localStorage.getItem("todos"));
  }

  const onDelete = (todo) => {
    console.log("I am on delete of todo", todo);

    // Deleting doesnt work like this
    let index = todos.indexOf(todo);
    todos.splice(index, 1);

    setTodos(
      todos.filter((e) => {
        return e !== todo;
      })
    );

    localStorage.setItem("todos", JSON.stringify(todos));
  };

  const addTodo = (Title, desc) => {
    let sno;
    if (todos.length === 0) {
      sno = 1;
    } else {
      sno = todos[todos.length - 1].sno + 1;
    }
    console.log("I am adding this todo", Title, desc);
    const myTodo = {
      sno: sno,
      title: Title,
      desc: desc,
    };
    setTodos([...todos, myTodo]);
    console.log(myTodo);
  };

  const [todos, setTodos] = useState(initTodo);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <>
      <Header title="My Todos List" searchBar={false} />

      <AddTodo addTodo={addTodo} />
      <Todos todos={todos} onDelete={onDelete} />
      

      <Footer />
    </>
  );
}

export default App;
