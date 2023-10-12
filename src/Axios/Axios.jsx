import React, { useEffect, useState } from "react";
import Axios from "axios";
var id=11
export default function Parent() {
  const [user, setUser] = useState([]);
  const [name, setName] = useState('');
  const [triigger,setTrigger]= useState(false)
  useEffect(() => {
    Axios.get("https://jsonplaceholder.typicode.com/users/").then((res) => {
      setUser(res.data);
    });
  },[]);
  const postuser = () => {
    Axios.post(`https://jsonplaceholder.typicode.com/users`, {id:id++,name:name})
     .then((res) => setUser([...user,res.data]));
  };
  return (
    <div>
      {user.map((user,i) => (
        <h3 key={i}>{user.name}</h3>
      ))}
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      ></input>
      <br />
      <br />
      <button onClick={postuser}>put</button>
    </div>
  );
}
