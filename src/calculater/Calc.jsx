import React, { useState } from "react";

export default function About() {
  const [input, setInput] = useState("");
  const [result, setresult] = useState("");
  const handlecalc = () => {
    try {
      setresult(eval(input));
    } catch (error) {
      setresult("error");
    }
  };
  const handlechange=(e)=>{
    setInput(e.target.value)
  }

  return <div>
    <input
    type="text"
    placeholder="enter ur expression"
    value={input}
    onChange={handlechange}
    />
    <button className="btn btn-primary" onClick={handlecalc}>=</button>
    <div>
      <h1>result:{result}</h1>
    </div>
  </div>;
}
