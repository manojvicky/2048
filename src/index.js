import React from "react";
import ReactDOM from "react-dom";
import {formatterRight, formatterLeft, formatterUp, formatterDown, newElement} from './util.js';

import App from "./App";
import {createStore, applyMiddleware} from "redux";
import {Provider} from 'react-redux';
const customLogger = store => next => action =>{
    console.group(action.type);
    console.log("%c Prev State", "color: orange", store.getState());
    console.log("%c Action", "color: blue", action);
    next(action);
    console.log("%c Next State", "color: green", store.getState());
    console.groupEnd(action.type);
}

function swipe(data, swipe){
switch(swipe){
    case 'left':
        return formatterLeft(data);
    case 'right':
        return formatterRight(data);
    case 'up':
        return formatterUp(data);
    case 'down':
        return formatterDown(data);
    default:
        return data;
}
}

const initialState = {data:[[0,0,0,0],[0,0,0,0],[0,0,2,0],[0,0,0,2]], swipe:'', cor:{x:0,y:0}}
function reducer(state=initialState, action){
    switch (action.type){
        case 'COR':
        return {
            ...state,
            cor: {x: action.cor.x, y: action.cor.y},
        }
    
        case 'DATA':
        return {
            ...state,
            data: newElement(state.data, swipe(state.data, state.swipe)),
        }
        case 'SWIPE':
        return {
            ...state,
            swipe: action.swipe,
        }
        default: 
        return state;
    }
}
const store = createStore(reducer, applyMiddleware(customLogger));
const rootElement = document.getElementById("root");
ReactDOM.render(<Provider store={store}><App /></Provider>, rootElement);
