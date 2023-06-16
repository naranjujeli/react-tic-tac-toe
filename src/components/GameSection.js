import '../css/GameSection.css';
import Board from './Board';
import History from './History';

export default function GameSection() {
    return (
        <div className="GameSection">
            <Board />
            <History />
        </div>
    );
}