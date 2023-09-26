import { useState } from "react";

 
const Ques = ()=>{
    const [count,setCount] = useState(0);
    return(
        <div>
            <div>
            <p>{count}</p>
            <button onClick={()=> setCount(count + 1)}>increment</button>
            </div>

<div>
            <button onClick={()=> setCount(count - 1)}>decrement</button>
            </div>
        </div>
    )
}
export default Ques;


// const Home = () =>{
//     const handleClick = (e) =>{
//         document.write(`hello ninjas`,e.target.value);
//     }
//     const handleClickagain = ()=>{
//         document.write("Hello again");
//     }
//         return (
//             <div className="home">
//                 <h2>home page</h2>
//                 <br></br>
//                 <button onClick={handleClick}>click me!</button>
//                 <button onClick={()=>{handleClickagain(`hello`);
//                 }}>click me again</button>



//             </div>
//         )
    //}
//     function action (){
//         const handleClick = (e) =>{
//             e.preventDefault();
//             alert(`link was clicked`);

//         }
//         return (
//             <button onClick={handleClick}>click me</button>
//         )
//     }
// export default action;