import { createStore } from "redux";

const plus = document.getElementById("plus");
const minus = document.getElementById("minus");
const number = document.querySelector("span");

number.innerText = 0;

const PLUS = "PLUS";
const MINUS = "MINUS";

const countModifier = (count = 0, action) => { // 유일하게 데이터를 바꿀 수 있는 곳
  switch (action.type){
    case PLUS:
      return count + 1;
    case MINUS:
      return count - 1;
    default:
      return count;
  }
};

const countStore = createStore(countModifier);

const onChange = () => {
  number.innerText = countStore.getState();
}

countStore.subscribe(onChange);

plus.addEventListener('click', () => {
  countStore.dispatch({ type : PLUS });
})

minus.addEventListener('click', () => { 
  countStore.dispatch({ type : MINUS }); 
  // "MINUS" 문자열로 작성할 경우 에러를 잡아주지 않지만 변수를 사용하면 오타를 작성했을 경우 에러를 잡아줌
})