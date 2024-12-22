import { configureStore } from '@reduxjs/toolkit';
// import {createStore, applyMiddleware} from 'redux';
// import counterReducer from './reducers/counterReducer';
// import reduxThunk from 'redux-thunk';
// import reducers from './reducers';
// import counterSlice from './counterSlice';
import UserSlice from './UserSlice';


const store = configureStore({
    reducer: {
        // counter : counterSlice,
        user : UserSlice
    }
}); 
 
export default store