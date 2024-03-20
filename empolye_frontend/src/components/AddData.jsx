import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

const AddData = () => {
    const navigate = useNavigate()
    const [pnumber,setPNumber] = useState("")
    const [pname,setPName] = useState("")
    const [buyingprice,setBuyingPrice] = useState("")
    const [bought,setBought] = useState("")
    const [amountout,setAmountOut] = useState("")
    const [sellingprice,setSellingPrice] = useState("")
    const [sold,setSold] = useState("")
    const [stock,setStock] = useState("")
    const [unitprofit,setUnitProfit] = useState("")
    const [profit,setProfit] = useState("")
   

const handleSubmit = (e) =>{
e.preventDefault()

axios
.post("http://localhost:3001/addEmployee", {pnumber,pname,buyingprice,bought,amountout,sellingprice,sold,stock,unitprofit,profit})
.then(
  (response) => {
   console.log(response.data);
   navigate('/')
    }
  )
.catch(
  (error) => {
    console.log(error);
  }
  )

}


  return (
    <div>
        <form onSubmit={handleSubmit}>
            
            <input type='text' placeholder='pnumber' name='pnumber' value={pnumber} onChange={(e)=>{setPNumber(e.target.value)}} required />
            <input type='text' placeholder='pname' name='pname' value={pname} onChange={(e)=>{setPName(e.target.value)}} required />
            <input type='number' placeholder='buyingprice' name='buyingprice' value={buyingprice} onChange={(e)=>{setBuyingPrice(e.target.value)}} required />
            <input type='number' placeholder='bought' name='bought' value={bought} onChange={(e)=>{setBought(e.target.value)}} required />
            <input type='number' placeholder='sellingprice' name='sellingprice' value={sellingprice} onChange={(e)=>{setSellingPrice(e.target.value)}} required />
            <input type='number' placeholder='sold' name='sold' value={sold} onChange={(e)=>{setSold(e.target.value)}} required />
           
           
            <input type='submit' value="submit" />
        </form>
    </div>
  )
}

export default AddData;