import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import Dropdown from './Dropdown';
import { IoMdArrowDropdown } from 'react-icons/io';


const containerNavbar = {
  display: 'flex',
  justifyContent: 'space-around',
  flexDirection: 'row',
  height: '80px',
  width: '1280px',
  margin: '0 auto',
  /*position: 'fixed',/8/
  /*top: '0',*/
  backgroundColor: '#ffffff',
  borderBottom: '#F3F0E9 solid 2px',
}
const containerLogo = {
  display: 'flex',
  justifyContent: 'space-around',
  alignItems: 'center'
}
const logoImage = {
  ...containerLogo,
  backgroundColor: 'aquamarine',
}
const textLogoPrimary = {
  ...containerLogo,
  fontSize: '32px',
  color: '#021849'
}
const textLogoSecondary = {
  ...containerLogo,
  fontSize: '16px',
  color: '#85BC23'
}

const containerList = {
  display: 'flex',
  justifyContent: 'space-around',
  alignItems: 'center',
}
const containerIcons = {
  display: 'flex',
  justifyContent: 'space-around',
  alignItems: 'center',
  gridGap: '40px',
}
const listItems = {
  display: 'grid',
  gridTemplateColumns: 'repeat(6, auto)',
  gridGap: '0px',
  listStyle: 'none',
  textAlign: 'center',
}


export default function Navbar() {

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
          ICON
        </div>
        <div>
          <div style={textLogoPrimary}>
            OSF
          </div>
          <div style={textLogoSecondary}>
            Academy
          </div>
        </div>
      </div>

      <div style={containerList}>
        <ul style={listItems}>
          <li
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}>
            <Link to='/services' className='nav-links' onClick={handleClick}>
              SERVICES <IoMdArrowDropdown />
            </Link>
            {dropdown && <Dropdown />}
          </li>
          <li>
            <Link to="#" className='nav-linksPage' >COMPANY</Link>
          </li>
          <li>
            <Link to="#" className='nav-linksPage' >LIBRARY</Link>
          </li>
          <li>
            <Link to="#" className='nav-linksPage' >CONTACT US</Link>
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
        <span>O</span>
        <Link to="/auth" className='nav-linksPage' >O</Link>
        <span>O</span>
        <span>O</span>
      </div>

    </nav >
  )
}


