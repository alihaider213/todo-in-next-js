"use client";
import React, { useState } from "react";
import "./todo.css"

export default function Todo() {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([
    { todoText: "todo 1", completed: false, id: Math.random().toString().slice(2) },
    { todoText: "todo 2", completed: true, id: Math.random().toString().slice(2) },
    { todoText: "todo 3", completed: true, id: Math.random().toString().slice(2) },
    { todoText: "todo 4", completed: false, id: Math.random().toString().slice(2) },
  ]);

  const onClickHandler = (meraElm: any) => {
    console.log("meraElm", meraElm);

    // map runs on array, and returns an array
    const newTodos = todos.map((todo) => {
      console.log("todo: ", todo);
      if (todo.todoText == meraElm.todoText) {
        todo.completed = !todo.completed; // false he to true krdo, true he to false kardo
      }
      return todo;
    });

    console.log(newTodos);
    setTodos(newTodos);
  };
  const addTodo = () => {
    if (todo.trim() !== "") {
      const newTodo = { todoText: todo, completed: false, id: Math.random().toString().slice(2) };
      const newTodos = [...todos, newTodo];
      setTodos(newTodos);
      setTodo("");
    } else {
      alert("Please enter a valid value")
    }
  };

  const deleteTodo = (meraTodo: any) => {
    const newTodos = todos.filter((todo) => {
      return meraTodo.id !== todo.id
    });
    console.log("old todos", todos, "new todos", newTodos);
    setTodos(newTodos);
  };
  return (
    <div className="body">
      <h1>Todo App</h1>
      <div className="d-flex">
        <input
          placeholder="add todo text"
          value={todo}
          onChange={(e) => {
            setTodo(e.target.value);
          }}
          className='input'
        />
        <button onClick={addTodo} className="button">Add</button>
      </div>
      <ul>
        {todos.map((elm) => {
          return (
            <label
              key={elm.id}
              forHtml={elm.id}
            >
              <li
                style={{
                  color: elm.completed ? "green" : "orange",
                  fontStyle: "oblique",
                  listStyle: "none",
                }}
              >
                <input
                  type="checkbox"
                  checked={elm.completed}
                  onChange={() => {
                    onClickHandler(elm);
                  }}
                  id={elm.id}
                />
                {elm.todoText}
              </li>
              <button
                onClick={() => {
                  deleteTodo(elm);
                }}
                className="deleteBtn"
              >
                Delete
              </button>
            </label>
          );
        })}
      </ul>
    </div>
  );
}
