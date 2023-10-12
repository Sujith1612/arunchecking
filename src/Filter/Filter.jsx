import React, { useEffect, useState } from 'react'
import Axios from 'axios'

export default function Parent() {
 const [user,setUser]=useState([])
 const [name,setName] = useState('')
  useEffect(()=>{
Axios.get('https://jsonplaceholder.typicode.com/users').then(res=>
setUser(res.data))
  })
  return (
    <div>
      <h1>search Here</h1>
      <input type='text'
      placeholder='search'
      value={name}
      onChange={(e)=>setName(e.target.value)}/>
     {name.length>0 && user.map((user)=>(
      <h3>{user.name.toLowerCase().includes(name.toLowerCase()) ? user.name : " "}</h3>
      
     ))}
    
    </div>
  )
}
