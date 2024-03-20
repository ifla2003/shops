import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import List from "./List";


const Turnover = () => {
  const navigate = useNavigate("");
  const [employeeData, setOverData] = useState([]);

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

  return(
<>
    <button
    onClick={() => {
      navigate("/AddData");
    }}
  >
    Add Data
  </button>
    
   
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
      {/* <div>
        <div className="s1"> Total amountout = { amountout} </div>
        <div className="s2"> Total unitprofit = {unitprofit} </div>
        <div className="s3"> Total profit = {profit} </div>
      </div> */}
    </div>
   
    </>
);
    }
  

export default Turnover;
