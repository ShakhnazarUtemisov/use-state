import React, { useState } from "react";
import './lucky.css';

const Lucky = () => {

    let [name, setName] = useState('');
    let [count, setCount] = useState(0);
    let [randomNumber, setNumber] = useState(67);
    
    function createNumber(){    
        setNumber(Math.floor(Math.random()*100))
    }

    function counter(){
        setName(`${name}y`)
        setCount(count + 1)
    }
    
    return (
        <div className="wrapper yellowgreen">
            <p className="name">Welocome Cool Guy{name}</p>
            <p className="number">Your lucky number is {randomNumber}</p>
            <p className="count">Name has changed {count} times</p>

            <button onClick={counter}>Change name</button>
            <button onClick={createNumber}>Get new lucky number</button>
        </div>
    )
}

export default Lucky;