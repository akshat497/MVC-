// src/app/store.js
import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../counter/CounterSlice';
import authReducer from '../auth/LoginSlice';

export default configureStore({
  reducer: {
    counter: counterReducer,
    auth:authReducer
    
  }
});
