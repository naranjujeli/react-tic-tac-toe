import { useState } from 'react';
import '../css/Square.css';

export default function Square(props) {
    const [value, setValue] = useState(null);

    function handleClick() {
        setValue('X');
    }

    return (
        <button className="Square" onClick={handleClick}>
            {value}
        </button>
    );
}