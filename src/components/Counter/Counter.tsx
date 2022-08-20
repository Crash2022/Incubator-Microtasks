import React from 'react';
import {useState} from 'react';

export const Counter = () => {
    
    let [counter, setCounter] = useState(0);

    const onClickHandler = () => {
        setCounter(++counter);
    }
    const clearCounter = () => {
        setCounter(0);
    }
        
    return (
        <div className="counter">
            {counter}
            <button onClick={onClickHandler}>counter+</button>
            <button onClick={clearCounter}>clear</button>
        </div>
    );
}