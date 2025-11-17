import { useState } from "react";
import { Link } from "react-router-dom";
import "./Ausestate.css";

function Ausestate() {
  const [count, setCount] = useState(0);
  
  function decrement() {
    setCount((c) => c - 1);
  }

  function increment() {
    setCount((c) => c + 1);
  }

  function reset() {
    setCount(0);
  }


  // use a standard 6-digit hex initial color (8-digit with alpha may not be supported everywhere)
  const [color, setColor] = useState("#0d0101");
  const getRandomColor = () => {
    const letters = "0123456789ABCDEF";
    let newColor = "#";
    for (let i = 0; i < 6; i++) {
      newColor += letters[Math.floor(Math.random() * 16)];
    }
    return newColor;
  };
  const handleChangeColor = () => {
    const c = getRandomColor();
    console.log('new color ->', c);
    setColor(c);
  };

//   toggle like
  const [liked, setLiked] = useState(false);
  const toggleLike = () => {
    setLiked(!liked);
  };

  return (
    <div className="aus-container">
      <nav className="aus-nav">
        <Link to="/">Home</Link>
      </nav>

      <div className="aus-controls">
        <button onClick={decrement}>-</button>
        <span className="aus-count">{count}</span>
        <button onClick={increment}>+</button>
        <button onClick={reset} className="aus-reset">
          Reset
        </button>
      </div>

      <div className="aus-colorbox" style={{ backgroundColor: color }}>
        <h1>Random Color Changer</h1>
        <button onClick={handleChangeColor} className="aus-change-btn">
          Change Color
        </button>
      </div>


      {/* toggle like */}
      <div className="aus-like-section">
        <h3>Do you like this?</h3>
        <h2>{liked ? "You liked this!" : "You Unliked this!"}</h2>
        <button onClick={toggleLike}>{liked ? "💙Like" : "💔Unlike"}</button>
      </div>
    </div>
  );
}

export default Ausestate;