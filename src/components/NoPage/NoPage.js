import React from 'react'
import './NoPage.css'

const bodyPage = {
  width: '1280px',
  margin: '0 auto',
  height: '720px',
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
  width: '1160px',
  margin: '0 auto',
  height: '490px',
  display: "flex",
  justifyContent: "center",
  alignItems: 'center',
  padding: '60px',
  borderRadius: '8px',

}

const title = {
  fontWeight: 'bold',
  textAlign: 'start',
  margin: '30px 0px',
  fontSize: '24px',

}
const firstText = {
  fontSize: '14px',
  padding: '0px 50px 0px 0px',
  textAlign: 'start',
  lineHeight: '20px'


}
const secondText = {
  fontSize: '14px',
  padding: '15px 50px 15px 0px',
  textAlign: 'start',
  lineHeight: '20px'

}

const back = {
  fontSize: '14px',
  textAlign: 'start',
  margin: '30px 0px 30px 0px',
  color: '#85BC23',
}
const searchTitle = {
  fontWeight: 'bold',
  textAlign: 'start',
  margin: '60px 0px 10px 0px',
  fontSize: '24px',

}

const leftDiv = {
  flex: '4',
  display: 'flex',
  justifyContent: 'space-around',
  fontSize: '120px',
  fontWeight: 'bold',
  color: '#85BC23',
  padding: '50px',

}
const rightDiv = {
  flex: '7',

}

export default function NoPage() {
  return (

    <div style={bodyPage}>
      <div style={{ ...home, padding: '50px 15px 0px 15px' }}>
        <div style={{ fontColor: '#85BC23', fontSize: '14px', color: '#85BC23', }}>
          Home
        </div>
        <div style={{ margin: '0px 20px', fontSize: '14px', color: '#85BC23', }}>
          /
        </div>
        <div style={{ fontSize: '14px', color: '#45413E' }}>
          404
        </div>
      </div>

      <div>
        <div
          style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }} >
          <div style={{ flex: 6, height: '2px', backgroundColor: '#999999', opacity: '.3', marginLeft: '60px', justifyContent: 'center' }} />
          <div style={{ flex: 2, fontSize: '54px', textAlign: 'center', fontWeight: 'bold', FontColor: '#45413E', margin: '20px 0px 40px 0px', opacity: '0.7' }}>
            404
          </div>
          <div style={{ flex: 6, height: '2px', backgroundColor: '#999999', opacity: '.3', marginRight: '60px' }} />
        </div>
      </div>

      <div style={container}>
        <div style={leftDiv}>
          Oops!
        </div>

        <div style={rightDiv}>
          <div style={title}>
            Sorry, this page could not bet found!
          </div>
          <div style={firstText}>
            Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes nascetur ridiculus mus.
          </div>
          <div style={secondText}>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.
          </div>
          <div style={back}>
            Go back to Homepage
          </div>
          <div style={searchTitle}>
            Search our site
          </div>

          <div class="inputwrapper" data-required="(ICON)">
            <input id="demoTextBox" type="text" value="" class="inputDataText" placeholder="SEARCH" />
          </div>

        </div>
      </div>
    </div >

  )
}
