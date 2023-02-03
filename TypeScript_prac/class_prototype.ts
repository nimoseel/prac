class Person {
    name : string;
    age : number;
    constructor (a :string, b :number){ //리턴타입 지정 x 항상 object 자료 리턴되기 때문에 의미 없음 
        this.name = a;
        this.age = b;
    }
    add(숫자:number):number{
        return 숫자 + 1;
    }
}

class Car{
    name : string;
    price : number;
    constructor(a:string, b:number){
        this.name = a;
        this.price = b;
    }
    tax():number{
        return this.price /10
    }
}

class Word{
    num : number[];
    str : string[];
    constructor(...param){
        let 숫자배열 :number[] = [];
        let 문자배열 :string[] = [];

        param.forEach((i)=>{
            if (typeof i ==='number') {
                숫자배열.push(i)
            } else {
                문자배열.push(i)
            }
        })
        this.num = 숫자배열;
        this.str = 문자배열;
    }
}

let obj = new Word('kim', 3, 5, 77, 'wwwwww', 'park');
console.log(obj.num);
console.log(obj.str);

// interface 키워드로 type 변수 생성가능 // object사용시
interface Square {
    color:string, 
    width:number
} // 등호 불필요
//type키워드와 차이점
// extends 가능 

let 네모 : Square = {color:'red', width:100}
//
interface Student {
    name: string
}

interface Teacher extends Student{
    age: number
}

let 학생 :Student = {name:'kim'}
let 선생 :Teacher= {name:'kim', age:20}


type Animal = {name:string}
type Cat = {age:number} & Animal 
type Dog = {name:number} & Animal // &쓸때 중복속성 발생하면 미리 에러 안나니 주의 // 중복속성에 타입이 같다면 하나로 합쳐줌
// interface는 중복선언 가능 , 중복선언 할 경우 자동적으로 합쳐짐, extends 된것과 같음, extends 쓸 때 중복 속성은 에러로 잡아줌
// type은 중복선언 불가능

interface Product{
    brand:string,
    serialNumber:number,
    model:string[]
}

let 상품:Product = { brand : 'Samsung', serialNumber : 1360, model : ['TV', 'phone'] }
//

interface Cart {
    product:string,
    price:number
}
let 장바구니 : Cart[]= [ { product : '청소기', price : 7000 }, { product : '삼다수', price : 800 } ] 


interface Cart2 extends Cart{
    card:boolean
}
//
interface MathObj {
    plus : (a:number, b:number) => number,
    minus : (a:number, b:number) => number
}

let Prac :MathObj = {
    plus(a,b){
        return a+b
    },
    minus(a,b){
        return a-b
    }
}

// private 부여된 속성을 클래스 밖에서 수정하고 싶을 때
class User {
    name: string;
    private familyName : string = 'kim';
    constructor(a:string){
        this.name = a + this.familyName;
    }
    성변경함수(){
        this.familyName = 'lee';
    }
}

let 유저 = new User('소영')
유저.성변경함수()

// public 사용하여 this.어쩌구 생략가능
class Person2{
    constructor(public name :string){ // 이 자리에 들어온 파라미터는 자식의 name 속성에 기입해주세요 ///?  
    }
}
let 자식 = new Person2('kim') 

class 전문가{
    static skill = 'js';
    intro = 전문가.skill + '전문가입니다';
}
let 영희 = new 전문가();


class 숙제2{
    private static x = 10;
    public static y = 20;
    static addOne(a:number):number{
        return 숙제2.x + a
    }
    static printX():void{
        console.log(숙제2.x)
    }
}