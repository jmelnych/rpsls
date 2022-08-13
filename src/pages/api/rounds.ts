
import { Gestures, IGameResult } from '../../models/gestures';
import { availableGestures, gesturesSet } from '../../constants/gestures';


const getComputerGesture = () => {
const randomIdx = Math.floor(Math.random() * availableGestures.length);
return availableGestures[randomIdx];
}

export const getGameResult = (userGesture, aiGesture) => {
  if (userGesture === aiGesture) {
    return 'Game was a draw';
  }
  if (gesturesSet[userGesture].defeats.indexOf(aiGesture) >= 0) {
    return 'You won!';
  } else {
    return 'Computer won!';
  }
};


export const playGame = (userGesture: Gestures): IGameResult => {
  const aiGesture = getComputerGesture();  
  const gameResult = getGameResult(userGesture, aiGesture);
  return {
    userChoice: userGesture,
    aiChoice: aiGesture,
    message: gameResult,
  };
};
