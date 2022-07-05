import React from 'react'
import './Form.css'

function Form (props) {
    
    function sendItem() {               
       var x = document.getElementById("mySubmit").value;        
       props.addItem(x)
    }

    return (
      <div>
            <input className='inpt' id ='mySubmit' placeholder='Add Task' />
            <button className='btn'  
                            onClick={() => sendItem()}
            >Add</button>
            < p />
      </div>
    )
  
}

export default Form

