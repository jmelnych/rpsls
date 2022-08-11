import { Gestures } from '../models/gestures';

export const availableGestures = Object.values(Gestures);
export const gesturesSet  =  {rock : {name: Gestures.Rock, defeats: [Gestures.Scissors, Gestures.Lizard]},
            paper: {name: Gestures.Paper, defeats: [Gestures.Rock, Gestures.Spock]},
            scissors: {name: Gestures.Scissors, defeats: [Gestures.Paper, Gestures.Lizard]},
            lizard: {name: Gestures.Lizard, defeats:[Gestures.Paper, Gestures.Spock]},
            spock: {name: Gestures.Spock, defeats:[Gestures.Scissors, Gestures.Rock]}
          };