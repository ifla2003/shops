import React,{ useState} from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const AddData1 = () => {
    const navigate = useNavigate()
    const [number,setNumber] = useState("")
    const [name,setName] = useState("")
    const [monthlysalary,setMonthlySalary] = useState("")
    

const handleSubmit = (e)=>{
    e.preventDefault()

    axios.post("http://localhost:3001/addEmployee1",{number,name,monthlysalary})
    .then(
     (response) => {
         //console.log(response.data)
       navigate('/')
     }
    )
    .catch(
     (err) => {
         console.log(err)
     }
    )
}

  return (
    <div className='updateList'>
    <form onSubmit={handleSubmit}>
    <input type='text' placeholder='enter Employee no' name='number' value={number} onChange={(e)=>{setNumber(e.target.value)}} required/>
    <input type='text' placeholder='enter Employee name' name='name' value={name} onChange={(e)=>{setName(e.target.value)}} required/>
    <input type='number' placeholder='enter Monthly salary' name='monthlysalary' value={monthlysalary} onChange={(e)=>{setMonthlySalary(e.target.value)}} required/>
    
    <input type='submit' value="submit" />
    </form>
    </div>
  )
}

export default AddData1;