export enum Gestures {
    Scissors = 'scissors',
    Paper = 'paper',
    Rock = 'rock',
    Lizard = 'lizard',
    Spock = 'spock',
}

export interface IGameResult {
    message: string;
    userChoice: string;
    aiChoice: string;
  }