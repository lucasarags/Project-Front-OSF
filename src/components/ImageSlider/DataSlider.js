import styled from "styled-components";
import React from 'react';
import ImageSlider from "./ImageSlider";
import { FaFacebookF } from 'react-icons/fa';
import { Link } from 'react-router-dom';


const DataSlider = () => {
  const containerStyles = {
    width: "1280px",
    height: "500px",



  };
  const containerPrincipal = {
    width: '1280px',
    margin: '0 auto',
    paddingTop: '75px',

  }

  const cointanerImage = {
    background: '#85BC23',
    borderRadius: '5px',
    opacity: '1',
    width: '265px',
    height: '330px',
    margin: '0px 0px 0px 30px',


  }
  const insideDiv = {
    display: 'flex',
    flexDirection: 'column',
    padding: '0px 0px 0px 30px'
  }
  const textTitleDiv = {
    display: 'flex',
    justifyContent: 'space-around',
    marginTop: '20px',
    fontSize: '18px'
  }
  const textDiv = {
    display: 'flex',
    justifyContent: 'space-around',
    marginTop: '15px',
    fontSize: '12px',
    textAlign: 'center'
  }
  const percent = {
    display: 'flex',
    justifyContent: 'space-around',
    padding: '60px 30px 30px 30px',
    fontSize: '90px',
    color: '#FFFEFF',
    fontWeight: 'bold'
  }
  const textPercent = {
    display: 'flex',
    justifyContent: 'space-around',
    flexDirection: 'column',
    textAlign: 'center',
    padding: '15px 30px 60px 30px',
    fontSize: '30px',
    color: '#FFFEFF',

  }
  const containerDiv = {
    display: 'flex',
    justifyContent: 'space-around',
    flexDirection: 'row',
    padding: '30px 60px 0px 60px',

  }


  const slides = [
    { url: "teste1.png" },
    { url: "teste2.png" },
    { url: "teste3.png" },
    { url: "teste1.png" },
    { url: "teste2.png" },
  ];

  const Button = styled.button`
background-color: transparent;
color:#3A5B95;
padding: 10px 30px;
border: 2px solid #3B5B96;
border-radius: 20px;
outline: 0;
cursor: pointer;
display: flex;
justifyContent: center;

`;

  return (
    <div style={containerPrincipal}>
      <div style={containerDiv}>
        <div style={containerStyles}>
          <ImageSlider slides={slides}>

          </ImageSlider>
        </div>

        <section>
          <div style={cointanerImage}>
            <div style={percent}>
              55%
            </div>
            <div style={textPercent}>
              SUMMER SALE
            </div>
          </div>
          <div style={{ margin: '30px 30px' }}>
            <div style={insideDiv}>
              <div style={textTitleDiv}>
                Follow us on facebook
              </div>
              <div style={textDiv}>
                Send ut perspiciatis unde omnis iste natus error sit
              </div>
              <div style={textDiv}>
                <Link to="/facebook-link" target="_blank" rel="noreferrer" style={{ textDecoration: 'none' }}>
                  <Button>
                    <FaFacebookF />
                    <div style={{
                      paddingLeft: '15px',
                    }}>
                      FOLLOW
                    </div>
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section >
      </div >
    </div >
  );
};

export default DataSlider;