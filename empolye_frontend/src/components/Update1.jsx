import axios from 'axios';
import React, {useEffect, useState} from 'react';
import {useParams, useNavigate} from "react-router-dom";

const Update1 = () => {
const {id} = useParams();
const navigate = useNavigate();

const [number,setNumber] = useState("")
const [name,setName] = useState("")
const [monthlysalary,setMonthlySalary] = useState("")


useEffect(() => {
 axios.post("http://localhost:3001/getUpdateData1",{id})
 .then(res => {
      setNumber(res.data.e_number);
      setName(res.data.e_name);
      setMonthlySalary(res.data.e_monthlysalary);
    
 })
 .catch(
  err => {console.log(err)},
 )
}, [id])


const handleSubmit = (e)=>{
  e.preventDefault();
  try{
    axios.post('http://localhost:3001/update1',{id,number,name,monthlysalary})
    .then((response) => {
      console.log(response);
      navigate('/');
    })
    .catch((err) => {console.log(err)})
  } catch (error) {

  }
};

  return (
    <div >
       <form onSubmit={handleSubmit}>
    <input type='number' placeholder='enter Employee no' name='number' value={number} onChange={(e)=>{setNumber(e.target.value)}} required/>
    <input type='text' placeholder='enter Employee name' name='name' value={name} onChange={(e)=>{setName(e.target.value)}} required/>
    <input type='number' placeholder='enter Monthly salary' name='monthlySalary' value={monthlysalary} onChange={(e)=>{setMonthlySalary(e.target.value)}} required/>
    <input type='submit' value="submit" />
    </form>
    </div>
  )
}

export default Update1;