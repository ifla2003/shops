import React from 'react';
import {useNavigate} from "react-router-dom";
import axios from 'axios';

const EmployeReportList = (props) => {

  const navigate = useNavigate();

    console.log(props)
    const {id,number,name,monthlysalary,tax,insurences,hra} = props
    const yearlysalary = monthlysalary * 12;
      
  
 

    //console.log(typeof(react))

    const handleDelete = () => {
      const id = props.id;
      try {
          axios.post("http://localhost:3001/delete1",{id})
          .than(response => {console.log(response)})
          .catch((error) => {console.log(error)});
          
      } catch (error) {
          console.log(error)
          
      }
  }

    
    

  return (
    <div className='EmployeeData'>
        <div>{id}</div>
        <div>{number}</div>
        <div>{name}</div>
        <div>{monthlysalary}</div>
        <div>{yearlysalary}</div>
         <div>{tax}</div>
         <div>{insurences}</div>
         <div>{hra}</div>
               
        <button className='del' onClick={handleDelete}>Delete</button>
                <button className='up' onClick={() => {navigate (`/Update/${id}`)}}>Update</button>
    </div>
  )
}

export default EmployeReportList ;