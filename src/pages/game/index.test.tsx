import Game from "./index";
import "@testing-library/jest-dom";
import { render, screen, waitFor } from "@testing-library/react";
import { play } from '../../services/game';
const game = { play };

const successResult = {result: {message: 'test', userChoice: '', aiChoice: ''}};
const failureResult = { result: {error: true}};


jest.mock("../../services/game", () => {
    return {
        play: jest.fn(() => Promise.resolve(successResult))
      };
});
    
beforeEach(() => {
  render(<Game />);
})

describe("Game", () => {
    it("renders all buttons", async () => {
      const buttons = await screen.findAllByRole('button');
      expect(buttons).toHaveLength(5);
    });

    it("initiates game play", async () => {
      const button = await screen.getByRole('button', { name: /rock/i });
      const mockPlayFn = jest.spyOn(game, "play");
      button.click();
      await waitFor(() => {
        expect(mockPlayFn).toHaveBeenCalledTimes(1);
      });
    });

    it("renders success result", async () => {
      const button = await screen.getByRole('button', { name: /rock/i });
      button.click();
      await waitFor(() => {
        expect(screen.getByTestId('game-result')).toBeInTheDocument();
      })
    });

    it("renders error result", async () => {
      const button = await screen.getByRole('button', { name: /rock/i });
      jest.spyOn(game, "play").mockReturnValueOnce(Promise.reject(failureResult));
      button.click();
      await waitFor(() => {
        expect(screen.getByTestId('game-error')).toBeInTheDocument();
      })
    });

    it("resets game", async () => {
      const button = await screen.getByRole('button', { name: /rock/i });
      button.click();
      await waitFor(async () => {
        const resetButton = await screen.getByRole('button', { name: /reset/i });
        expect(resetButton).toBeInTheDocument();
        resetButton.click();
        await waitFor(async () => {
          const buttons = await screen.findAllByRole('button');
           expect(buttons).toHaveLength(5);
        })
      })
    });
  });