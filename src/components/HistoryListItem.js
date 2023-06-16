import '../css/HistoryListItem.css';

export default function HistoryListItem(props) {
    return (
        <li className="HistoryListItem">{props.value}</li>
    );
}