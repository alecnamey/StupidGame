import React, { useRef, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../components/styles.css';
import monster from '../assets/monsterIMG.png';
import BackButton from '../components/back.jsx';
import axios from 'axios';

function Game() {
  
  const [monsterTime, setMonsterTime] = useState(800);
  const [buttonTime, setButtonTime] = useState(2000);

  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);
  const [ogHS, setOgHS] = useState(0);
  const navigate = useNavigate();
  const [positions, setPositions] = useState({
    clickMe: { top: '50%', left: '50%' },
    monsters: [{ top: '50%', left: '50%' }]
  });

// $START GAME SECTION------------------------------------------------------------------------------
    useEffect(() => {
      const apiURL = import.meta.env.VITE_API_URL;
      const fetchHighScore = () => {
        try {
          axios.get(apiURL)
            .then(response => {
              setHighScore(response.data.score || 0); 
              setOgHS(response.data.score || 0);
            })
            .catch(error => {
              console.error("Error fetching high score:", error);
            });
        } catch (error) {
          console.error("Error fetching high score:", error);
        }
      };

      fetchHighScore();
    }, []); // Trigger only once at the start of the game
    useEffect(() => {
      
  
      const updateHighScore = async () => {
          if (score >= ogHS) {
              
          }
      };
  
      updateHighScore();
  }, [score]); // Trigger only when score changes


/* 
$ END SCORE SECTION-------------------------------------------------------------------------

$ START GAME SECTION-------------------------------------------------------------------------
*/



  const getRandomPosition = (elementWidth, elementHeight) => {
    const maxWidth = window.innerWidth - elementWidth;
    const maxHeight = window.innerHeight - elementHeight;
    const top = `${Math.floor(Math.random() * maxHeight)}px`;
    const left = `${Math.floor(Math.random() * maxWidth)}px`;
    return { top, left };
  };

  
  const updateButtonPosition = () => {
    const buttonWidth = 100; 
    const buttonHeight = 50; 
    setPositions((prevPositions) => ({
      ...prevPositions,
      clickMe: getRandomPosition(buttonWidth, buttonHeight),
    }));
  };

  const updateMonsterPositions = () => {
    const buttonWidth = 100; 
    const buttonHeight = 50; 
    setPositions((prevPositions) => ({
      ...prevPositions,
      monsters: prevPositions.monsters.map(() => getRandomPosition(buttonWidth, buttonHeight))
    }));
  };

  useEffect(() => {
    const buttonInterval = setInterval(updateButtonPosition, buttonTime); // Move button every 2 seconds
    const monsterInterval = setInterval(updateMonsterPositions, monsterTime); // Move monsters every 1 second
    return () => {
      clearInterval(buttonInterval); // Cleanup button interval on unmount
      clearInterval(monsterInterval); // Cleanup monster interval on unmount
    };
  }, []);

  const handleClick = () => {
    const newScore = score + 1;
    setScore(newScore);
    // monster time and button time change after each click of the "Click Me" button
    if (buttonTime == 0) {
      setButtonTime(0);
    }
    if (monsterTime == 0) {
      setMonsterTime(0);
    }
    const buttonTimer = buttonTime - 10;
    setButtonTime(buttonTimer);
    const monsterTimer = monsterTime - 10;
    setMonsterTime(monsterTimer);
    console.log("Button Time: ", buttonTime);
    console.log("Monster Time: ", monsterTime);
    // -----------------------------------------------
    if (newScore >= highScore) {
      setHighScore(newScore);
    }
    const buttonWidth = 100; // Approximate width of the button
    const buttonHeight = 50; // Approximate height of the button
    setPositions((prevPositions) => ({
      ...prevPositions,
      clickMe: getRandomPosition(buttonWidth, buttonHeight), // Move the button to a new position
      monsters: [...prevPositions.monsters, getRandomPosition(buttonWidth, buttonHeight)]
    }));
  };

  const handleEndGame = () => {
      const apiURL = import.meta.env.VITE_API_URL;
      
      if (score > ogHS) {
          try {
            axios.put(apiURL, { score });
            
            console.log("$High score updated to:", score);
        } catch (error) {
            console.error("Error updating high score:", error);
        }
      }
        
      
      navigate('/gameover', { state : { score } });
  };

  return (
    <div className="game-container" style={{ position: 'relative', height: '100vh', width: '100vw' }}>
      <BackButton className="backbutton" />
      <h1 className="Highscore">High Score: {highScore}</h1>
      <p className="score">Score: {score}</p> 
      <div> 
        <button
          className="clickme" 
          onClick={handleClick}
          style={{
            position: 'absolute', 
            backgroundColor: 'light-blue',
            transition: 'background-color 0.1s ease',
            '&:hover': {
              backgroundColor: 'white',
            },
            top: positions.clickMe.top,
            left: positions.clickMe.left,
            transform: 'translate(-50%, -50%)', // Center the button
          }}
        >
          Click Me
        </button>

        <div>
          {positions.monsters.map((monsterPos, index) => (
            <div
              key={index} 
              style={{
                position: 'absolute',
                top: monsterPos.top,
                left: monsterPos.left,
                transform: 'translate(-50%, -50%)', // Center the container
                pointerEvents: 'none', // Disable interaction on the container
              }}
            >
              <img className='monster1'
                src={monster}
                onClick = {handleEndGame}
                alt="monster"
                style={{
                  pointerEvents: 'auto',  // Allow click event on the image itself
                }}
              />
            </div>
          ))}
        </div>
        
      </div>

    </div>
  );
}

export default Game;