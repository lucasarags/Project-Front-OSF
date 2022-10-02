import React from 'react'
import banner from './Layer148.png'

const containerBanner = {
  width: '1280px',
  margin: '0 auto',
  height: '440px',
  backgroundColor: '#262A33',
  display: "flex",
  justifyContent: "space-around",
  alignItems: 'center',
  backgroundImage: `url(${banner})`

}


const text = {

  display: "flex",
  justifyContent: "space-around",
  alignItems: 'center',
  margin: '15px',
  fontWeight: 'bold',
}

export default function Banner() {
  return (

    <div style={containerBanner}>
      <div >
        <div style={{ ...text, fontSize: '42px' }}>
          Banner OSF Theme
        </div >
        <div style={{
          display: 'flex',
          justifyContent: 'space-around',
          flexDirection: 'column', padding: '0px 200px'
        }}>
          <div style={{
            ...text, padding: '0px 230px', textAlign: 'center'
          }}>
            Send ut perspiciatis unde omnis iste natus error sit volup- tatem accusantium
          </div>
        </div>


      </div>
    </div>


  )
}
