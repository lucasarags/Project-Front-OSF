import React from 'react'
import './Card.css'
import { FaHeart, FaPlus } from 'react-icons/fa';
import { Link } from 'react-router-dom';

export default function Card(props) {
  return (
    <div key={props.id}>
      {props.isOdd
        ?
        <div className="container-item">
          <div className="image">

            <img src={props.image} id="resized-image" />

          </div>

          <div className='info'>
            <div className='name'>
              {props.name}
            </div>

            <div className='price-alone'>
              $ {props.price}
            </div>
          </div>
          <div>
            <button className='btn-left' ><FaPlus color="36C18A" size={34} vertical-align='center' /></button>
            <button className='btn-right' ><FaHeart color="#E73C68" size={34} vertical-align='center' /></button>
          </div>
        </div>
        :
        <div className="item">

          <div className="image">
            <Link to="/ProductDetails">
              <img src={props.image} id="resized-image" />
            </Link>
          </div>

          <div className='info'>

            <div className='name'>
              <Link to="/ProductDetails" style={{ textDecoration: 'none', color: '#262A33' }}>
                {props.name}
              </Link>
            </div>

            <div className='div-button'>
              <Link to="/ProductDetails">
                <button className='price'>
                  $ {props.price}
                </button>
              </Link>
              <button className='buy'>
                BUY NOW
              </button>
            </div>
          </div>

        </div>}
    </div >
  )
}

