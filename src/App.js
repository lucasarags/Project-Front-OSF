import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Navbar from './components/Navbar/Navbar';
import DataSlider from './components/ImageSlider/DataSlider';
import CallCard from './components/Card/CallCard'
import PopularItems from './components/Card/PopularItems'
import Banner from './components/Banner/Banner'
import FeaturesProducts from './components/FeaturesProducts/FeaturesProducts'
import Auth from "./components/LogIn/Auth"
import Footer from './components/Footer/Footer'
import NoPage from './components/NoPage/NoPage'
import Card from './components/Card/Card'
import Content from './components/Content/Content'
import Services from './components/Services/Services'
import PopularTitle from './components/Card/PopularTitle'


const Appp = {
  backgroundColor: '#262A33',
  justifyContent: 'space-around',
  flexDirection: 'column',
  width: '1280px',
  margin: '0 auto',
}

const btn = {
  display: 'flex',
  justifyContent: 'center',
  backgoundColor: '#FFFFFF',
  color: '#262A33',
  padding: '10px 20px',
  cursor: 'pointer',
  marginBottom: '0%'

}

const loadMoreBtn = {
  ...btn,
  borderRadius: '30px',
  padding: '8px 100px',
  color: '#ffffff',
  fontSize: '18px',
  opacity: '0.9',
  margin: '0 auto',
  textAlign: 'center',
  marginTop: '30px',
  marginBottom: '60px',

  backgroundColor: '#262A33',
  border: '2px solid white',
}


//Pages
const HomePage = () => {
  return (
    <>
      <Navbar />
      <DataSlider />
      <PopularTitle />
      <PopularItems style={{ ...Appp, backgroundColor: '#262A33' }} />
      <Banner />
      <FeaturesProducts />
      <Content />
      <Footer />
    </>
  )
};
const NotFound = () => {
  return (
    <>
      <Navbar />
      <NoPage />
      <Footer />
    </>
  )
};
const ServicesPage = () => {
  return (
    <>
      <Navbar />
      <Services />
      <PopularItems style={{ ...Appp, backgroundColor: '#F2ECEA' }} loadMoreBtn={{ ...loadMoreBtn, backgroundColor: 'green' }} />
      <FeaturesProducts />
      <Footer />
    </>
  )
};

//Routes
export default function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/2" element={<NotFound />} />
          <Route path="/3" element={<ServicesPage />} />
        </Routes>
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


/*
<Navbar />
<DataSlider />
<PopularItems />
<Banner />
<FeaturesProducts />
<NoPage />
<Content />
<Footer />
<Services />
*/