import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'

const Update = () => {
    const { id } = useParams();
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
   
    useEffect(() => {
        axios.post("http://localhost:3001/getUpdateData", {id})
            .then(res => {
                setPNumber(res.data.pnumber);
                setPName(res.data.pname);
                setBuyingPrice(res.data.buyingprice);
                setBought(res.data.bought);
                setAmountOut(res.data.amountout);
                setSellingPrice(res.data.sellingprice);
                setSold(res.data.sold);
                setStock(res.data.stock);
                setUnitProfit(res.data.unitprofit);
                setProfit(res.data.profit);

            })
            .catch(
                err => {console.log(err)},
            )

    }, [id])

    const handleSubmit = (e) => {
        e.preventDefault();
        try {
            axios.post("http://localhost:3001/Update", {id,pnumber,pname,buyingprice,bought,amountout,sellingprice,sold,stock,unitprofit,profit})
                .then((response) => {
                    console.log(response);
                    navigate("/")
                })
                .catch((err) => { console.log(err) })

        } catch (error) {

        }
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
            <input type='number' placeholder='pnumber' name='pnumber' value={pnumber} onChange={(e)=>{setPNumber(e.target.value)}} required />
            <input type='text' placeholder='pname' name='pname' value={pname} onChange={(e)=>{setPName(e.target.value)}} required />
            <input type='number' placeholder='buyingprice' name='buyingprice' value={buyingprice} onChange={(e)=>{setBuyingPrice(e.target.value)}} required />
            <input type='number' placeholder='bought' name='bought' value={bought} onChange={(e)=>{setBought(e.target.value)}} required />
            <input type='number' placeholder='sellingprice' name='sellingprice' value={sellingprice} onChange={(e)=>{setSellingPrice(e.target.value)}} required />
            <input type='number' placeholder='sold' name='sold' value={sold} onChange={(e)=>{setSold(e.target.value)}} required />
           
                <input type="submit" value="submit" />
            </form>
        </div>
    )
}

export default Update