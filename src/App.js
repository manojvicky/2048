import React from "react";
import "./styles.css";
import { connect } from 'react-redux';
import {color} from './color';
const App = (props) => {
  function handleMouseUp(event) {
    handleSwipe(event.clientX, event.clientY);
  }
  function handleMouseDown(event) {
    props.dispatch({
      type: 'COR',
      cor: {
        x: event.clientX,
        y: event.clientY
      }
    });
  }
  function handleSwipe(Xaxis, Yaxis) {
    const { x, y } = props.cor;
    let modX = x - Xaxis;
    let modY = y - Yaxis;
    let swipe = ''
    if (Math.abs(modX) > Math.abs(modY)) {
      swipe = modX < 0 ? 'right' : 'left'
    } else {
      swipe = modY < 0 ? 'down' : 'up'
    }
    props.dispatch({
      type: 'SWIPE',
      swipe
    });
    props.dispatch({
      type: 'DATA'
    });
  }
  function handleTouchStart(event){
    console.log('handleTouchStart', event.targetTouches[0], event.clientX, event.clientY);
    handleMouseDown(event.targetTouches[0]);

  }
  function handleTouchEnd(event){
    // console.log('handleTouchEnd', event, event.target, event.type, event.currentTarget, event.changedTouches[0], event.targetTouches);
    handleMouseUp(event.changedTouches[0])
  }
  console.log('state', props);
  return (
    <>
    <div className="App" onMouseUp={handleMouseUp} onMouseDown={handleMouseDown} onTouchStart={handleTouchStart} onTouchEnd={handleTouchEnd}>
      {props.data.map((row, index) => {
        return <div className='row' key={index}>
          {
            row.map((cube, i)=>{
              return <div key={`${index}${i}`} style={{background: color(cube)}} className='cube'>{cube !== 0 ? cube : ''}</div>
            })
          }
        </div>
      })}
    </div>
    <span className='direction'>{props.swipe}</span>
  </>
  );
}

export default connect((state) => {
  return {
    swipe: state.swipe,
    data: state.data,
    cor: state.cor
  }
})(App);