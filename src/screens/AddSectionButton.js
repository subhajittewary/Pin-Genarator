import React, { useState } from 'react';



const AddSectionButton = () => {
  const [noOfSections,setNoOfSections] = useState([])
  const handleAddSection=()=>{
    setNoOfSections([...noOfSections,noOfSections]);
   return ;
  }
  const handleAddHeading =(id) =>{
    document.getElementById(id).innerHTML+='<input type="text" placeholder="Heading Name"/><input type="text" placeholder="Task Name"/> <button id="task_btn">Add Task Button working intermittently</button>'
    document.getElementById("task_btn").addEventListener('click', () => handleAddTask(id));
  }
  const handleAddTask =(id) =>{
    console.log("id---",id)
    document.getElementById(id).innerHTML+='<br/><input type="text" placeholder="Task Name" />'
  }
  
  return (
    <div>
      {noOfSections.map((value,index)=>{
        const sectionId = Math.random();
        return <> 
        <br/>
        <div id={sectionId}>
        <input type="text" placeholder="Section Name" id={index} key = {index}/>
        <br/>
        <input type="text" placeholder="Heading Name" id={index+1} key = {index+1}/>
        <br/>
        <input type="text" placeholder="Task Name" id={index+2} key = {index+2}/> 
        <br/>
        </div>
        <button onClick={()=>handleAddHeading(sectionId)}>Add Heading</button>
        <button onClick={()=>handleAddTask(sectionId)}>Add Task</button>
        </>  
      })}
      <button onClick={handleAddSection}>Add Section</button>
    </div>
  
  );
}

export default AddSectionButton;