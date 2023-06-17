import HistoryListItem from './HistoryListItem';
import '../css/History.css';

export default function History(props) {
    function handleClick(id) {
        // Change state of the board
        props.setCurrentBoard(props.boardHistory[id].board);
        
        // Remove following history
        let auxBoardHistory = props.boardHistory.slice(0, id+1);
        props.setBoardHistory(auxBoardHistory);

        // Reset variables
        if (id != props.boardHistory.length-1) {
            props.setWinner(null);
            props.setTurn(props.boardHistory[id].turn);
            props.setGameFinished(false);
        }
        
        return;
    }

    let listItems = [];
    for (let i = 0; i < props.boardHistory.length; i++) {
        listItems.push(
            <HistoryListItem 
                key={i} 
                id={i}
                handleClick={handleClick}
            />
        );
    }


    return (
        <div className="History">
            <ul className="HistoryList">
                {listItems}
            </ul>
        </div>
    );
}