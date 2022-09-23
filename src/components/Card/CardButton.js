import React from "react";
import "./CardButton.css";


const btn = {
  display: 'flex',
  justifyContent: 'center',
  backgoundColor: '#FFFFFF',
  color: '#262A33',
  padding: '10px 20px',
  cursor: 'pointer',
  marginBottom: '0%'

}

const buttonPrice = {
  ...btn,
  borderTopLeftRadius: '20px',
  borderBottomLeftRadius: '20px',

}
const buttonBuy = {
  ...btn,
  borderTopRightRadius: '20px',
  borderBottomRightRadius: '20px',

}

export default function CardButton(props) {

  return (


    <div className="item" key={props.id}>
      <div className="image">
        <img src={props.image} />
      </div>
      <div className="info">
        <div className="name">{props.name}</div>
        {props.isOdd ?
          <div style={btn}>
            <button style={buttonPrice}>
              $ {props.price}
            </button>
            <button style={buttonBuy}>
              BUY NOW
            </button>
          </div>
          : null}
      </div>


    </div>

  );
}
