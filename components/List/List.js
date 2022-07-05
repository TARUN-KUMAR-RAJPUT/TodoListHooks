import React from "react";
import Item from "../Item/Item";

function List (props) {

    return (
        <div>
            {
                props.mylist.map((ele, i) => 
                <Item key={i} item = {ele} ix = {i}
                doneItem = {props.doneItem}
                removeItem = {props.removeItem}
                    /> )
            }
        </div>
    )
}

export default List