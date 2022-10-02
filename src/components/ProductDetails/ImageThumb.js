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
const imgsContainerStyles = {
  position: "absolute",
  display: "flex",
  flexDirection: 'column',
  top: "0%",
  left: "100%",
  alignItems: 'center',
  justifyContent: 'start',
  padding: '20px',
};
const Img = styled.img`

cursor: pointer;
opacity: 0.6;
background-image: url(${(props) => props.images});
margin: 10px;
width: 100%;
height: 100%;


  ${({ active }) =>
    active &&
    `
    opacity: 1;
border: 1px solid green;

  `}
`;

const ImageThumb = ({ slides }) => {

  const [currentIndex, setCurrentIndex] = useState(0);

  const slideStylesWidthBackground = {
    ...slideStyles,
    backgroundImage: `url(${slides[currentIndex].url})`,
  };

  return (
    <div style={sliderStyles} >
      <div style={slideStylesWidthBackground}>

      </div>
      <div style={imgsContainerStyles}>

        {slides.map((s, slideIndex) => (

          <Img
            style={{
              display: 'flex',
              height: '80px',
              width: '80px',

              backgroundSize: 'cover',
            }}
            images={s.url}
            key={slideIndex}
            active={currentIndex === slideIndex}
            onClick={() => setCurrentIndex(slideIndex)
            }
          >
          </Img>

        ))}
      </div>
    </div >


  );
};

export default ImageThumb;