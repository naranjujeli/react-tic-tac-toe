import '../css/HistoryListItem.css';

export default function HistoryListItem(props) {
    return (
        <li className="HistoryListItem">
            <button className="HistoryListItem-button">
                {props.value}
            </button>
        </li>
    );
}