import React, { Profiler, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import List from "./List";

const Employee = () => {
  const navigate = useNavigate();
  const [employeeData, setData] = useState([]);
  var amountout= 0;
  var unitprofit = 0;
  var profit = 0;

  useEffect(() => {
    axios
      .get("http://localhost:3001/employeeData")
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [employeeData]);

  return (
    <>
      <center>
        {/* <h3 className="he">
          Report of Annual Employee expenses of ABCD PVT Ltd
        </h3> */}
        <button
          onClick={() => {
            navigate("/AddData");
          }}
        >
          Add Data
        </button>
        <button
   onClick={() => {
     navigate("/Aboutus");
   }}
 >
 aboutus
 </button>
    
 <button
   onClick={() => {
     navigate("/products");
   }}
 >
  Products
 </button>
 <button
   onClick={() => {
     navigate("/turnOver");
   }}
 >
  Turnover
 </button>
 <button
   onClick={() => {
     navigate("/contact");
   }}
 >
 contact
 </button>

      </center>
      <div className="employeeList">
        <div className="employeeData">
          <div>id</div>
          <div> pnumber </div>
          <div>pname </div>
          <div> buyingprice </div>
          <div> bought </div>
          <div> amountout </div>
          <div> sellingprice </div>
          <div> sold </div>
          <div> stock </div>
          <div> unitprofit </div>
          <div> profit </div>

          {/* <div>total salary</div> */}
        </div>
        {employeeData.map((employee) => {
         
          return (  
            <List
              key={employee.id}
              id={employee.id}
             pnumber={employee.pnumber}
              pname={employee.pname}
              buyingprice={employee.buyingprice}
              bought={employee.bought}
              amountout={employee.amountout}
              sellingprice={employee.sellingprice}
              sold={employee.sold}
              stock={employee.stock}
              unitprofit={employee.unitprofit}
              profit={employee.profit}

            />
          );
        })}
        <div>
          <div className="s1"> Total amountout = { amountout} </div>
          <div className="s2"> Total unitprofit = {unitprofit} </div>
          <div className="s3"> Total profit = {profit} </div>
        </div>
      </div>
    </>
  );
};

export default Employee;