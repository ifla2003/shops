import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Employee from "./Employee";


const Turnover = () => {
  const navigate = useNavigate("");
  const [employeeData, setOverData] = useState([]);
  const [pnumber, setPNumber] = useState("");
  const [pname, setPName] = useState("");
  const [buyingprice, setBuyingPrice] = useState("");
  const [bought, setBought] = useState("");
  const [amountout, setAmountOut] = useState("");
  const [sellingprice, setSellingPrice] = useState("");
  const [sold, setSold] = useState("");
  const [stock, setStock] = useState("");
  const [unitprofit, setUnitProfit] = useState("");
  const [profit, setProfit] = useState("");

  useEffect(() => {
   axios
     .get("http://localhost:3001/employeeData")
     .then((response) => {
      setOverData(response.data);
      // console.log(response.data);
     })
     .catch((error) => {
       console.log(error);
     });
 }, [employeeData]);

  useEffect(() => {
    axios
      .get("http://localhost:3001/turnOver")
      .then((response) => {
        setOverData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [employeeData]);
  {
   console.log(employeeData)
   
    employeeData.map((employee) => {
      return (
         //  <List
         //    key={employee.id}
         //    id={employee.id}
         //   pnumber={employee.pnumber}
         //    pname={employee.pname}
         //    buyingprice={employee.buyingprice}
         //    bought={employee.bought}
         //    amountout={employee.amountout}
         //    sellingprice={employee.sellingprice}
         //    sold={employee.sold}
         //    stock={employee.stock}
         //    unitprofit={employee.unitprofit}
         //    profit={employee.profit}

         //  />

        <div className="employeeData">
          {/* <div>{id}</div> */}
          <div> {pnumber} </div>
          <div>{pname}</div>
          <div> {buyingprice} </div>
          <div> {bought} </div>
          <div> {amountout} </div>
          <div> {sellingprice} </div>
          <div> {sold}</div>
          <div> {stock} </div>
          <div> {unitprofit} </div>
          <div> {profit}</div>
        </div>
      );
    });
   
  }
   
};

export default Turnover;
