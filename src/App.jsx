import React, { useEffect } from 'react'
import Main from './components/Main'
import { BrowserRouter, Routes,Route } from 'react-router-dom'
import ID2Elec from './components/ID2Elec'
import ID3Furni from './components/ID3Furni'
import ID4Shoes from './components/ID4Shoes'
import ID5111 from './components/ID5111'
const App = () => {
  return(
    <>
    <BrowserRouter>
        <Routes>
          <Route path='/' element={<Main/>}/>
          <Route path='/Elecronics' element={<ID2Elec/>}/>
          <Route path='/Furniture' element={<ID3Furni/>}/>
          <Route path='/Shoes' element={<ID4Shoes/>}/>
          <Route path='/111' element={<ID5111/>}/>
         
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App