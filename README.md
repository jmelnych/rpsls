![BOXT](https://bit.ly/3doa9mZ)

# Rock, Paper, Scissors, Lizard, Spock

This is a simple Next.js project that allows a user to play rock paper scissors against a computer that selects its own gesture at random.
Right now it does not work as intended, as the computer always wins!

It's currently not working, a few bugs were added by the last person who touched this code..
We'd like you to get this project up and running and complete the game logic by extending the rules to include the `lizard` and `spock` gestures



## ⛰️ 🧻 ✂️ 🦎 🖖


#### Game logic
- `scissors` beats `paper`
- `paper` beats `rock`
- `rock` beats `lizard`
- `lizard` beats `spock`
- `spock` beats `scissors`
- `scissors` beats `lizard`
- `lizard` beats `paper`
- `paper` beats `spock`
- `spock` beats `rock`
- `rock` beats `scissors`

BDD Acceptance Criteria

```
AS A Player
WHEN I click a gesture from tthe game logic
THEN a round is played against the computer
AND the gesture the computer picks is not the same as mine
AND I see a message telling me who won (the player or the computer)
```

```
AS A Player
WHEN I click a gesture from the game logic
THEN a round is played against the computer
AND the gesture the computer picks is the same as mine
AND I see a message telling me that the game was a draw
```

```
AS A Player
HAVING played a game
WHEN I refesh the page
THEN the game is reset and can see the gesture buttons
AND I can play another game
```

### 💅
Give the UI a lick of styles, be as basic or as fancy as you like!

### 🔍

Ensure at least the core game logic is tested and feel free refactor / restructure the code / bring in new npm packages however you see fit to ensure the resulting code is high quality, extendable and maintainable.

---


This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/rounds](http://localhost:3000/api/rounds). This endpoint can be edited in `pages/api/rounds/index.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!
