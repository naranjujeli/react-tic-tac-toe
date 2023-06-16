import Square from './Square';
import '../css/Board.css'

export default function Board(props) {
    function handleClick(id) {
        if (!props.squaresValues[id]) {
            // Since squaresValues is a constant array, it cannot be modified
            // You have to make an auxiliar array with slice() instead
            let auxSquaresValues = props.squaresValues.slice();
            auxSquaresValues[id] = props.turn ? 'X' : 'O'; 
            props.setSquaresValues(auxSquaresValues);
            
            props.setTurn(!props.turn);
        }
    }
    
    let squares = [];
    for (let i = 0; i < 9; i++) {
        squares.push(<Square key={i.toString()} id={i.toString()} value={props.squaresValues} onSquareClick={handleClick} />);
    }
    return (
        <div className="Board">
            {squares}
        </div>
    );
}