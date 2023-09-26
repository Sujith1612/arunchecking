import React, { useState } from "react";

function Practise(props) {
  const [count, setcount] = useState(0);
  const [price, setprice] = useState(150);
  const handleclick = () => {
    setcount(count - 1);
  };
  const handlechange = () => {
    setcount(count + 1);
    
    let a = count * 150;
    setprice(a + 150);
  };
  return (
    <div>
      <h1>count={count}</h1>
      <button onClick={handlechange}>ADD</button>
      <button onClick={handleclick}>decrease</button>
      <h4>movie:{props.name}</h4>
      <p>price:{price} </p>
    </div>
  );
}

export default Practise;
