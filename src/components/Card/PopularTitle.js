import React from 'react'

export default function PopularTitle(props) {
  return (
    <>
      <div style={props.style}>
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