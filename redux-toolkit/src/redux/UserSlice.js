// Redux Toolkit allows us to write "mutating" logic in reducers. It
// doesn't actually mutate the state because it uses the Immer library,
// which detects changes to a "draft state" and produces a brand new
// immutable state based off those changes
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const addUser = createAsyncThunk("users/add", async(user) => {
  const res = await axios.post("http://localhost:5000/api/users", user)
  return res.data
})
//console.log(addUser());

export const UserSlice = createSlice({
  name: 'user',
  initialState: {
    userData:{
      name: "",
      email : "",

    },
    loading : null,
    error: false,
  },
  reducers: {
  //  addUser: (state,action) => {
  //   state.name = action.payload.name;
  //   state.email = action.payload.email;

  //  },
  //  startUser: (state) => {
  //     state.loading = true;
  //  },
  //  successUser: (state,action) => {
  //     state.userData = action.payload; //data that comes back we send it as object to put it in the payload 
  //     state.loading =  false;
  //  },
  //  ErrorUser: (state) => {
  //   state.loading = false;
  //   state.error = true;
  //  },
  },
  extraReducers :{
    [addUser.pending]: (state) => {
      state.loading=true;
    },
    [addUser.fulfilled]: (state , action) => {
      state.userData = action.payload; 
      state.loading =  false;
    },
    [addUser.rejected]: (state) =>{
      state.loading = false;
      state.error = true;
    }
  }
  
})

// Action creators are generated for each case reducer function
// export const {startUser,successUser,ErrorUser} = UserSlice.actions;

export default UserSlice.reducer;