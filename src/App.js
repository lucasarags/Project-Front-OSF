import React, { useEffect, useState } from "react"
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Navbar from './components/Navbar/Navbar';
import DataSlider from './components/ImageSlider/DataSlider';
import PopularItems from './components/Card/PopularItems'
import Banner from './components/Banner/Banner'
import FeaturesProducts from './components/FeaturesProducts/FeaturesProducts'
import Footer from './components/Footer/Footer'
import NoPage from './components/NoPage/NoPage'
import Content from './components/Content/Content'
import Services from './components/Services/Services'
import PopularTitle from './components/Card/PopularTitle'
import TitleServices from './components/Services/TitleServices'
import Tabs from './components/TabContent/Tabs'
import ProductTitle from './components/ProductDetails/ProductTitle'
import Log from './components/LogIn/Log'
import DataThumb from './components/ProductDetails/DataThumb'
import Cookies from './components/Modals/Cookies'

const containerTitle = {
  backgroundColor: '#262A33',
  justifyContent: 'space-around',
  flexDirection: 'row',
  color: 'white',
  textAlign: 'center',
  alignItems: 'center',
  padding: '90px 60px 45px 60px',
  fontWeight: 'bold',
  width: '1280px',
  margin: '0 auto',
}
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
  cursor: 'pointer',
}

const loadMoreBtn = {
  ...btn,
  borderRadius: '30px',
  padding: '10px 86px',
  color: '#ffffff',
  fontSize: '14px',
  opacity: '1',
  margin: '0 auto',
  textAlign: 'center',
  backgroundColor: '#262A33',
  border: '2px solid white',
}


//Pages
const HomePage = ({ isLogin, handleCloseLogin }) => {



  return (
    <div>
      {isLogin ? <Log handleCloseLogin={handleCloseLogin} /> : null}
      <Cookies />

      <DataSlider />
      <PopularTitle style={containerTitle} />
      <PopularItems style={{ ...Appp, backgroundColor: '#262A33' }} loadMoreBtn={loadMoreBtn} />
      <Banner />
      <FeaturesProducts />
      <Content />
      <Footer />


    </div>
  )
};
const NotFound = ({ isLogin, handleCloseLogin }) => {
  return (
    <div>
      {isLogin ? <Log handleCloseLogin={handleCloseLogin} /> : null}
      <NoPage />
      <Footer />

    </div>
  )
};
const ServicesPage = ({ isLogin, handleCloseLogin }) => {
  return (
    <div>
      {isLogin ? <Log handleCloseLogin={handleCloseLogin} /> : null}
      <Services />
      <TitleServices />
      <PopularItems style={{ ...Appp, backgroundColor: '#F2ECEA' }} loadMoreBtn={{ ...loadMoreBtn, backgroundColor: '#85BC23', border: '2px solid #E8E1D6', }} />
      <FeaturesProducts />
      <Footer />
    </div>
  )
};

//test page
const ProductDetails = ({ isLogin, handleCloseLogin }) => {
  return (
    <div>
      {isLogin ? <Log handleCloseLogin={handleCloseLogin} /> : null}
      <ProductTitle />
      <DataThumb />
      <Tabs />
      <PopularTitle style={{ ...containerTitle, backgroundColor: '#F2ECEA', color: '#262A33' }} />
      <PopularItems style={{ ...Appp, backgroundColor: '#F2ECEA' }} loadMoreBtn={{ ...loadMoreBtn, backgroundColor: '#85BC23', border: '2px solid #E8E1D6', }} />
      <Content />
      <Footer />

    </div>
  )
};


//Routes
export default function App() {

  const [isLogin, setIsLogin] = useState(false)

  const handleLogin = () => { setIsLogin(true) }
  const handleCloseLogin = () => { setIsLogin(false) }

  const RedirectFacebook = () => {
    useEffect(() => {
      window.location.replace('https://www.facebook.com/');
    }, [])
  }
  const RedirectGooglePlus = () => {
    useEffect(() => {
      window.location.replace('https://plus.google.com/');
    }, [])
  }
  const RedirectTwitter = () => {
    useEffect(() => {
      window.location.replace('https://twitter.com/');
    }, [])
  }
  const RedirectPinterest = () => {
    useEffect(() => {
      window.location.replace('https://www.pinterest.com');
    }, [])
  }

  return (
    <>
      <Router>
        <Navbar handleLogin={handleLogin} />
        <Routes>

          <Route path="/" element={<HomePage isLogin={isLogin} handleCloseLogin={handleCloseLogin} />} />
          <Route path="/ProductDetails" element={<ProductDetails isLogin={isLogin} handleCloseLogin={handleCloseLogin} />} />
          <Route path="/NotFound" element={<NotFound isLogin={isLogin} handleCloseLogin={handleCloseLogin} />} />
          <Route path="/Services" element={<ServicesPage isLogin={isLogin} handleCloseLogin={handleCloseLogin} />} />
          <Route path='/facebook-link' element={<RedirectFacebook />} />
          <Route path='/googleplus-link' element={<RedirectGooglePlus />} />
          <Route path='/twitter-link' element={<RedirectTwitter />} />
          <Route path='/pinterest-link' element={<RedirectPinterest />} />
          <Route path="/auth" element={<Log />} />
        </Routes>
      </Router>
    </>
  )

}
