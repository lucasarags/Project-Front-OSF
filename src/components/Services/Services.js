import React from 'react'
import { Link } from 'react-router-dom';

const containerServices = {
  width: '1280px',
  margin: '0 auto',
  height: '255px',
  backgroundColor: '#F2ECEA',
  display: "flex",
  justifyContent: 'center',
  flexDirection: 'column',
  paddingTop: '75px'
}


const home = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  textAlign: 'center',
}



export default function Services() {
  return (

    <div style={containerServices}>

      <div style={{ ...home, padding: '50px 0px 0px 0px' }}>
        <div style={{ fontColor: '#85BC23', fontSize: '12px', color: '#85BC23', }}>
          <Link to="/" style={{ textDecoration: 'none', color: '#85BC23' }}>
            Home
          </Link>
        </div>
        <div style={{ margin: '0px 20px', fontSize: '12px', }}>
          /
        </div>
        <div style={{ fontSize: '12px', color: '#45413E' }}>
          <Link to="/" style={{ textDecoration: 'none', color: '#45413E' }}>
            Category Landing Services
          </Link>
        </div>
      </div>

      <div>
        <div
          style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }} >
          <div style={{ flex: 3, height: '2px', backgroundColor: '#ffffff', opacity: '1', marginLeft: '60px', justifyContent: 'center' }} />
          <div style={{ flex: 3, fontSize: '46px', textAlign: 'center', fontWeight: 'bold', FontColor: '#45413E', margin: '20px 0px 40px 0px', opacity: '0.7', }}>
            Services
          </div>
          <div style={{ flex: 3, height: '2px', backgroundColor: '#ffffff', opacity: '1', marginRight: '60px' }} />
        </div>
      </div>

    </div>

  )
}
