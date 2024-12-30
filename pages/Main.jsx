
import Header from '../components/header.jsx';
import Start from '../components/start.jsx';
import Score from '../components/highscore.jsx';
import HowTo from '../components/HowToButton.jsx';
import '../components/styles.css';


function Main(){
    return(
        <div className="header-container">
            <Header className="header" />
            <Start className="start" />
            <Score className="score" />
            <HowTo className="howto" />
        </div>
    );

}
export default Main 