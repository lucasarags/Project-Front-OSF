import React, { useState } from "react"
import './Log.css'


export default function Log({ handleCloseLogin }) {

  return (
    <div >
      <div className="modal" onClick={handleCloseLogin} />
      <div className="containerLog">
        <div className="sign">
          Sign in
        </div>
        <div>
          <div className="email-title">
            Email
          </div>
          <input id="demoTextBox" type="email" value="" class="inputDataText" placeholder="email" />
        </div>

        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <div className="password-title">Lato</div>
          <div className="forgot">Fogot password</div>
        </div>
        <div class="inputwrapper" data-required="">
          <input id="demoTextBox" type="password" value="" class="inputDataText" placeholder="password" min={6} />
        </div>

        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <button className="button-log">LOGIN</button>
        </div>

        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <span className="span">I don't have an account</span>
        </div>
      </div>
    </div>

  )
}
