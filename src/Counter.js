import {useState, useEffect} from "react";

function Counter(){
  const[counter, setCounter] = useState(0);
  const onClick = () => setCounter((now)=> now + 1);
  return (
    <div>
      <h1>{counter}</h1>
      <button onClick = {onClick}>click me</button>
    </div>
  );
}

export default Counter;