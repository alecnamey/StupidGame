
import '../components/styles.css';
import Header from '../components/header.jsx';
import Back from '../components/back.jsx';

function HowTo() {
    
    return (
        <div className="howto-container">
            <Header/>
            <Back className="back-page" />
            <h1 className="howto-title">Tutorial</h1>
            <table className="howto-table">
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

export default HowTo;