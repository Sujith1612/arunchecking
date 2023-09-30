import React, { useEffect, useState } from 'react'
import Axios from 'react'

export default function Parent() {
  const [user,setUser]=useState([])
  useEffect(()=>{
    Axios.get('https://jsonplaceholder.typicode.com/users').than(res=> setUser(res.data))
  })

  return (
    <div>
      {user.map((item)=>(
        <li key={item.id}>{item.name}</li>
      ))}
      
    </div>
  )
}


