import React from 'react';
import { useNavigate } from 'react-router-dom';
import './styles.css';

function BackButton() {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/main');
    };

    return (
        <button className="back-button" onClick={handleClick}>
            Back
        </button>
    );
}

export default BackButton;