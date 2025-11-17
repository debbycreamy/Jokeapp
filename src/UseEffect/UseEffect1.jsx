import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./UseEffect.css"

function UseEffect1() {

  useEffect(() => {
    alert("Hi! The app just started");

    return () => {
      alert("The app is closing");
    };
  }, []);


// TIMER/TIMEUP
const [message, setMessage] = useState("Waiting....");

  useEffect(() => {
    const timer = setTimeout(() => {
      setMessage("TIME UP!");
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  // API CALLING EXAMPLE

  const [users, setUsers] = useState([]);

  useEffect(()=> {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => setUsers(data))
    
  },[]);

// Color change
const [color, setColor] = useState("blue");

useEffect(() => {
  const colors = ["peru", "black", "pink", "red", "gold"];

  const interval = setInterval(() => {
    const random = Math.floor(Math.random() * colors.length);
    setColor(colors[random]);
  }, 3000);

  return () => clearInterval(interval);
}, []); 


  // clock that updates every second
  const [time, setTime] = useState(new Date().toLocaleTimeString());
  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="color-change" style={{ backgroundColor: color }}>
      <h2>User List</h2>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            {user.name}, {user.email}
          </li>
        ))}
      </ul>

      <h1 className="color-change" style={{ backgroundColor: color }}>
        Color Change Example
      </h1>

      <h2>{message}</h2>
      <h1>UseEffect Example</h1>
      <Link to="/">Go back</Link>
      <h2>{time}</h2>
    </div>
  );
}

export default UseEffect1;