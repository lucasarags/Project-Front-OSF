import { FooterItems } from "./FooterItems"
import React, { useState } from "react"
import { Link } from 'react-router-dom';
import './Footer.css'
import p from './imagesFooter/p.png'
import f from './imagesFooter/f.png'
import g from './imagesFooter/g+.png'
import t from './imagesFooter/t.png'


export default function Footer() {
  const [click, setClick] = useState(false)
  const handleClick = () => setClick(!click)


  return (
    <div className="container-footer">
      <div className="info">
        <div style={{ padding: '0px 110px 30px 10px', lineHeight: '' }}>
          &copy; Copyright {(new Date().getFullYear())}. All rights Reserved.
        </div>
        <div style={{ padding: '0px 130px 10px 10px', fontWeight: 'bold' }}>
          CONTACT
        </div>
        <div style={{ padding: '0px 50px 20px 10px', lineHeight: '18px' }}>
          <div>Headquarters: </div>
          <div>5600,Blvd. des Galeries, Bur 530 Québec, Québec G2K 2H6</div>

        </div>
        <div style={{ padding: '0px 50px 20px 10px' }}>
          <button
            style={{ border: '0', background: 'transparent', cursor: 'pointer', color: '' }}
            onClick={() => window.location = 'mailto:yourmail@domain.com'} >contact@osf-global.com</button>
        </div>
        <div style={{ padding: '0px 50px 20px 10px' }}>
          +1(888)548-4344
        </div>
      </div>
      <div>
        <div className="title-list">
          CATEGORIEST
        </div>
        <ul>
          {FooterItems.slice(0, 5).map((item, index) => {
            return (
              <li>
                <Link key={index} className='footer-link' to={item.path} onClick={handleClick}>{item.title}</Link>
              </li>
            )
          })}
        </ul>
      </div>
      <div>
        <div className="void">
          .
        </div>
        <ul>
          {FooterItems.slice(5, 13).map((item, index) => {
            return (
              <li>
                <Link key={index} className='footer-link' to={item.path} onClick={handleClick}>{item.title}</Link>
              </li>
            )
          })}
        </ul>
      </div>
      <div>
        <div className="void">
          .
        </div>
        <ul>
          {FooterItems.slice(13, 17).map((item, index) => {
            return (
              <li>
                <Link key={index} className='footer-link' to={item.path} onClick={handleClick}>{item.title}</Link>
              </li>
            )
          })}
        </ul>
      </div>
      <div>
        <div className="title-list">
          ABOUT
        </div>
        <ul>
          {FooterItems.slice(17, 21).map((item, index) => {
            return (
              <li>
                <Link key={index} className='footer-link' to={item.path} onClick={handleClick}>{item.title}</Link>
              </li>
            )
          })}
        </ul>
      </div>

      <div className="icons">
        <div style={{ AlignItem: 'center', opacity: '0.3', paddingLeft: '0px', }}>
          <Link to="/facebook-link" target="_blank" rel="noreferrer" >
            <img src={f} alt={'facebook'} style={{
              margin: '0 8px', height: '',
              width: '8%',
              backgroundSize: 'cover',
            }} />
          </Link>
          <Link to="/googleplus-link" target="_blank" rel="noreferrer" >
            <img src={g} alt={'googleplus'} style={{
              margin: '0 8px', height: '',
              width: '10%',
              backgroundSize: 'cover',
            }} />
          </Link>
          <Link to="/twitter-link" target="_blank" rel="noreferrer" >
            <img src={t} alt={'twitter'} style={{
              margin: '0 8px', height: '',
              width: '10%',
              backgroundSize: 'cover',
            }} />
          </Link>
          <Link to="/pinterest-link" target="_blank" rel="noreferrer" >
            <img src={p} alt={'pinterest'} style={{
              margin: '0 8px', height: '',
              width: '10%',
              backgroundSize: 'cover',
            }} />
          </Link>
        </div>
      </div>

    </div >

  )
}