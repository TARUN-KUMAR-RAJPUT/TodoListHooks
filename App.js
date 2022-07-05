import { useState } from 'react';
import './App.css';
import Form from "./components/Form/Form"
import Header from './components/Header/Header';
import List from './components/List/List';


function App () {
  
  const [mylist, setMylist] = useState([])
 
  function addItem(item){
    setMylist([...mylist, item])
  }
  

  function doneItem(ix) {
    let arr = mylist
    arr[ix] = <s> {arr[ix]} </s>
    setMylist(arr)
  }

  function removeItem(ix) {
    var arr = []
    mylist.map((ele, i) => {
      if( i !== ix) arr.push(ele)
    })
    
    setMylist(arr)
  }

    return (
      <div >  
        <Header />
        <Form  addItem = {addItem } /> 
        <List mylist = {mylist } doneItem = {doneItem} removeItem = {removeItem} />
      </div>
    );
  
}

export default App;
