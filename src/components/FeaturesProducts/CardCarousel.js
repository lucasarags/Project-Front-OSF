import React from 'react'
import './CardCarousel.css'
import { FaHeart, FaPlus } from 'react-icons/fa';
import { Link } from 'react-router-dom';

export default function Card(props) {
  return (
    <div key={props.id}>
      {props.isOdd
        ?
        <div className="container-item-c" >
          <div className="image-c" >
            <img src={props.image} id="resized-image" />
          </div>

          <div className='info-c'>
            <div className='name-c'>
              {props.name}
            </div>

            <div className='price-alone-c'>
              $ {props.price}
            </div>
          </div>
          <div>
            <button className='btn-left-c' ><FaPlus color="36C18A" size={34} vertical-align='center' /></button>
            <button className='btn-right-c' ><FaHeart color="#E73C68" size={34} vertical-align='center' /></button>
          </div>
        </div>
        :
        <div className="item-c" >

          <div className="image-c" >
            <Link to="/ProductDetails" >
              <img src={props.image} id="resized-image" />
            </Link>
          </div>

          <div className='info-c'>
            <div className='name-c'>
              <Link to="/ProductDetails" style={{ textDecoration: 'none', color: '#262A33' }}>
                {props.name}
              </Link>
            </div>
            <div className='div-button-c'>
              <Link to="/ProductDetails">
                <button className='price-c'>
                  $ {props.price}
                </button>
              </Link>
              <button className='buy-c'>
                BUY NOW
              </button>
            </div>
          </div>

        </div>}
    </div >
  )
}

