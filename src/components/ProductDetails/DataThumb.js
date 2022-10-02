import React from 'react';
import p from './imagesProduct/p.png'
import f from './imagesProduct/f.png'
import g from './imagesProduct/g+.png'
import t from './imagesProduct/t.png'
import { IoMdArrowDropdown } from 'react-icons/io'
import ImageThumb from "./ImageThumb";
import styled from 'styled-components';
import IncDecCounter from './IncDecCounter';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const DataThumb = () => {

  const [showMore, setShowMore] = useState(false);

  const text = 'Sed ut Perspicitiatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore Beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas';

  const getText = () => {


    if (text.length <= 100) return text;

    if (text.length > 100 && showMore) {
      return (
        <>
          <div >{text}</div>

          <button
            style={{ border: '0', background: 'transparent', cursor: 'pointer', color: '#85BC23' }}
            onClick={() => setShowMore(false)}>
            Read less
          </button>
        </>
      );
    }

    if (text.length > 100) {
      return (
        <>
          <div style={{ width: '337px' }}>
            {text.slice(0, 100)}
          </div>

          <button
            style={{ border: '0', background: 'transparent', cursor: 'pointer', color: '#85BC23' }}
            onClick={() => setShowMore(true)}>
            Read more
          </button>
        </>
      );
    }
  };

  const containerDiv = {
    display: 'flex',
    width: '1280px',
    margin: '0 auto',
    height: '560px',
    backgroundColor: '#F2ECEA',
    paddingLeft: '60px'
  }

  const containerStyles = {

    width: "2500px",
    height: "560px",
    backgroundSize: 'cover',
    margin: '0px 180px 0px 0px',
  };

  const colorButton = {

    backgroundColor: 'transparent',
    color: '#45413E',
    padding: '6px 10px',
    border: '2px solid #F1EDEA',
    borderRadius: '20px',
    outline: '0',
    cursor: 'pointer',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',

  }
  const btn = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'row',
    padding: '10px 0',

  }

  const loadMoreBtn = {

    borderRadius: '30px',
    padding: '10px 30px',
    color: '#ffffff',
    opacity: '1',
    margin: '0 auto',
    textAlign: 'center',
    backgroundColor: '#85BC23',
    border: '2px solid #F1EDEA',
    cursor: 'pointer',
  }

  const Dot = styled.button`
  height: 22px;
  width: 22px;
  border-radius: 50%;
  background-color: #45413E;
  border: 0;
  `


  const slides = [
    { url: "blackFront.jpg" },
    { url: "blackBack.jpg" },
    { url: "greenFront.jpg" },
    { url: "greenBack.jpg" },
  ];

  return (
    <div style={containerDiv}>

      <div style={{
        display: 'flex', flexDirection: ' row',
        justifyContent: 'center',
        width: '95%',
        backgroundColor: '#ffffff',

      }}>
        <div style={containerStyles}>

          < ImageThumb slides={slides}>
          </ImageThumb>
        </div>
        <div style={{ padding: '45px 60px 0px 0px', backgroundColor: '#ffffff', color: '#44403D' }}>
          <div style={{ fontSize: '50px', }}>$299.99</div>
          <div style={{
            padding: '30px 0 15px 0',
          }}>

            <button style={colorButton}>
              <Dot style={{ marginRight: '10px' }} />Dark Gray <IoMdArrowDropdown style={{ marginLeft: '20px' }} />
            </button>

          </div>
          <div style={btn}><IncDecCounter></IncDecCounter><button style={loadMoreBtn}>ADD TO CART</button></div>


          <div style={{ lineHeight: '25px', paddingTop: '30px', }}>
            <div style={{
              color: '#45413E', padding: '10px 0px 30px'
            }} >
              {getText()}
            </div>
          </div>


          <div style={btn}>
            <div style={{ opacity: '0.3', }} > Share </div>
            <div style={{ AlignItem: 'center', opacity: '0.3', paddingLeft: '30px', }}>

              <Link to="/facebook-link" target="_blank" rel="noreferrer" >
                <img src={f} alt={'facebook'} style={{ margin: '0 8px', width: '07%', height: '07%' }} />
              </Link>

              <Link to="/googleplus-link" target="_blank" rel="noreferrer" >
                <img src={g} alt={'googleplus'} style={{ margin: '0 8px', width: '11%', height: '11%' }} />
              </Link>

              <Link to="/twitter-link" target="_blank" rel="noreferrer" >
                <img src={t} alt={'twitter'} style={{ margin: '0 8px', width: '11%', height: '11%' }} />
              </Link>

              <Link to="/pinterest-link" target="_blank" rel="noreferrer" >
                <img src={p} alt={'pinterest'} style={{ margin: '0 8px', width: '11%', height: '11%' }} />
              </Link>

            </div>
          </div>
        </div>
      </div >
    </div >

  );
};

export default DataThumb;

