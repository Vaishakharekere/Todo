import axios from 'axios';
import React from 'react'
import { AiFillEdit } from "react-icons/ai";
import { AiFillDelete } from "react-icons/ai";
import { baseURL } from '../utils/constant';

const ToDo = ({text,id,setUpdateUI,setShowPopup,setPopupContent,completed,title}) => { 
  const deleteTodo = () => {
  axios.delete(`${baseURL}/delete/${id}`)
  .then((res) => {
    console.log(res.data);
    setUpdateUI((prevState) => !prevState);
  })
  .catch((err) => console.log(err));
};

const updateToDo = () => {
  setPopupContent({text,id,title})
  setShowPopup(true);
}

const toggleCompleted = async (id) => {
  try {
    await axios.put(`${baseURL}/toggle/${id}`);
    setUpdateUI((prevState) => (!prevState));
  } catch (error) {
    console.error(error);
  };
};


  return (
    <div className='toDo'>
      <input type="checkbox" checked={completed} onChange={() => toggleCompleted(id)} />
       <div className={`toDo1 ${completed ? 'completed' : ''}`}>
        <div>{title}</div>
        <h2>{text}</h2>
       </div>
        <div className='icons'>
            <AiFillEdit className='icon'onClick={updateToDo}/>
            <AiFillDelete className='icon' onClick={deleteTodo}/>
    
        </div>
    </div>
    
  )
}

export default ToDo
