import { useState } from 'react';
import { play } from '../../services/game';
import styles from '../../styles/Game.module.css';
import { Gestures, IGameResult } from '../../models/gestures';


const initialGame: IGameResult = {message: '', userChoice: '', aiChoice: '', error: null};


export default () => {
    const [gameResult, updateGameResult] = useState<IGameResult>(initialGame);

    const playGame = (gesture: Gestures) => {
        play(gesture)
        .then((res) => updateGameResult(res.result))
        .catch(() => {
          updateGameResult((prevState) => ({...prevState, error: 'Something went wrong'}));
        });
    };

    const resetGame = () => {
      updateGameResult(initialGame);
    };


    return (
      <div className={styles.container}>
        {!gameResult.message && (<div className={styles.buttonContainer}>
          <button aria-label="rock" className={styles.button} onClick={() => playGame(Gestures.Rock)}>⛰️ rock</button>
          <button aria-label="paper" className={styles.button} onClick={() => playGame(Gestures.Paper)}> 🧻 paper</button>
          <button aria-label="scissors" className={styles.button} onClick={() => playGame(Gestures.Scissors)}>✂️ scissors</button>
          <button aria-label="lizard" className={styles.button} onClick={() => playGame(Gestures.Lizard)}> 🦎 lizard</button>
          <button aria-label="spock" className={styles.button} onClick={() => playGame(Gestures.Spock)}> 🖖 spock</button>
        </div>)}
        {gameResult.message && (
        <>
          <h1 data-testid="game-result" className={styles.result}>{gameResult.message}</h1>
          {gameResult.userChoice && <h2>Your choice: {gameResult.userChoice}</h2>}
          {gameResult.aiChoice && <h2>Computer choice: {gameResult.aiChoice}</h2>}
          <button aria-label="reset" className={styles.button} onClick={resetGame}>reset</button>
          </>
       )}
       {gameResult.error && (
          <h1 data-testid="game-error" className={styles.result}>{gameResult.error}</h1>
       )}
      </div>
    );
}
