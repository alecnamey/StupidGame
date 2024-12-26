import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../components/styles.css';
import monster from '../assets/monster1.png';
import BackButton from '../components/back.jsx';
import HighScore from '../components/highscore.jsx';
import axios from 'axios';

function Game() {
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);
  const navigate = useNavigate();
  const [positions, setPositions] = useState({
    clickMe: { top: '50%', left: '50%' },
    monsters: [{ top: '50%', left: '50%' }]
  });


    useEffect(() => {
        const apiURL = import.meta.env.VITE_API_URL;
        const fetchHighScore = async () => {
            try {
                const response = await axios.get(apiURL);
                setHighScore(response.data.score || 0); // Update state with backend value
            } catch (error) {
                console.error("Error fetching high score:", error);
            }
        };

        fetchHighScore();
    }, []);

    useEffect(() => {
        const apiURL = import.meta.env.VITE_API_URL;
        try{
            if (score > highScore) {
                console.log('Score:', score);
                console.log('High Score:', highScore);
                axios.put(apiURL, { score });
            }
        }
        catch (error) {
            console.error("Error updating high score:", error);
        }
    }, [score, highScore]);






  const getRandomPosition = (elementWidth, elementHeight) => {
    const maxWidth = window.innerWidth - elementWidth;
    const maxHeight = window.innerHeight - elementHeight;
    const top = `${Math.floor(Math.random() * maxHeight)}px`;
    const left = `${Math.floor(Math.random() * maxWidth)}px`;
    return { top, left };
  };

  const updatePositions = () => {
    const buttonWidth = 100; 
    const buttonHeight = 50; 
    setPositions((prevPositions) => ({
      clickMe: getRandomPosition(buttonWidth, buttonHeight),
      monsters: prevPositions.monsters.map(() => getRandomPosition(buttonWidth, buttonHeight))
    }));
  };

  useEffect(() => {
    const interval = setInterval(updatePositions, 2000);
    return () => clearInterval(interval); // Cleanup interval on unmount
  }, [positions.monsters]);

  const handleClick = () => {
    const newScore = score + 1;
    setScore(newScore);
   
    const buttonWidth = 100; // Approximate width of the button
    const buttonHeight = 50; // Approximate height of the button
    setPositions((prevPositions) => ({
      ...prevPositions,
      monsters: [...prevPositions.monsters, getRandomPosition(buttonWidth, buttonHeight)]
    }));
  };

  const handleEndGame = () => {
    navigate('/gameover');
  };

  return (
    <div className="game-container" style={{ position: 'relative', height: '100vh', width: '100vw' }}>
      <BackButton className="backbutton" />
      <HighScore className="highscore" />
      <p className="score">Score: {score}</p>
      <div>
        <button
          className="clickme"
          onClick={handleClick}
          style={{
            position: 'absolute',
            top: positions.clickMe.top,
            left: positions.clickMe.left,
            transform: 'translate(-50%, -50%)', // Center the button
          }}
        >
          Click Me
        </button>

        {positions.monsters.map((monsterPos, index) => (
          <img
            key={index}
            src={monster}
            onClick={handleEndGame}
            alt="monster"
            style={{
              position: 'absolute',
              top: monsterPos.top,
              left: monsterPos.left,
              transform: 'translate(-50%, -50%)', // Center the image
            }}
          />
        ))}
      </div>

    </div>
  );
}

export default Game;