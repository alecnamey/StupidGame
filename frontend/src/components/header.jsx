

import './styles.css';

import logoImage from '/Users/alecnamey/game1/frontend/src/assets/Game logo.png';

function Header() {
    return (
        <div>
            <img className="logo" src={logoImage} alt="Logo" />
        </div>
    );
}

export default Header;
