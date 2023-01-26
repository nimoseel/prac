import React from "react";
import {Provider,useSelector,useDispatch} from 'react-redux';
import store from './store';
import {up} from './counterSlice';

function Counter(){
  const dispatch = useDispatch();
  const count = useSelector(state=>{
    return state.counter.value;
  });
  return <div>
    <button onClick={()=>{
      dispatch(up(4));
    // 리덕스 툴킷에선 reducer 함수들을 참고해서 자동으로 action을 만들어내는 actionCreator를 생성해줌
    // dispatch({type:'counterSlice/up', step:2}) 를
    // dispatch(counterSlice.actions.up(2))으로 사용할 수 있음, 
    // 이때 인자로 전달한 step값은 payload라는 약속된 이름으로 들어감.
    }}>+</button> {count}
  </div>
}

export default function App() {
  return (
    <Provider store={store}>
      <div>
        <Counter></Counter>
      </div>
    </Provider>
  );
}
