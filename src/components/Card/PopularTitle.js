import React from 'react'


const container = {
  backgroundColor: '#262A33',
  justifyContent: 'space-around',
  flexDirection: 'row',
  color: 'white',
  textAlign: 'center',
  alignItems: 'center',
  padding: '90px 60px 45px 60px',
  fontWeight: 'bold',
  width: '1280px',
  margin: '0 auto',
}

export default function PopularTitle() {
  return (
    <>
      <div style={container}>
        <div
          style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }} >
          <div style={{ flex: 3.5, height: '2px', backgroundColor: '#999999', opacity: '.3' }} />
          <div style={{ flex: 2, fontSize: '24px', }}>
            Popular Items
          </div>
          <div style={{ flex: 3.5, height: '2px', backgroundColor: '#999999', opacity: '.3' }} />
        </div>
      </div>
    </>
  )
}