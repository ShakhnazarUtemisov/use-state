import React, {useState} from "react";
import './menu.css';

const Menu = () => {

    const [cart, setCart] = useState(['item 1', 'item 2', 'item 3']);
    const [itemIndex, setitemIndex] = useState(4);

    const date = new Date();
    const [time, setTime] = useState('')

    return (
        <div className="wrapper violet"> 
            <ul className="menu">{`${cart}`}</ul>
            <button className="menu-btn" onClick={()=>{
                        setCart([...cart, `${'item' + itemIndex}`]);
                        setitemIndex(itemIndex + 1)
                    }
                }
            >Add Item
            </button>  
            <p className="timer" {   
                ...setTimeout(() => {
                setTime(date.toLocaleTimeString())
            }, 1000)}
            >{time}</p>  
        </div>
    )
}

export default Menu;