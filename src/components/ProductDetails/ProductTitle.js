import React from 'react'

const container = {
  width: '1280px',
  margin: '0 auto',
  height: '260px',
  backgroundColor: '#F2ECEA',
  display: "flex",
  justifyContent: 'center',
  flexDirection: 'column',
  paddingTop: '90px'
}
const containerDiv = {
  display: "flex",
  justifyContent: 'center',
  flexDirection: 'row'
}

const greenText = {
  color: '#85BC23',
  fontSize: '14px',
  margin: '0px 8px',
}
const text = {
  color: '#45413E',
  fontSize: '14px',
}
const title = {
  ...containerDiv,
  color: '#45413E',
  fontSize: '44px',
  fontWeight: 'bold',
  padding: '15px',
  flex: 3,
}
export default function ProductTitle() {
  return (
    <>
      <div style={container}>
        <div>
          <div style={containerDiv}>
            <div style={greenText}>Home</div>
            <div style={greenText}>/</div>
            <div style={greenText}>OSF Theme</div>
            <div style={greenText}>/</div>
            <div style={text}>Archi Desk Accessories Pen Cup</div>
          </div>
          <div
            style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }} >
            <div style={{ flex: 0.8, height: '2px', backgroundColor: '#999999', opacity: '0.2', marginLeft: '60px', justifyContent: 'center' }} />
            <div style={title}>
              Archi Desk Accessories Pen Cup
            </div>
            <div style={{ flex: 0.8, height: '2px', backgroundColor: '#999999', opacity: '0.2', marginRight: '60px' }} />
          </div>
        </div>
      </div>
    </>
  )
}

<div
  style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }} >
  <div style={{ flex: 3, height: '2px', backgroundColor: '#ffffff', opacity: '1', marginLeft: '60px', justifyContent: 'center' }} />
  <div style={title}>
    Archi Desk Accessories Pen Cup
  </div>
  <div style={{ flex: 3, height: '2px', backgroundColor: '#ffffff', opacity: '1', marginRight: '60px' }} />
</div>