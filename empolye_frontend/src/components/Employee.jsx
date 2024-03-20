import React, {  useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import List from "./List";

const Employee = () => {
  const navigate = useNavigate();
 

  return (
   <>
        {/* <h3 className="he">
          Report of Annual Employee expenses of ABCD PVT Ltd
        </h3> */}
      
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
 </>             
  );
};

export default Employee;
