import React, { useState } from 'react';
import Counter from './components/Counter'

export default function App() {
  const [index,setindex]= useState(1);
  setindex(2);
  return (
    <div className="App">
      ssss
      {index}
    </div>
  )
}
