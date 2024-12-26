import BackButton from "../components/back";

function GameOver() {
    return (
        <div className="gameover-container">
            <BackButton />
            <h1 className="gameover">Game Over!</h1>
            
        </div>
    );
}
export default GameOver