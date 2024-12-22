import React,{useState} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { incrementAction,decrementAction, incrementValueAction } from '../redux/actions/counterAction';
import {DECREMENT, INCREMENT} from '../redux/actions/types'
export default function Counter() {
    
      
    const {count} = useSelector(state => state.counter);//bring the state from the redux
    const dispatch = useDispatch();//let the action speak or change state from the reducer
    
    
    const handleIncrement = () => { 
      incrementAction(dispatch)
    
        // dispatch({
        //   tyepe: INCREMENT
        // } );
        //setCount(count + 1);
    }
    const handleDecrement = () => {
      decrementAction(dispatch)

      //    dispatch( {
      //     type: DECREMENT
      // });
        //setCount(count -1);
    } 
    const handleIncByValue = (vl) => {
      incrementValueAction(vl,dispatch)
    }
  return (
    <div>
        <p> {count} </p>
        <button onClick = {handleIncrement}>Increment</button>
        <button onClick = {handleDecrement}>Decrement</button>
        <button onClick = {() => handleIncByValue(99)}>Increment by val</button>
    </div>
  )
}

