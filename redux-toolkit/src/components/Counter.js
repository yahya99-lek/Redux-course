import React,{useState} from 'react'
import { useDispatch, useSelector } from 'react-redux';
// import { incrementAction,decrementAction, incrementValueAction } from '../redux/actions/counterAction';
// import {DECREMENT, INCREMENT} from '../redux/actions/types'
import { decrement, increment,incrementByAmount } from '../redux/counterSlice';
export default function Counter() {
    
      
    const {count} = useSelector(state => state.counter);//bring the state from the redux
    const dispatch = useDispatch();//let the action speak or change state from the reducer
    
    
    const handleIncrement = () => { 
      dispatch(increment())
    }
    const handleDecrement = () => {

      dispatch(decrement())

      //    dispatch( {
      //     type: DECREMENT
      // });
        //setCount(count -1);
    } 
    const handleIncByValue = (vl) => {
      dispatch(incrementByAmount(vl))
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

