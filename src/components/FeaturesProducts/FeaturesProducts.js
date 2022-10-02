import React from 'react'
import { useEffect, useState, useRef } from 'react';
import './FeaturesProducts.css';
import { MdOutlineKeyboardArrowRight, MdOutlineKeyboardArrowLeft } from 'react-icons/md';
import CardCarousel from '../FeaturesProducts/CardCarousel';

const containerTitle = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  paddingTop: '30px',
  flexDirection: 'column',
  fontWeight: 'bold',
  color: '#ffffff'
}



export default function FeaturesProducts() {

  const [data, setData] = useState([]);
  const carousel = useRef(null);

  useEffect(() => {
    fetch('static/items.json')
      .then((response) => response.json())
      .then(setData);
  }, []);

  const handleLeftClick = (e) => {
    e.preventDefault();
    carousel.current.scrollLeft -= carousel.current.offsetWidth;
  };

  const handleRightClick = (e) => {
    e.preventDefault();

    carousel.current.scrollLeft += carousel.current.offsetWidth;
  };





  if (!data || !data.length) return null;

  return (
    <div className="container">

      <div style={containerTitle}>
        <div style={{ fontSize: '34px' }}>
          Featured Products
        </div>
        <div style={{ fontSize: '16px', margin: '15px' }}>
          Unde omnis iste natus error sit voluptatem
        </div>
      </div>

      <div
        style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', }} >

        <button style={{ backgroundColor: 'transparent', border: 'none', display: 'flex', flex: 6.5, justifyContent: 'end', margin: '20px', color: 'white' }} >
          <MdOutlineKeyboardArrowLeft onClick={handleLeftClick} size={30} style={{ background: "#2D343A", padding: '5px', cursor: 'pointer' }} />
        </button>
        <div style={{ flex: 5, height: '1.5px', backgroundColor: '#ffffff', opacity: '1' }} />
        <div style={{ fontSize: '30px', margin: '5px', color: '#ffffff' }}>///</div>
        <div style={{ flex: 5, height: '1.5px', backgroundColor: '#ffffff', opacity: '1' }} />
        <button style={{ backgroundColor: 'transparent', border: 'none', display: 'flex', flex: 6.5, justifyContent: 'start', margin: '20px', color: 'white' }}>
          <MdOutlineKeyboardArrowRight onClick={handleRightClick} size={30} style={{
            background: "#2D343A", padding: '5px', cursor: 'pointer'
          }} />
        </button>


      </div>


      <div className="carousel" ref={carousel} >
        {data.map((item, index) => {
          const { id, name, price, image } = item;
          const isOdd = index % 2 === 1
          return (
            <CardCarousel
              id={item.id}
              image={item.image}
              price={item.price}
              name={item.name}
              isOdd={isOdd}

            />
          );
        })}
      </div>

    </div>
  );
}
