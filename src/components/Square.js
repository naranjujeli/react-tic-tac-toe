import '../css/Square.css';

export default function Square(props) {
    return (
        <button className="Square" onClick={() => { props.handleClick(props.id) }}>
            {props.value}
        </button>
    );
}