import {Gestures} from '../../../models/gestures';
import { getGameResult } from '../rounds';


describe('game result', () => {
    it('should return draw message if user & computer inputs are the same', () => {
        expect(getGameResult(Gestures.Rock, Gestures.Rock)).toEqual('Game was a draw');
    });
  
    it('should return message that computer wins', () => {
      expect(getGameResult(Gestures.Scissors, Gestures.Rock)).toEqual('Computer won!');
    });

    it('should return message that user wins', () => {
        expect(getGameResult(Gestures.Paper, Gestures.Rock)).toEqual('You won!');
      });
  });