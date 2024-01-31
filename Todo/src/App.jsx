import React, { useEffect, useState } from 'react';
import ToDo from './component/ToDo';
import axios from "axios";
import { baseURL } from './utils/constant';
import Popup from './component/Popup';

const App = () => {
const [toDos, setToDos] =useState([]);
const [input, setInput] =useState("");
const [title, setTitle] = useState("");
const [updateUI,setUpdateUI]= useState(false);
const [showPopup,setShowPopup]=useState(false);
const [popupContent,setPopupContent]=useState({});

useEffect(() => {
  axios
    .get(`${baseURL}/get`)
    .then((res,) => {
      console.log(res.data), // Add this line
      setToDos(res.data)
      
      
    })
    .catch((err) => console.log(err));
}, [updateUI]);


const saveToDo = () => {
  axios
  .post(`${baseURL}/save`,{
    title:title,
    toDo:input,
    })
  .then(res =>{
    console.log(res.data);
    setUpdateUI((prevState) => !prevState)
    setInput("")
    setTitle("")
  })
  .catch((err) => console.log(err));
};

const handleTitleChange = (e) => {
  setTitle(e.target.value);
  };
  return (
    <main>
      <div className='container'>
        <h1 className='title'>ToDo LIST</h1>

        <div className="input_holder">
       
       <input
         value={title}
         onChange={handleTitleChange}
        type='text'
        placeholder='Add Title...'
       />

          <input 
          value={input} 
          onChange={(e) =>setInput(e.target.value)}
          type='text'
          placeholder='Add a ToDo...'/> 
          <button onClick={saveToDo}>Add</button>      
        </div>

          <div className="list">
            {toDos.map(el => 
            <ToDo 
              key={el._id} 
              text ={el.toDo} 
              title={el.title}
              id={el._id} 
              setUpdateUI={setUpdateUI} 
              setShowPopup={setShowPopup}
              setPopupContent={setPopupContent}
              />)}
          </div>
          </div>
          {showPopup && <Popup setShowPopup={setShowPopup} popupContent={popupContent} setUpdateUI={setUpdateUI}/>}
    </main>
   
  )
}

export default App