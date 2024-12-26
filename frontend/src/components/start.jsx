import React from 'react';
import { useNavigate } from 'react-router-dom';
import './styles.css';

function StartButton() {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/game');
    };

    return (
        <button className="start-button" onClick={handleClick}>
            Start Game
        </button>
    );
}

export default StartButton;