import React from 'react'
import './NoPage.css'
const bodyPage = {
  width: '1280px',
  margin: '0 auto',
  height: '840px',
  backgroundColor: '#F1EDEA',




}
const home = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  textAlign: 'center',

}
const container = {

  backgroundColor: '#FFFFFF',
  width: '1180px',
  margin: '0 auto',
  height: '585px',
  display: "flex",
  justifyContent: "center",
  alignItems: 'center',
  padding: '60px',
}
const message = {
  fontSize: '80px',
  color: '#85BC23',
  fontWeight: 'bold'
}


const title = {
  fontWeight: 'bold',
  textAlign: 'start',
}
const firstText = {
  fontSize: '16px',
  padding: '15px 120px',
  textAlign: 'start',

}
const secondText = {
  fontSize: '16px',
  padding: '15px 120px',
  textAlign: 'start',
}

const back = {
  fontSize: '16px',
  fontColor: '#85BC23',
  textAlign: 'start'
}

const search = {
  fontWeight: 'bold',
  textAlign: 'start',
}



export default function NoPage() {
  return (

    <div style={bodyPage}>
      <div style={{ ...home, padding: '60px 15px 0px 15px' }}>
        <div style={{ fontColor: '#85BC23', fontSize: '16px', color: '#85BC23', }}>
          Home
        </div>
        <div style={{ margin: '0px 20px', fontSize: '16px', color: '#85BC23', }}>
          /
        </div>
        <div style={{ fontSize: '16px', color: '#45413E' }}>
          404
        </div>
      </div>

      <div>
        <div
          style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }} >
          <div style={{ flex: 6, height: '2px', backgroundColor: '#999999', opacity: '.3', marginLeft: '60px' }} />
          <div style={{ flex: 2, fontSize: '54px', textAlign: 'center', fontWeight: 'bold', FontColor: '#45413E', padding: '25px 0px 50px 0px' }}>
            404
          </div>
          <div style={{ flex: 6, height: '2px', backgroundColor: '#999999', opacity: '.3', marginRight: '60px' }} />
        </div>
      </div>

      <div style={container}>
        <div Style={{

          color: '#85BC23',

        }}>
          Ooops!
        </div>

        <div>
          <div style={title}>
            Sorry, this page could not bet found!
          </div>
          <div styke={firstText}>
            Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes nascetur ridiculus mus.
          </div>
          <div style={secondText}>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.
          </div>
          <div style={back}>
            Go back to Homepage
          </div>
          <div style={search}>
            Search ou Site
          </div>
        </div>

      </div>
    </div >

  )
}
