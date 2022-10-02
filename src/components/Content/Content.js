import React from 'react'
import cart from './imagesContent/cart.png'
import cycle from './imagesContent/cycle.png'
import list from './imagesContent/list.png'
const containerContent = {
  width: '1280px',
  margin: '0 auto',
  height: '200px',
  backgroundColor: '#45413E',
  display: "flex",
  justifyContent: 'space-around',
  alignItems: 'center',
  padding: '60px'
}

const containerDiv = {
  display: "flex",
  flexDirection: 'row',
  width: '427px'
}
const title = {
  fontSize: '18px',
  color: '#ffffff',
  textAlign: 'start',
  padding: '0px 40px 15px 30px'
}
const text = {
  fontSize: '14px',
  color: '#ffffff',
  opacity: '0.3',
  padding: '0px 30px 0px 30px',
  lineHeight: '18px'
}


export default function Content() {
  return (

    <div style={containerContent}>

      <div style={containerDiv}>
        <div >
          <img src={cart} alt={'cart'} />
        </div>
        <div>
          <div style={title} >
            FOCUS
          </div>
          <div style={text}>
            Our unwavering focus on superior service delivery and building next generation compencies
          </div>
        </div>
      </div>

      <div style={containerDiv}>
        <div>
          <img src={cycle} alt={'recycle'} />
        </div>
        <div>
          <div style={title}>
            METHOD
          </div>
          <div style={text}>
            A standardized methodology designed to deliver measurable business results and predictables costs
          </div>
        </div>
      </div>

      <div style={containerDiv}>
        <div>
          <img src={list} alt={'list'} />
        </div>
        <div>
          <div style={title}>
            KNOWLEDGE
          </div>
          <div style={text}>
            A highly skilled, proactive workforce that reliably improves each client's ROI while mitigating their business risk
          </div>
        </div>
      </div>

    </div>
  )
}
