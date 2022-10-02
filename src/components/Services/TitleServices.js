import React from 'react'
import { IoMdArrowDropdown } from 'react-icons/io'
import { AiOutlineLine } from 'react-icons/ai'
import styled from 'styled-components';

const container = {
  backgroundColor: '#F2ECEA',

  opacity: '0.9',
  width: '1280px',
  margin: '0 auto',
  padding: '0px 60px 0px',
}
const Button = {
  color: '#262A33',
  padding: '8px 15px',
  cursor: 'pointer',
  borderRadius: '25px',
  border: '2px solid #999999',
  backgroundColor: '#ffffff',
  margin: '15px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  marginLeft: '15px'
}
const divContainer = {
  display: 'flex',
  justifyContent: 'center',

}
const backgroundColor = {
  backgroundColor: '#ffffff',
  borderRadius: '8px',
  display: 'flex',
  padding: '15px 10px',
}

const title = {

  fontSize: '12px',
  fontWeight: 'bold',
  padding: '25px 15px 25px 25px',
}

const DotWhite = styled.button`
height: 20px;
width: 20px;
border-radius: 50%;
background-color: #ffffff;
border: 3px solid black;
margin-right: 10px;
cursor: pointer;
`
const DotLightBlue = styled.button`
height: 14px;
width: 14px;
border-radius: 50%;
background-color: #42C0CE;
border: 0;
margin-right: 10px;
cursor: pointer;
`
const DotBlack = styled.button`
height: 14px;
width: 14px;
border-radius: 50%;
background-color: #3D402D;
border: 0;
margin-right: 10px;
cursor: pointer;
`
const DotGreen = styled.button`
height: 14px;
width: 14px;
border-radius: 50%;
background-color: #49B000;
border: 0;
margin-right: 10px;
cursor: pointer;
`
const DotBlue = styled.button`
height: 14px;
width: 14px;
border-radius: 50%;
background-color: #315BBF;
border: 0;
margin-right: 10px;
cursor: pointer;
`
const DotOrange = styled.button`
height: 14px;
width: 14px;
border-radius: 50%;
background-color: #EB6116;
border: 0;
margin-right: 10px;
cursor: pointer;
`
const DotRed = styled.button`
height: 14px;
width: 14px;
border-radius: 50%;
background-color: #DC041C;
border: 0;
margin-right: 10px;
cursor: pointer;
`
const DotCream = styled.button`
height: 14px;
width: 14px;
border-radius: 50%;
background-color: #EFEAD7;
border: 0;
margin-right: 10px;
margin-top: 22px;
cursor: pointer;
`
export default function TitleServices() {
  return (
    <>
      <div style={container}>
        <div style={backgroundColor}>
          <div style={{ display: 'flex', padding: '0px 90px 0px 0px' }}>
            <div>
              <div style={title}>Price</div>
              <div style={title}>Color</div>
            </div>
            <div>
              <button style={Button}>
                $0.00 <AiOutlineLine />$100.0<IoMdArrowDropdown style={{ marginLeft: '50px' }} />
              </button>
              <div style={{ marginTop: '28px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginLeft: '15px' }}>
                <DotWhite /><DotLightBlue /><DotBlack /><DotGreen /><DotBlue /><DotOrange /><DotRed /><DotCream />
              </div>
            </div>
          </div>
          <div style={{ display: 'flex', padding: '0px 120px 0px 0px' }}>
            <div>
              <div style={title}>Brands</div>
              <div style={title}>Sort by</div>
            </div>
            <div>
              <div>
                <button style={Button}>
                  Ukraine sport<IoMdArrowDropdown style={{ marginLeft: '60px' }} />
                </button>
              </div>
              <div style={{ marginTop: '28px' }}>
                <button style={Button}>
                  Price<IoMdArrowDropdown style={{ marginLeft: '110px', }} />
                </button>
              </div>
            </div>
          </div>

          <div>
            <div style={title}>Size</div>
            <div style={title}>Show</div>
          </div>
          <div>
            <div>
              <button style={Button}>
                Small<IoMdArrowDropdown style={{ marginLeft: '105px' }} />
              </button>
            </div>
            <div style={{ marginTop: '28px' }}>
              <button style={Button}>
                16 per page<IoMdArrowDropdown style={{ marginLeft: '65px', }} />
              </button>
            </div>
          </div>

        </div>
        <div style={{ ...divContainer, padding: '30px' }}>
          12.931 results in apparel
        </div>

      </div>
    </>
  )
}