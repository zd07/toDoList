import React, { useState } from "react";
import AddTask from "./AddTask";
import EditTask from "./EditTask";
import "./todo.css";
import "../index.css"

const ToDo = () => {
  const [data, setData] = useState("");
  const [list, setList] = useState([]);
  const [updateTask,setUpdateTask] =useState(-1);
  const collectData = (event) => {
    setData(event.target.value);
  };
  const addItems = () => {
    if (data === "") {
      alert("Write something");
    } else {
      setList((oldList) => {
        return [...oldList, data];
      });
    }
    setData("");
  };
  const handleDelete = (id) =>{
    console.log(8);
      setList((oldList)=>{
        return oldList.filter((element,index)=>{
          return index!==id;
        })
      })
  }
  const handleEdit = (id) => {
    setUpdateTask(id);
    // console.log(update)
  }
  const update = () =>{
    setUpdateTask(-1);
  }
  return (
     <div className="mainDiv">
      {/* // <div className="center"> */}
      {/* <div className="h1-div"> */}
        <h1>My Tasks</h1>
        {/* </div> */}
        <div className="heading">
          <input
            className="input"
            type="text"
            onChange={collectData}
            value={data}
            placeholder='Add Task'
          />
          <button onClick={addItems} className="btnAdd">
            +
          </button>
        </div>
        <div>
          {list.map((value, index) => {
            if(updateTask===index){
             return <EditTask
             ket={index}
             id={index}
             text={value}
             setList={setList}
             list={list}
             update={update}
             />
            }
            else{
           return <AddTask
            key={index}
            id={index}
            text={value}
            remove={handleDelete}
            edit={handleEdit}
            />
            }
          })}
        </div>
      {/* </div> */}
    </div>
  );
};

export default ToDo;
