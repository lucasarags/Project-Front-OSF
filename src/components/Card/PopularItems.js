import { useEffect, useState } from 'react';
import { slice, concat } from 'lodash';
import Card from './Card'

const ImageContainer = {
  display: 'grid',
  gridTemplateColumns: 'repeat(4, auto)',
  gridGap: '30px 30px',
  justifyContent: 'space-around',
  padding: '0px 60px 0px 60px'
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




        <div style={{ padding: '50px 0px 60px 0px' }}>
          {showMore && <button style={props.loadMoreBtn} onClick={loadMore}> LOAD MORE </button>}
        </div>
      </div>
    </>
  );
}




