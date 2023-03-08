import React from 'react'
import {Routes,Route} from "react-router-dom"
import Home from './Home'
import Hotels from './Hotels'
import Singlehotel from './Singlehotel'
const Allroutes = () => {
  return (
    <Routes>
        <Route path="/" element={<Home/>}>
         Home
        </Route>
        <Route path="/hotels" element={<Hotels/>}>
         Hotels
        </Route>
        <Route path ="/singleHotel/:hotelId" element={<Singlehotel/>}>
          Single Hotel
        </Route>
    </Routes>
  )
}

export default Allroutes