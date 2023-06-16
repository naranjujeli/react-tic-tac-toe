import '../css/Game.css';
import { useState } from 'react';
import Board from './Board';
import History from './History';

export default function Game() {
    const [ turn, setTurn ] = useState(true);
    const [ squaresValues, setSquaresValues ] = useState(Array(9).fill(null));
    const [ squaresValuesHistory, setSquaresValuesHistory ] = useState([squaresValues]);

    function checkWinner() {
        return;
    }

    return (
        <div className="Game">
            <Board turn={turn} setTurn={setTurn} squaresValues={squaresValues} setSquaresValues={setSquaresValues} />
            <History squaresValues={squaresValues} setSquaresValues={setSquaresValues} squaresValuesHistory={squaresValuesHistory} setSquaresValuesHistory={setSquaresValuesHistory} />
        </div>
    );
}