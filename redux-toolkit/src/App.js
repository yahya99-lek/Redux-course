import React, { useState } from 'react';
import Form from './components/Form/Form';
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';
import "./App.css"
//import Counter from './components/Counter'

export default function App() {
  // const [name,setName] = useState("");
  // const [email, setEmail] = useState("");
  // const [ischanged, setIsChanged] = useState("");
  // const addUser = (e) => {
  //    e.preventDefault();
  //    setIsChanged(true); 
  // }

  return (
    <div className="App">
      <Header />
      <div className='main'>
      <Sidebar />
      <Form />
      </div>

      
      {/* <Counter /> */}
    </div>
  ) ;
}
