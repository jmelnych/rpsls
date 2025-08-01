import { playGame } from '../rounds';
import { NextApiRequest, NextApiResponse } from 'next';

export default (req: NextApiRequest, res: NextApiResponse) => {
    const { gesture } = req.body;
    const result = playGame(gesture);

    res.statusCode = 200;
    res.json({ result });
}
