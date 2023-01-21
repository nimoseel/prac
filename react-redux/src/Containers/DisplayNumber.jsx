import DisplayNumber from "../Components/DisplayNumber";
import React, { Component } from "react";
import store from "../store";

//container component
export default class extends Component{
    state = { number : store.getState().number }
    constructor(props){
        super(props);
        store.subscribe(function(){
            this.setState({number:store.getState().number});
        }.bind(this)) 
        // store의 값이 바뀌면 콜백함수가 호출되면서 state값 세팅해줌
    }
    render(){
        return(
            <DisplayNumber number={this.state.number}></DisplayNumber>
        )
    }
}