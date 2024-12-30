
import '../components/styles.css';
import Header from '../components/header.jsx';
import Back from '../components/back.jsx';
import monster from '../assets/ThumbMonster.png';

function HowTo() {
    
    return (
        <div className="howto-container">
            <Header/>
            <Back className="back-page" />
            <h1 className="howto-title">Tutorial</h1>
            <table className="howto-table">
                <tr>
                    <td style={{fontSize: '24px', fontWeight: 'bold'}}><p1>Welcome to StupidGame! Please
                        listen closely to the following <br/>instructions ahead! </p1></td>
                </tr>
                <tr>
                    <td>
                        <p>The objective of the game is to be able to press</p>
                        <button className="tutorialClick">Click Me</button>
                         <p2> as many times as you can.</p2>
                    </td>
                </tr>
                <tr>
                    <td>
                        <p1>Every time you press:  </p1>
                        <button className="tutorialClick">Click Me</button> 
                        <p2> you get a point! </p2>
                    </td>
                </tr>
                <tr>
                    <td>
                        <p1>But beware of the monsters: </p1> 
                        <img src={monster} className='thumb' ></img>
                         &nbsp; &nbsp; &nbsp; &nbsp; 
                         who also spawn in with every press <br></br> of the&nbsp; 
                         <button className="tutorialClick">Click Me</button>
                         &nbsp;button
                    </td>
                </tr>
                <tr>
                    <td><p>Have Stupid fun! </p></td>
                </tr>
            </table>
        </div>
    );
}

export default HowTo;