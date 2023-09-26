import React, { useState } from 'react'

export default function Silder() {
    const [user,Setuser]=useState([
        {id:1,name:"sujith",role:"devalop"},
           {id:1,name:"c",role:"tester"},
           {id:1,name:"d",role:"data"},
           {id:1,name:"ram",role:"AI"},
           {id:1,name:"ram",role:"ccna"},
    ])
    const[index,Setindex]=useState(0)
const handleadd=()=>{
  if(index==4){
    Setindex(0)
  }else{
    Setindex(index+1)
  }
}  
const handleminus=()=>{
  if(index==0){
    Setindex(4)
  }else{
    Setindex(index-1)
  }
}  
const surprise=()=>{
const fill = Math.floor(Math.random()*4)
Setindex(fill)
}
  return (
    <div className='m-3'>
      {user[index].name}
      <br/>
      {user[index].role}
      <br/>
      <button className='ms-4' onClick={handleadd}>{"<"}</button>
      <button className='ms-4'onClick={handleminus}>{">"}</button>
      <br></br>
      <button className='btn btn-primary mt-4' onClick={surprise}>surprise me</button>
      
    </div>
  )
}
