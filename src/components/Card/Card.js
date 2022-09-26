import React from 'react'
import './Card.css'
import { FaHeart, FaPlus } from 'react-icons/fa';


export default function Card(props) {
  return (
    <div key={props.id}>
      {props.isOdd
        ?
        <div className="container-item">
          <div className="image">
            <img src={props.image} />
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
            <img src={props.image} />
          </div>

          <div className='info'>
            <div className='name'>
              {props.name}
            </div>
            <div className='div-button'>
              <button className='price'>
                $ {props.price}
              </button>
              <button className='buy'>
                BUY NOW
              </button>
            </div>
          </div>

        </div>}
    </div >
  )
}

