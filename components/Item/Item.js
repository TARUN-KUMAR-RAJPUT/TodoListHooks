import React from 'react'
import './Item.css'

function Item (props) {

    function doneItem(ix){ 
        props.doneItem(ix)
    }

    function removeItem(ix){
        props.removeItem(ix)
    }

    return (
            <li className="item" > 
                {props.item} 
                <button className="btn_done"  
                    onClick = {() => doneItem(props.ix) }
                > Done </button> 
                <button className="btn_rmv"
                    onClick = {() => removeItem(props.ix) }
                > Remove </button> 
            </li> 
    )
}

export default Item







