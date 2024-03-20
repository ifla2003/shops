import React from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Update from './components/Update'
import AddData from './components/AddData'
import Employee from './components/Employee'
import Turnover from './components/Turnover'
import Products from './components/Products'
import Aboutus from './components/Aboutus'
import Contacts from './components/Contacts'


const App = () => {
  return (
    <>
        <BrowserRouter>
<Routes>
    <Route path= "/" element={ <Employee />} />
    <Route path= "/AddData" element={ <AddData />} />
    <Route path= "/Update/:id" element={ <Update />} />
    <Route path='/turnOver' element={<Turnover/>}></Route>
    <Route path='/products' element={<Products/>}></Route>
    <Route path='/Aboutus' element={<Aboutus />}></Route>
    <Route path='/contact' element={<Contacts />}></Route>
</Routes>
    </BrowserRouter>
    </>
  )
}

export default App