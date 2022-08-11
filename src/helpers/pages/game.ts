import { Gestures } from '../../models/gestures';

export const play = (gesture: Gestures) => fetch("/api/rounds", {
    method: 'POST',
    body: JSON.stringify({ gesture }),
    headers: {'Content-type': 'application/json'},
}).then(response => response.json())

