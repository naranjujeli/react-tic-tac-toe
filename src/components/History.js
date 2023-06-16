import HistoryListItem from './HistoryListItem';
import '../css/History.css';

export default function History(props) {
    let listItems = [];
    for (let i = 0; i < props.squaresValuesHistory.length; i++) {
        listItems.push(<HistoryListItem key={i} value={"Go to move " + i} />);
    }

    return (
        <div className="History">
            <ul className="HistoryList">
                {listItems}
            </ul>
        </div>
    );
}