import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import axios from 'axios';
export default function Todo() {
  const [todo, setTodo] = useState([
    { id: 1, task: "practise" },
    { id: 2, task: "repeat" },
    { id: 3, task: "sleep" },
    { id: 4, task: "repeat" },
  ]);
  const [input, setInput] = useState([]);
  const handlechange = (e) => {
    setInput(e.target.value);
  };
  const Addtask = () => {
    setTodo([...todo, { id: uuidv4(), task: input }]);
    setInput([]);
  };
  const removetask = (deleteid) => {
    const filterdata = todo.filter((todo) => todo.id !== deleteid);
    setTodo(filterdata);
  };
  const handleupdate = (index) => {
    const update = prompt("update ur task", todo[index].task);
    let copy = [...todo];
    copy[index].task = update;
    setTodo(copy);
  };
  return (
    <div className="todo">
      <h1>Todo application</h1>
      <input className="task" value={input} onChange={handlechange} />

      <button  className="btn btn-success ms-3" onClick={Addtask}>
        Add list
      </button>
      {todo.map((to, i) => (
        <ul>
          <li key={to.i}>{to.task}</li>
          <button className="btn btn-primary" onClick={() => removetask(to.id)}>
            delete
          </button>
          <button
            className="btn btn-secondary ms-3"
            onClick={() => handleupdate(i)}
          >
            update
          </button>
        </ul>
      ))}
    </div>
  );
}
