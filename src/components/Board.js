import Square from './Square';
import '../css/Board.css'

export default function Board() {
    let squares = [];
    for (let i = 1; i <= 9; i++) {
        squares.push(<Square key={i.toString()} />);
    }
    return (
        <div className="Board">
            {squares}
        </div>
    );
}