import {createSlice} from '@reduxjs/toolkit';

const counterSlice = createSlice({
  name:'counterSlice',
  initialState:{value:0},
  reducers:{
    up:(state, action)=>{
      // 리덕스툴킷은 불변성 유지를 위해 스프레드 문법 사용할 필요 없음. 
      // 자동으로 생성된 actionCreator 사용하므로 payload값 사용
      // 만일 직접 action을 전달한다면 action.step으로 사용
      state.value = state.value + action.payload;
    }
  }
});

export default counterSlice;
export const {up} = counterSlice.actions; // actionCreator 사용