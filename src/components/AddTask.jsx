import React from 'react'
import "./addTask.css";
import {BiEdit} from 'react-icons/bi'
import {IoMdRemoveCircle} from 'react-icons/io'

const AddTask = (props) => {
  return (
    <div className='to-div1' >
      <div className='inner-div'>
        {props.text}
      </div>
      <div className='btn-div'>
      <button className='edit' onClick={()=>props.edit(props.id)}><BiEdit/></button>
      <button className='remove' onClick={()=>props.remove(props.id)}><IoMdRemoveCircle/></button>
      </div>
      
    </div>
  )
}

export default AddTask

