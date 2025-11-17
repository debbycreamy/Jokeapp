import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom"; 
import "./JokeApp.css";

const JokeApp = () => {
  const [joke, setJoke] = useState(null);
  const [loading, setLoading] = useState(true);
  const [likes, setLikes] = useState(0);

 
  const fetchJoke = async () => {
    setLoading(true);
    try {
      const res = await fetch(
        "https://official-joke-api.appspot.com/random_joke"
      );
      const data = await res.json();
      setJoke(data);
    } catch (error) {
      console.log("Error fetching joke:", error);
    } finally {
      setLoading(false);
    }
  };

  
  useEffect(() => {
    fetchJoke();
  }, []);

  return (
    <>
      
      <nav>
        <Link to="/">Home</Link>
        <Link to="/Contact">Contact</Link>
      </nav>

      <div className="joke-container">
        <div className="joke-card">
          <h1 className="title">😂 Random Joke Generator</h1>

          {loading ? (
            <p className="loading">Loading joke...</p>
          ) : (
            <>
              <p className="setup">{joke?.setup}</p>
              <p className="punchline">{joke?.punchline}</p>
            </>
          )}

          <div className="button-group">
            <button className="btn new-joke" onClick={fetchJoke}>
              Get New Joke
            </button>

            <button className="btn like" onClick={() => setLikes(likes + 1)}>
              😂 Like
            </button>
          </div>

          <p className="likes">Likes: {likes}</p>
        </div>
      </div>
    </>
  );
};

export default JokeApp;
