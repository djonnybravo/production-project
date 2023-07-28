import React, {useState} from 'react';
import './Counter.scss'

export const Counter = () => {
    const [count, setCount] = useState(0)
    return (
        <div>
            <div>{count}</div>
            <button onClick={() => setCount(prevState => count + 1)}>increment</button>
            <button onClick={() => setCount(prevState => count - 1)}>decrement</button>
        </div>
    );
};

