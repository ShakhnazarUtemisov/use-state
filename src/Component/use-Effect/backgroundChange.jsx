import React, { useEffect, useState } from "react";

const ChangeBg = ()=> {

    const items = [
        '#ff23de',
        '#333f2d',
        '#dced41',
        '#a4ddf6',
        '#cce321'
    ]

    const [colors, setColor] = useState(items);



    useEffect(()=>{
        const bgColor = document.querySelector('.bgColor');
        bgColor.style.backgroundColor = items[Math.floor(Math.random()*items.length)];
    })

    function changeColor(){
        setColor(Math.floor(Math.random()*items.length))
    }


    return (
        <div className="wrapper bgColor">
            <p>{items[Math.floor(Math.random()*items.length)]}</p>
            <button onClick={changeColor}>Change</button>
        </div>
    )
}

export default ChangeBg;