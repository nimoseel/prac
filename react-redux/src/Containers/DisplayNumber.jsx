import DisplayNumber from "../Components/DisplayNumber";
import { connect } from "react-redux";

function mapReduxStateToReactProps(state){
// 리덕스의 store의 state를 리액트의 props로 맵핑
    return {
        // 객체의 이름은 전달하고 싶은 props의 이름 = number
        number: state.number
    }
}

export default connect(mapReduxStateToReactProps)(DisplayNumber); 
// connect 리턴값은 함수, 리턴된 함수를 실행하여 만들어진 값을 export

// import React, { Component } from "react";
// import store from "../store";
// //container component
// export default class extends Component{
//     state = { number : store.getState().number }
//     constructor(props){
//         super(props);
//         store.subscribe(function(){
//             this.setState({number:store.getState().number});
//         }.bind(this)) 
//         // store의 값이 바뀌면 콜백함수가 호출되면서 state값 세팅해줌
//     }
//     render(){
//         return(
//             <DisplayNumber number={this.state.number}></DisplayNumber>
//         )
//     }
// }