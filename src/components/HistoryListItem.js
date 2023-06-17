import '../css/HistoryListItem.css';

export default function HistoryListItem(props) {
    return (
        <li className="HistoryListItem">
            <button className="HistoryListItem-button" onClick={() => {props.handleClick(props.id)}}>
                {props.id==0 ? 'Start over' : 'Go to move #'+props.id}
            </button>
        </li>
    );
}