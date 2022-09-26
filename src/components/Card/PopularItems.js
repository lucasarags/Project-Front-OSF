import { useEffect, useState } from 'react';
import { slice, concat } from 'lodash';
import Card from './Card'

const Appp = {
  backgroundColor: '#262A33',
  justifyContent: 'space-around',
  flexDirection: 'column',
  width: '1280px',
  height: '880px',
  margin: '0 auto',
}

const ImageContainer = {
  display: 'grid',
  gridTemplateColumns: 'repeat(4, auto)',
  gridGap: '30px 30px',
  justifyContent: 'space-around',
  padding: '0px 60px 20px 60px'
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


const loadMoreBtn = {
  ...btn,
  borderRadius: '30px',
  padding: '8px 100px',
  color: '#ffffff',
  fontSize: '18px',
  opacity: '0.9',
  margin: '0 auto',
  textAlign: 'center',
  marginTop: '30px',
  marginBottom: '60px',

  backgroundColor: '#262A33',
  border: '2px solid white',
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


const LENGTH = 50
const DATA = [...Array(LENGTH).keys()];

const LIMIT = 8;

export default function Test(props) {
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
      <div style={{ ...props.style }}>


        <div style={ImageContainer}>
          {list.slice(0, (index == LIMIT) ? 8 : index).map((item, index) => {

            const isOdd = index % 2 === 1
            return (

              <Card
                id={item.id}
                image={item.image}
                price={item.price}
                name={item.name}
                isOdd={isOdd}
              />
            );
          })}
        </div>




        <div >
          {showMore && <button style={props.loadMoreBtn} onClick={loadMore}> Load More </button>}
        </div>
      </div>
    </>
  );
}




