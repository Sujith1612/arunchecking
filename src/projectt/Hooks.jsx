import React, { useState,useEffect } from "react";

export default function Hooks() {
  const [input,setInput]=useState("")
  const handleinput=(e)=>{
    setInput(e.target.value);
   }
  // const [show, setShow] = useState("");
  // const handlebutton = () => {
  //   setShow(!show);
  // };
  return (
    <div>
      <input type="text" onChange={handleinput} />
      <br></br>
      {input}
      <br />
      {/* {show && <h1> hii this is sujith</h1>}
      <button onClick={handlebutton}>show / hide</button> */}
    </div>
  );
}
