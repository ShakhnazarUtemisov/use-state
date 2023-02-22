import React, { useEffect, useState } from "react";
import './counter.css';

const Counter = () => {

    let [count, setCount] = useState(0);

    useEffect(()=>{
        document.p = count;
    })

    function countPlus(){
        setCount(count + 1);
    }

    function countMinus(){
        setCount(count - 1);
    }

    function countReset(){
        setCount(0);
    }


    return (
        <div className="wrapper cyan">
            <div className="counter">{count < 0 ? count = 0 : count}</div>

            <button onClick={countPlus}>+</button>
            <button onClick={countMinus}>-</button>
            <button onClick={countReset}>Reset</button>
        </div>
    )
}

export default Counter;