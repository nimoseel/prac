// class 타입 확인하고 싶을 때 interface 문법 사용 + implements

interface 에어컨타입{
    model : string,
    price : number
}

class 에어컨 implements 에어컨타입{ // 이 에어컨 클래스가 에어컨타입이라는 interface에 있는 속성을 다 가지고 있는지 
    model : string;
    price : number = 1000;
    constructor(a :string){
        this.model = a
    }
}

let 비스포크에어컨 = new 에어컨('newmodel')

// ** implements는 class의 타입을 체크하는 것으로 타입을 할당하는 것이 아님 ! **

interface 냉장고타입{
    model : string,
    tax : (price : number) => number;
}

class 냉장고 implements 냉장고타입 { // 이 냉장고 class가 냉장고타입이라는 interface에 있는 속성을 다 가지고 있는지 체크 
    model; //타입지정하지 않음 -> any타입
    tax(x){ //타입지정하지 않음 -> any타입
        return x*0.2;
    }
}