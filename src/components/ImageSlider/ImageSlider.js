import { useState } from "react";
import styled from 'styled-components';

const slideStyles = {
  width: "100%",
  height: "100%",
  borderRadius: "5px",
  backgroundSize: "cover",
  backgroundPosition: "center",
};

const sliderStyles = {
  position: "relative",
  height: "100%",
};

const dotsContainerStyles = {
  position: "absolute",
  display: "flex",
  top: "88%",
  left: "45%"
};

const titleImage = {
  display: 'flex',
  justifyContent: 'space-around',
  flexDirection: 'column',
  textAlign: 'start',
  padding: '70px 220px 90px 60px',
  fontSize: '44px',
  color: '#FFFEFF',
  fontWeight: 'bold'
}
const textImage = {
  display: 'flex',
  justifyContent: 'space-around',
  flexDirection: 'column',
  textAlign: 'start',
  padding: '20px 420px 45px 60px',
  fontSize: '14px',
  color: '#FFFEFF',
}

const Button = styled.button`
background-color: transparent;
color:#FFFFFF;
padding: 10px 34px;
border-radius: 20px;
border: 2px solid #FFFFFF;
cursor: pointer;
display: flex;
justifyContent: start;
`;

const Dot = styled.button`
height: 8px;
width: 8px;
border-radius: 50%;
cursor: pointer;
opacity: 0.6;
margin: 0 8px;
display: flex;
justifyContent: center;
border: 0;
outline: 0;
  
  ${({ active }) =>
    active &&
    `
    opacity: 1;
    
   
  `}
`;

const ImageSlider = ({ slides }) => {

  const [currentIndex, setCurrentIndex] = useState(0);

  const slideStylesWidthBackground = {
    ...slideStyles,
    backgroundImage: `url(${slides[currentIndex].url})`,
  };

  return (
    <div style={sliderStyles} >
      <div style={slideStylesWidthBackground}>
        <div style={titleImage}>Control and manage any device with cloud slutions
        </div>
        <div style={textImage}>Improve business performance and the user experience with the right mix of loT technology and processes
        </div>
        <div style={{ margin: '0px 0px 0px 60px' }}>
          <Button>VIEW MORE
          </Button>
        </div>
      </div>
      <div style={dotsContainerStyles}>

        {slides.map((s, slideIndex) => (
          <Dot
            key={slideIndex}
            active={currentIndex === slideIndex}
            onClick={() => setCurrentIndex(slideIndex)
            }

          >


          </Dot>
        ))}
      </div>
    </div >

  );
};

export default ImageSlider;