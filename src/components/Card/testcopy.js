import { useEffect, useState } from 'react';
import {
  slice, concat,
} from 'lodash';
import "./styles.css";
import Card from './CardButton'
import { withTheme } from "styled-components";
import { MenuItemsCategories } from "../Navbar/MenuItems";
import CardButton from "./CardButton";

/*const listItems = {
  display: 'grid',
  gridTemplateColumns: 'repeat(6, auto)',
  gridGap: '0px',
  listStyle: 'none',
  textAlign: 'center',
}*/



const Container = {
  backgroundColor: '#FFFFFF',

  height: '280',
  width: '260px',
  borderRadius: '8px',
  flex: 'none'
}


const imageContainer = {
  overflow: 'hidden',
  height: '250px',
  borderTopLeftRadius: '8px',
  borderTopRightRadius: '8px'
}

const cardTitle = {
  display: 'flex',
  justifyContent: 'space-around',
  textAlign: 'center',
  height: '50px',
  padding: '10px 5px 10px 5px'
}

const btn = {
  display: 'flex',
  justifyContent: 'center',
  backgoundColor: '#FFFFFF',
  color: '#262A33',
  padding: '10px 20px',
  cursor: 'pointer',
  marginBottom: '0%'

}
const buttonPrice = {
  ...btn,
  borderTopLeftRadius: '20px',
  borderBottomLeftRadius: '20px',

}
const buttonBuy = {
  ...btn,
  borderTopRightRadius: '20px',
  borderBottomRightRadius: '20px',

}

const loadMoreBtn = {
  ...btn,
  borderRadius: '30px',
  padding: '8px 100px',
  backgroundColor: 'transparent',
  color: '#ffffff',
  fontSize: '18px',
  border: '2px solid white',
  opacity: '0.9'


}
const textTitleContainer = {

  flexDirection: 'row',
  color: 'white',
  textAlign: 'center',
  alignItems: 'center',
  padding: '90px 60px 45px 60px',
  fontWeight: 'bold',
  /*border: '2px solid'*/
}

const containerLoadMoreBtn = {
  width: '1280px',
  margin: '0 auto',
  zIndex: '100',
  display: 'flex',
  justifyContent: 'space-around',
  textAlign: 'center',
  backgroundColor: '#262A33',
  paddingTop: '30px',
  paddingBottom: '45px'
}
const LENGTH = 50
const DATA = [...Array(LENGTH).keys()];

const LIMIT = 8;

export default function Test() {
  useEffect(() => {
    fetch('http://localhost:3000/static/items.json')
      .then((response) => response.json())
      .then(setList);
  }, []);
  const [showMore, setShowMore] = useState(true);
  const [list, setList] = useState(slice(DATA, 0, LIMIT));
  const [index, setIndex] = useState(LIMIT);


  const loadMore = () => {
    const newIndex = index + (LIMIT - 4);
    const newShowMore = newIndex < LENGTH;
    const newList = concat(list, slice(list, index, newIndex));
    setIndex(newIndex);
    setList(newList);
    setShowMore(newShowMore);
  }

  return (
    <>
      <div className="App">
        <div style={textTitleContainer}>
          <div
            style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }} >
            <div style={{ flex: 3.5, height: '2px', backgroundColor: '#999999', opacity: '.3' }} />
            <div style={{ flex: 2, fontSize: '24px', }}>
              Popular Items
            </div>
            <div style={{ flex: 3.5, height: '2px', backgroundColor: '#999999', opacity: '.3' }} />
          </div>
        </div>

        <div className="image-container">
          {list.slice(0, (index == LIMIT) ? 8 : index).map((item, index) => {

            const isOdd = index % 2 === 1
            return (

              <CardButton style={Container}
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


      <div style={containerLoadMoreBtn}>
        {showMore && <button style={loadMoreBtn} onClick={loadMore}> Load More </button>}
      </div>

    </>
  );
}




