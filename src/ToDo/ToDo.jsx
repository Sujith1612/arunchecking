import React, { useState } from "react";

export default function ToDo() {
const [todo,setTodo]=useState([]);
const [inputvalue,setInputvalue]=useState('')
const handleaddtodo=()=>{
  if(inputvalue.trim() !==''){
    setTodo([...todo,inputvalue])
  }
}
const handledelete=(index)=>{
const newtodos=[...todo];
newtodos.splice(index,1);
setTodo(newtodos)
}
  return <div>
 <h1>todo list</h1>
 <input
 type="text"
 placeholder="Add a todo..."
 value={inputvalue}
 onChange={(e)=>setInputvalue(e.target.value)}
 />
 <button className="btn btn-primary" onClick={()=>handleaddtodo()} > Add Todo </button><br/>
 <button>
  <ol>
    {todo.map((todo,index)=>(
      <li key={index}>{todo}
      <button className="btn btn-danger" onClick={()=>handledelete(index)}> delete </button>
      </li>
    )
    )}
  </ol>
 </button>
  </div>
}
