import React from 'react';
import { useNavigate } from 'react-router-dom';
import './styles.css';


function TutorialButton() {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/tutorial');
    };

    return (
        <button className="tutorial-button" onClick={handleClick}>
            Tutorial
        </button>
    );
}

export default TutorialButton;