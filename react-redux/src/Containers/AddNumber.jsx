import AddNumber from "../Components/AddNumber";
import { connect } from "react-redux";

function mapReduxDispatchToReactProps(dispatch){
    // 리덕스의 dispatch를 리액트 컴포넌트의 props로 연결
    // 첫번째 인자로 store.dispatch api 함수를 공급
    return {
        onClick: function(size){
            dispatch({type:'INCREMENT', size: size})
        }
    }
}

// 이벤트 프롭스만 전달하고 상태전달하는 프롭스 없기 때문에 
export default connect(null, mapReduxDispatchToReactProps)(AddNumber);

//container component
// import React, { Component } from "react";
// import store from "../store";
// export default class extends Component{
//     render(){
//         return (
//             <AddNumber onClick={function(size){
//                 store.dispatch({type:'INCREMENT', size: size})
//             }.bind(this)}></AddNumber>
//         )
//     }
// }