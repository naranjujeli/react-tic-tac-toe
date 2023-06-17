import '../css/Game.css';
import { useState } from 'react';
import Board from './Board';
import History from './History';
import HistoryNode from './HistoryNode';

export default function Game() {
    const [ turn, setTurn ] = useState(true);
    let winner = null;
    const [ gameFinished, setGameFinished ] = useState(null);
    const [ currentBoard, setCurrentBoard ] = useState(Array(9).fill(null));
    // The history will be an array of HistoryNodes, that contain not only the state
    // of the board at the moment but also the turn
    const [ boardHistory, setBoardHistory ] = useState([new HistoryNode(currentBoard, turn)]);

    function checkWinner(board) {
        if (gameFinished) {
            return;
        }

        const winningLines = [
            [ 0, 1, 2 ],
            [ 3, 4, 5 ],
            [ 6, 7, 8 ],
            [ 0, 3, 6 ],
            [ 1, 4, 7 ],
            [ 2, 5, 8 ],
            [ 0, 4, 8 ],
            [ 2, 4, 6 ]
        ];
        winningLines.forEach((line) => {
            const [a, b, c] = line;
            if (
                board[a] &&
                board[a] == board[b] && 
                board[b] == board[c]
            ) {
                winner = board[a];
                setGameFinished(true);
                return;
            }
        });
    }

    return (
        <div className="Game">
            <Board 
                turn={turn} 
                setTurn={setTurn} 
                gameFinished={gameFinished}
                currentBoard={currentBoard} 
                setCurrentBoard={setCurrentBoard} 
                boardHistory={boardHistory}
                setBoardHistory={setBoardHistory}
                checkWinner={checkWinner}
            />
            <History 
                setTurn={setTurn}
                currentBoard={currentBoard} 
                setCurrentBoard={setCurrentBoard} 
                boardHistory={boardHistory} 
                setBoardHistory={setBoardHistory} 
                gameFinished={gameFinished}
                setGameFinished={setGameFinished}
            />
        </div>
    );
}