import BackButton from '../components/back.jsx';
import HighScore from '../components/highscore.jsx';
import '../components/styles.css';
import monster from '../assets/monster1.png';
import { useNavigate } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Game() {
    const [score, setScore] = useState(0);
    const navigate = useNavigate();
    const [position, setPosition] = useState({ top: '50%', left: '50%' });
    const [highScore, setHighScore] = useState(0);


    const handleClick = () => {
        setScore(score + 1);
    };
    const handleEndGame = () => {
        navigate('/gameover');
    };

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
                axios.put(apiURL, { score });
            }
        }
        catch (error) {
            console.error("Error updating high score:", error);
        }
    }, [score, highScore]);

    
    // Function to generate random position
    const getRandomPosition = () => {
        const top = Math.random() * 90 + '%'; 
        const left = Math.random() * 90 + '%'; 
        return { top, left };
    };

    useEffect(() => {
        const interval = setInterval(() => {
            setPosition(getRandomPosition());
        }, 2000);

        return () => clearInterval(interval); // Cleanup interval on unmount
    }, []);

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
                        ...position,
                        transform: 'translate(-50%, -50%)', // Center the image
                    }}>Click Me
                </button>
                <button>
                    <img src={monster} 
                        alt="monster"
                        onClick={handleEndGame}
                        style={{ position: 'absolute', ...position, transform: 'translate(-40%, -50%)' }} />
                </button>

            </div>
        </div>
    );
}

export default Game;
