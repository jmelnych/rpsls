import { useState } from 'react';
import { play } from '../../helpers/pages/game';
import styles from '../../styles/Game.module.css';
import { Gestures, IGameResult } from '../../models/gestures';


const initialGame: IGameResult = {message: '', userChoice: '', aiChoice: ''};


export default () => {
    const [gameResult, updateGameResult] = useState<IGameResult>(initialGame);

    const playGame = (gesture: Gestures) => {
        play(gesture).then((res) => updateGameResult(res.result));
    };

    const resetGame = () => {
      updateGameResult(initialGame);
    };


    return (
      <div className={styles.container}>
        {!gameResult.message && (<div className={styles.buttonContainer}>
          <button className={styles.button} onClick={() => playGame(Gestures.Rock)}>โฐ๏ธ rock</button>
          <button className={styles.button} onClick={() => playGame(Gestures.Paper)}> ๐งป paper</button>
          <button className={styles.button} onClick={() => playGame(Gestures.Scissors)}>โ๏ธ scissors</button>
          <button className={styles.button} onClick={() => playGame(Gestures.Lizard)}> ๐ฆ lizard</button>
          <button className={styles.button} onClick={() => playGame(Gestures.Spock)}> ๐ spock</button>
        </div>)}
        {gameResult.message && (
        <>
          <h1 className={styles.result}>{gameResult.message}</h1>
          <h2>Your choice: {gameResult.userChoice}</h2>
          <h2>Computer choice: {gameResult.aiChoice}</h2>
          <button className={styles.button} onClick={resetGame}>reset</button>
          </>
       )}
      </div>
    );
}
