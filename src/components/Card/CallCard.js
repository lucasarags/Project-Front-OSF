import React from 'react';
import CardButton from './CardButton'
import { useEffect, useState } from 'react';

export default function CallCard() {


  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/static/items.json')
      .then((response) => response.json())
      .then(setData);
  }, []);

  if (!data || !data.length) return null;



  return (
    <>
      {data.map((item, index) => {
        const isOdd = index % 2 === 1
        return (
          <CardButton
            id={item.id}
            image={item.image}
            price={item.price}
            name={item.name}
            isOdd={isOdd}
          />

        )
      })}
    </>
  )

}