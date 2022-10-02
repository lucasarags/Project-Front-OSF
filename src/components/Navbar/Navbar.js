import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import Dropdown from './Dropdown';
import { IoMdArrowDropdown } from 'react-icons/io';
import heart from './imagesNavbar/Heart.png'
import logo from './imagesNavbar/logo.png'
import osf from './imagesNavbar/OSF.png'
import academy from './imagesNavbar/Academy.png'
import bag from './imagesNavbar/Bag.png'
import profile from './imagesNavbar/Profile.png'
import search from './imagesNavbar/Search.png'

const containerNavbar = {
  display: 'flex',
  position: 'fixed',
  zIndex: '99',
  justifyContent: 'flex-end',
  flexDirection: 'row',
  height: '80px',
  width: '1280px',
  margin: '0 auto',
  padding: '0px 50px',

  left: '9.6%',
  backgroundColor: '#ffffff',
  borderBottom: '#F3F0E9 solid 2px',
}
const containerLogo = {
  display: 'flex',
  justifyContent: 'space-around',
  alignItems: 'center',
  marginRight: '90px',
  marginLeft: '10px'
}
const logoImage = {
  cursor: 'pointer'
}
const textLogoPrimary = {
  ...containerLogo,
  fontSize: '32px',
  color: '#021849',
  cursor: 'pointer'


}
const textLogoSecondary = {
  ...containerLogo,
  fontSize: '16px',
  color: '#85BC23',
  marginTop: '2px',
  cursor: 'pointer'

}

const containerList = {
  display: 'flex',
  justifyContent: 'space-around',
  alignItems: 'center',
  marginRight: '35px',
}
const containerIcons = {
  display: 'flex',
  justifyContent: 'space-around',
  alignItems: 'center',
  gridGap: '8px',
}
const listItems = {
  display: 'grid',
  gridTemplateColumns: 'repeat(6, auto)',
  gridGap: '0px',
  listStyle: 'none',
  textAlign: 'center',
}


export default function Navbar({ handleLogin }) {

  const [click, setClick] = useState(false)
  const [dropdown, setDropdown] = useState(false)

  const handleClick = () => setClick(!click)
  const onMouseEnter = () => {
    setDropdown(true);
  };
  const onMouseLeave = () => {
    setDropdown(false);
  };

  return (
    <nav style={containerNavbar}>

      <div style={containerLogo}>
        <div style={logoImage}>
          <Link to='/' onClick={handleClick}>
            <img src={logo} alt={'logo osf'} /> </Link>
        </div>
        <div>
          <div style={textLogoPrimary}>
            <Link to='/' onClick={handleClick}>
              <img src={osf} alt={'osf'} /></Link>
          </div>
          <div style={textLogoSecondary}>
            <Link to='/' onClick={handleClick}>
              <img src={academy} alt={'academy'} /></Link>
          </div>
        </div>
      </div>

      <div style={containerList}>
        <ul style={listItems}>
          <li
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}>
            <Link to='/services' className='nav-links' onClick={handleClick}>
              SERVICES < IoMdArrowDropdown />
            </Link>
            {dropdown && <Dropdown />}
          </li>
          <li>
            <Link to="1" className='nav-linksPage' >COMPANY</Link>
          </li>
          <li>
            <Link to="/2" className='nav-linksPage' >LIBRARY</Link>
          </li>
          <li>
            <Link to="/3" className='nav-linksPage' >CONTACT US</Link>
          </li>
          <li>
            <Link to="#" className='nav-linksState' >EN <IoMdArrowDropdown />
            </Link>
          </li>
          <li>
            <Link to="#" className='nav-linksState' >$US <IoMdArrowDropdown />
            </Link>
          </li>
        </ul>
      </div>

      <div style={containerIcons}>
        <Link to="#" className='nav-linksPage' ><img src={search} alt={'search'} /></Link>
        <Link onClick={handleLogin} className='nav-linksPage' ><img src={profile} alt={'login'} /></Link>
        <Link to="#" className='nav-linksPage' ><img src={heart} alt={'favotite'} /></Link>
        <Link to="#" className='nav-linksPage' ><img src={bag} alt={'shopping bag'} /></Link>
      </div>

    </nav >
  )
}


