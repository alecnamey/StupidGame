import BackButton from "../components/back";
import { useLocation } from 'react-router-dom';
import React from 'react';


function GameOver() {
    const location = useLocation();
    const { score } = location.state || { score: 0 };
    
    return (
        <div className="gameover-container">
            <BackButton />
            <h1 className="gameover">Game Over!</h1>
            <p className="endscore">Score: {score}</p>
        </div>
    );
}
export default GameOver