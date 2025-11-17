import { useState } from "react";
import { Link } from 'react-router-dom';
import "./UseState.css"
// counter
function UseState1() {
  const [count, setCount] = useState(0);
  let [name, setName] = useState("Hello User");

// text change
const handleClick = () => {
    setName("You clicked the button!");
  }

// toggle
  const [on, setOn] = useState(false);
  const toggle = () => {
    setOn(!on);
  }

// another one
const[names, setNames]= useState("")
const handleChange=(e)=>{
setNames(e.target.value)
}

  return (
    <div>
      {/* another one */}
      <input
        type="text"
        placeholder="Enter your name"
        onChange={handleChange}
      />
      <p>Hello,{names} welcome here</p>

      {/* text change */}
      <h1>{name}</h1>
      <button onClick={handleClick}>click to change text</button>

      {/* toggle */}
      <h2>{on ? "On" : "Off"}</h2>
      <button onClick={toggle}>{on ? "Turn Off" : "Turn On"}</button>

{/* counter */}
      <p>You clicked {count} times</p>

      <button onClick={() => setCount(count + 1)}>Click me</button>
     

      <nav>
        <Link to="/">Home</Link>
        <Link to="/UseState1">UseState1</Link>
      </nav>
    </div>
  );
}
export default UseState1;