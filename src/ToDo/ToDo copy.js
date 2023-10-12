import React, {  useState }  from "react";


export default function Parent() {
const [id,setId]=useState('');
const [name,setName]=useState('');
const [age,setAge]=useState('');
const [emp,setEmp]=useState([{
  id:1,name:'sujith',age:'23'
}]);
const handleAdd=()=>{
  setEmp([...emp,{id:id,name:name,age:age}])
  setId('');setAge('');setName('')
}
const handledid=(e)=>{
setEmp(emp.filter(e=>e.id !== id))
}
const handledelete=()=>{
  setEmp([])
}

  return (
    <div>
     <input type="text" placeholder="enter id"
     value={id} onChange={e=>setId(e.target.value)}/>
     <br/><br/>
     <input type="text" placeholder="enter name"
     value={name} onChange={e=>setName(e.target.value)}/>
     <br/><br/>
     <input type="text" placeholder="enter age..."
     value={age} onChange={e=>setAge(e.target.value)}/>
     <br/><br/>

     <button onClick={handleAdd}>Add</button>
     <button onClick={handledelete}>Delete</button>
     <br/><br/>
     {emp.map((item)=>(
      <div>{item.id} {item.name} {item.age} <button onClick={(e) =>{
        handledid(e.id)
      }}>x</button> 
      </div>
     ))}
    </div>
  );
}
