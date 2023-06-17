import Square from './Square';
import HistoryNode from './HistoryNode';
import '../css/Board.css'

export default function Board(props) {
    function handleClick(id) {
        if (props.gameFinished) {
            return;
        }

        if (!props.currentBoard[id]) {
            // Since squaresValues is a constant array, it cannot be modified
            // You have to make an auxiliar array with slice() instead
            let newBoard = props.currentBoard.slice();
            newBoard[id] = props.turn ? 'X' : 'O';
            props.setCurrentBoard(newBoard);
            
            props.setTurn(!props.turn);
            
            // Add state to history
            let newBoardHistory = props.boardHistory.slice();
            newBoardHistory.push(new HistoryNode(newBoard, !props.turn));
            props.setBoardHistory(newBoardHistory);

            props.checkWinner(newBoard);
        }
    }
    
    let squares = [];
    for (let i = 0; i < 9; i++) {
        squares.push(
            <Square 
                key={i.toString()}
                id={i.toString()}
                value={props.currentBoard[i]}
                handleClick={handleClick}
            />
        );
    }

    return (
        <div className="Board">
            {squares}
        </div>
    );
}