import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
//import { addUser } from '../../redux/api';
import { addUser } from '../../redux/UserSlice';
import "./form.css";
 
export default function Form(props) {
  const [name,setName] = useState("");
  const [email, setEmail] = useState("");
  const {loading,error} = useSelector(state =>state.user);
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addUser({name,email}));
  }
 
  return (
    <form onSubmit = {handleSubmit}> 
        <div className='form-group'>
            <input type="text"
             placeholder='Enter name'
             onChange={(e) => setName(e.target.value)}
             />
        </div> 
        <div className='form-group'>
            <input type="email"
             placeholder='Enter email'
             onChange={(e) => setEmail (e.target.value)}
            />
        </div>
        {loading ? 'Loading..' : <div className='form-group'>
            <input type="submit" placeholder='ADD user'/>
        </div>}

        {error && loading === false && "Error !"}
    </form>
  )
}
