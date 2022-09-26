import { FooterItems } from "./FooterItems"
import React, { useState } from "react"
import { Link } from 'react-router-dom';
import './Footer.css'


export default function Footer() {
  const [click, setClick] = useState(false)
  const handleClick = () => setClick(!click)
  return (
    <div className="container-footer">
      <div className="info">
        <div style={{ padding: '0px 140px 30px 0px' }}>
          &copy; Copyright 2019. All rights Reserved.
        </div>
        <div style={{ padding: '0px 140px 10px 0px' }}>
          CONTACT
        </div>
        <div style={{ padding: '0px 60px 20px 0px' }}>
          <div>Headquarters: </div>
          <div>5600,Blvd. des Galeries, Bur 530 Québec, Québec G2K 2H6</div>

        </div>
        <div style={{ padding: '0px 60px 20px 0px' }}>
          contact@osf-global.com
        </div>
        <div>
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
      <div className='icons'>
        <div>o</div>
        <div>o</div>
        <div>o</div>
        <div>o</div>
      </div>
    </div>
  )
}