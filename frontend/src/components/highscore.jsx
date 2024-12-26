import React, { useEffect, useState } from "react";
import axios from "axios";
import './styles.css';


function Score() {
  const [score, setScore] = useState(null);

  

  useEffect(() => {
    const apiURL = import.meta.env.REACT_APP_API_URL;
  
    axios.get(apiURL) // Ensure the correct API endpoint
      .then(response => {
        console.log("API response:", response.data); // Log the API response
        setScore(response.data.score);
        console.log("Score state updated:", response.data.score); // Log the updated state
      })
      .catch(error => {
        console.error("Error fetching score:", error);
      });
  }, []);

 
  return (
    <div>
      <h1 className="scores"> High Score: {score}</h1>
    </div>
  );
}

export default Score;