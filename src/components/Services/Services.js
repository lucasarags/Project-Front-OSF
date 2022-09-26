import React from 'react'


const containerServices = {
  width: '1280px',
  margin: '0 auto',
  height: '180px',
  backgroundColor: '#F2ECEA',
  display: "flex",
  justifyContent: 'center',
  flexDirection: 'column'


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
          Home
        </div>
        <div style={{ margin: '0px 20px', fontSize: '12px', }}>
          /
        </div>
        <div style={{ fontSize: '12px', color: '#45413E' }}>
          Category Landing Services
        </div>
      </div>

      <div>
        <div
          style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }} >
          <div style={{ flex: 3, height: '2px', backgroundColor: '#ffffff', opacity: '1', marginLeft: '60px', justifyContent: 'center' }} />
          <div style={{ flex: 3, fontSize: '54px', textAlign: 'center', fontWeight: 'bold', FontColor: '#45413E', margin: '20px 0px 40px 0px', opacity: '0.7', }}>
            Services
          </div>
          <div style={{ flex: 3, height: '2px', backgroundColor: '#ffffff', opacity: '1', marginRight: '60px' }} />
        </div>
      </div>

    </div>

  )
}
