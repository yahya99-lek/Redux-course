import React from 'react';
import { useSelector } from 'react-redux';
import "./Header.css";

export default function Header() {
    const {name} = useSelector(state => state.user.userData)
  return ( 
    <div className='header'>
        <h1>Learn React</h1>
        <p>hello {name}</p>
    </div>
  )
}
