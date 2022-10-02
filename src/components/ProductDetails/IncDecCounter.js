import { useState } from 'react';

function ButtonIncrement(props) {

  return (
    <button style={buttonInc} onClick={props.onClickFunc}>
      +
    </button>
  )
}

function ButtonDecrement(props) {

  return (
    <button style={buttonDec} onClick={props.onClickFunc}>
      -
    </button>
  )
}

function Display(props) {
  return (
    <label style={buttonDisplay} >{props.message}</label>
  )
}
const buttonDisplay = {
  display: 'inline-block',
  textAlign: 'center',
  textDecoration: 'none',
  backgroundColor: '#FFFFFF',
  padding: '10px 5px',
  cursor: 'pointer',
  border: '2px solid #F1EDEA',
  borderRight: 'none',
  borderLeft: 'none',
}
const buttonDec = {
  display: 'inline-block',
  textAlign: 'center',
  textDecoration: 'none',
  backgroundColor: '#FFFFFF',
  border: '2px solid #F1EDEA',
  padding: '10px 20px',
  cursor: 'pointer',
  borderRight: 'none',
  borderTopLeftRadius: '25px',
  borderBottomLeftRadius: '25px',

}
const buttonInc = {
  display: 'inline-block',
  textAlign: 'center',
  textDecoration: 'none',
  backgroundColor: '#FFFFFF',
  border: '2px solid #F1EDEA',
  padding: '10px 20px',
  cursor: 'pointer',
  borderLeft: 'none',
  borderTopRightRadius: '25px',
  borderBottomRightRadius: '25px',
}
export default function IncDecCounter() {

  const [counter, setCounter] = useState(0);

  const incrementCounter = () => setCounter(counter + 1);
  let decrementCounter = () => setCounter(counter - 1);

  if (counter <= 1) {
    decrementCounter = () => setCounter(0);
  }

  return (
    <div>
      <ButtonDecrement onClickFunc={decrementCounter} />
      <Display message={counter} />
      <ButtonIncrement onClickFunc={incrementCounter} />
    </div>
  );
}
