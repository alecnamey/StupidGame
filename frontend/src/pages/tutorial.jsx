
import '../components/styles.css';
import Header from '../components/header.jsx';
import Back from '../components/back.jsx';

function Tutorial() {
    
    return (
        <div className="tutorial-container">
            <Header/>
            <Back className="back-page" />
            <h1 className="tutorial-title">Tutorial</h1>
            <table className="tutorial-table">
                <tr>
                    <td><p>1. Welcome to my Stupid Game</p></td>
                </tr>
                <tr>
                    <td><p>2. </p></td>
                </tr>
                <tr>
                    <td><p>3. </p></td>
                </tr>
                <tr>
                    <td><p>4. </p></td>
                </tr>
                <tr>
                    <td><p>5. </p></td>
                </tr>
                <tr>
                    <td><p>6. </p></td>
                </tr>
            </table>
        </div>
    );
}

export default Tutorial;