import HistoryListItem from './HistoryListItem';
import '../css/HistoryList.css';

export default function HistoryList() {
    let listItems = [];
    for (let i = 0; i < 20; i++) {
        listItems.push(<HistoryListItem key={i} value="Hello!" />);
    }
    return (
        <ul className="HistoryList">
            {listItems}
        </ul>
    )
}