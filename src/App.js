import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Navbar from './components/Navbar/Navbar';
import DataSlider from './components/ImageSlider/DataSlider';
import CallCard from './components/Card/CallCard'
import Test from './components/Card/test'
import Testcopy from './components/Card/testcopy'
import Banner from './components/Banner/Banner'
import FeaturesProducts from './components/FeaturesProducts/FeaturesProducts'
import Auth from "./components/LogIn/Auth"

import NoPage from './components/NoPage/NoPage'



export default function App() {

  return (
    <>


      <Router>


        <Navbar />
        <DataSlider />
        <Testcopy />
        <Banner />
        <FeaturesProducts />
        <NoPage />
      </Router>


    </>
  )

}
/*
<Routes>
          <Route path="/auth" element={<Auth />} />
        </Routes>
        import "bootstrap/dist/css/bootstrap.min.css"
        
        
        */