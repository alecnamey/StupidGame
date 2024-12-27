import React from 'react';
import { useNavigate } from 'react-router-dom';
import './styles.css';


function HowTo() {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/howto');
    };

    return (
        <button className="howto-button" onClick={handleClick}>
            How To Play
        </button>
    );
}

export default HowTo;