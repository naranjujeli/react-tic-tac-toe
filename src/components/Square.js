import '../css/Square.css';

export default function Square(props) {
    return (
        <button className="Square" onClick={() => { props.onSquareClick(props.id) }}>
            {props.value[props.id]}
        </button>
    );
}