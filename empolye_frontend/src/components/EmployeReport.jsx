import React,{useEffect,useState} from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import List from './EmployeReportList';


const EmployeReport = () => {
    const navigate = useNavigate()
    const [employeeData, setData] = useState([]);
    var monthTotallySalary = 0;
    var yearTotallySalary =0;
    var totalEmpolyees =0 ;
    var tax=0;
    var insurences = 0;
   var hra =0;

    useEffect(() => {
      axios
      .get("http://localhost:3001/EmployeeData1")
      .then(
        (response) => {
          setData(response.data);
       
        }
        )
      .catch(
        (error) => {
          console.log(error);
        }
        )
    }, [employeeData]);
  return (
    <>
        <center><h2>Report of Annual Employee expenses of ABCD PVT Ltd</h2>
        <button onClick={()=>{navigate("/AddData")}}>Add Data</button>

        </center>

    
        <div className='EmployeeList'>

        <div className='EmployeeData'>
        <div>id</div>
        <div>number</div>
        <div>name</div>
        <div>monthly salary</div>
        <div>yearly salary</div>
        <div>tax</div>
        <div>insurences</div>
        <div>hra</div>
        <div>Delete</div>
        <div>Update</div>
        
    </div>
   
          {
            employeeData.map(
              (employees) =>{
                monthTotallySalary = monthTotallySalary + parseInt(employees.e_monthlysalary) ;
                //console.log(typeof(monthTotallySalary))
                yearTotallySalary = yearTotallySalary + employees.e_monthlysalary * 12;
                totalEmpolyees++;
                tax= yearTotallySalary*0.2;
                insurences=yearTotallySalary*0.1;
                hra= yearTotallySalary*0.3;

                return <List 
              key={employees.id}
              id={employees.id}
              number ={employees.e_number}
              name ={employees.e_name}
              monthlysalary ={employees.e_monthlysalary}
              yearlysalary ={employees.e_yearlysalary}
              tax ={tax}
              insurences={insurences}
              hra={hra}
              />
              }
            )
          }
          <div className='student_output'>
          <span>total number employees:{totalEmpolyees}</span>
          <span>TotalMonthSalary:{monthTotallySalary}</span>
          <span> TotalYearSalary:{yearTotallySalary}</span>
          </div>
        </div>
        
        
    </>
  )
}

export default EmployeReport;