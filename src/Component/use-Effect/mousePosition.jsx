import React, { useEffect, useState } from "react";

const MousePosition = () => {

    const [count, setCount] = useState(0)

    const [position, setPosition] = useState({})

    useEffect(()=>{
        const setFromEvent = (e) => {
            setPosition({x: e.clientX, y: e.clientY})
        }
        window.addEventListener('mousemove', setFromEvent);
    })

    function counter(){
        setCount(count + 1)
    }

    return (
        <div className="wrapper cyan">
            <div className="positionWrapper">
                <p>You clicked {count} times</p>
                <button onClick={counter}>Click to counter + 1</button>
            </div>
            <div className="positionValues">
                <p>Position X:{position.x}</p>
                <p>Position Y:{position.y}</p>
            </div>
        </div>
    )
}

export default MousePosition;