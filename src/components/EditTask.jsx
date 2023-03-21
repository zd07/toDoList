import React from 'react'
import './todo.css'
import {BsCheckCircleFill} from 'react-icons/bs'
const EditTask = (props) => {
  const editEvent = (event) => {
    const upadtedItem = props.list.map((value,index) =>{
      if(index===props.id){
          return event.target.value
      }
      else{
        return value
      }
    })
    props.setList(upadtedItem);
  }
  return (
    <div className='heading hd'>
    <input className='input' onChange={editEvent} type="text" placeholder="To Do" value={props.text}/>
    <button className="btnAdd" onClick={props.update}><BsCheckCircleFill/></button>
    </div>
  )
}

export default EditTask
