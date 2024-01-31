import axios from 'axios';
import React, { useState } from 'react'
import { AiFillDelete } from 'react-icons/ai'
import { baseURL } from '../utils/constant';

const Popup = ({setShowPopup,popupContent,setUpdateUI}) => {
    const [input,setInput]= useState(popupContent.text);
    const [title, setTitle] = useState(popupContent.title);



const updateToDo = () =>{
        axios.put(`${baseURL}/update/${popupContent.id}`,
        {toDo:input,
        title:title})
        .then((res) =>{
            console.log(res.data);
            setUpdateUI((prevState) =>(!prevState));
            setShowPopup(false);
        })
        .catch((err) => console.log(err));
    };
  return (
    <div className='backdrop'>
        <div className='popup'>
            <AiFillDelete className='cross' onClick={() => setShowPopup(false)}/>
            <h1>Update ToDo </h1>

            <div className="popup__input_holder">
            <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
            type='text'
           placeholder='Update Title...'
  />
            <input 
          value={input} 
          onChange={(e) =>setInput(e.target.value)}
          type='text'
          placeholder='Update ToDo...'/>
          <button onClick={updateToDo}>Update</button>
            </div>
        </div>
    </div>
  )
}

export default Popup