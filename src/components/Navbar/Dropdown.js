
import { MenuItemsCategories } from "./MenuItems"

import { MenuItemsSale } from "./MenuItems"
import React, { useState } from "react"
import { Link } from 'react-router-dom';
import './Dropdown.css';
import image from './imagesNavbar/Layer162.png'

const dropdownImg = {

  borderRadius: '5px',
  width: '265px',
  height: '265px',
  backgroundImage: `url(${image})`
}


export default function Dropdown() {
  const [click, setClick] = useState(false)
  const handleClick = () => setClick(!click)

  return (

    <>
      <div >

        <ul onClick={handleClick}
          className={click ? 'dropdown-menu clicked' : 'dropdown-menu'}>
          <section>

            <section className="section-dropdown">
              <div className='list-container'>
                <div className="div-dropdown">
                  PRODUCT CATEGORIES
                </div>
                {MenuItemsCategories.slice(0, 8).map((item, index) => {
                  return (
                    <li>
                      <Link key={index} className={item.cName} to={item.path} onClick={handleClick}>{item.title}</Link>
                    </li>
                  )
                })}
              </div>

              <div className='list-container'>
                <div className="vazio">
                  .
                </div>
                {MenuItemsCategories.slice(8, 16).map((item, index) => {
                  return (
                    <li>
                      <Link key={index} className={item.cName} to={item.path} onClick={handleClick}>{item.title}</Link>
                    </li>
                  )
                })}
              </div>

              <div className='list-container'>
                <div className="vazio">
                  .
                </div>
                {MenuItemsCategories.slice(16, 24).map((item, index) => {
                  return (
                    <li>
                      <Link key={index} className={item.cName} to={item.path} onClick={handleClick}>{item.title}</Link>
                    </li>
                  )
                })}
              </div>

              <div className='list-container'>
                <div className="div-dropdown">
                  SALE
                </div>
                {MenuItemsSale.map((item) => {
                  return (
                    <li >
                      <Link className={item.cName} to={item.path} onClick={handleClick}>{item.title}</Link>
                    </li>
                  )
                })}
              </div>
              <div className="vazio">
                <div>

                </div>
                <div style={dropdownImg}>

                </div>
              </div>
            </section>
          </section>
        </ul>

      </div>
    </>

  )
}