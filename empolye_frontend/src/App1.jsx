import React from 'react';
import {BrowserRouter,Routes,Route}from "react-router-dom";
import Students from './components/EmployeReport';
import AddData1 from './components/AddData1';
import Update1 from './components/Update1';


const App = () => {
  return (
    <BrowserRouter>
    <Routes>
        <Route path='/' element={<Students/>}/>
        <Route path='/AddData' element={<AddData1/>}/>
        <Route path='/Update/:id' element={<Update1/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App;