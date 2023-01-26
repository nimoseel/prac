import {configureStore} from '@reduxjs/toolkit';
import counterSlice from './counterSlice';

const store = configureStore({ 
  reducer:{ // 각각 슬라이스의 reducer
    counter: counterSlice.reducer // counterSlice 안에 있는 reducer들 
  }
});

export default store;