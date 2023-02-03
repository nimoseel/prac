// 함수에 타입파라미터 넣을 수 있음 - 원하는 곳에 가변적으로 타입 지정 가능 ; Generic
// extends 키워드로 넣을 수 있는 타입 제한 가능 
// class에도 타입파라미터 넣을 수 있음 

function 함수<T extends number>(x: T) {
    return x - 1
}

let a = 함수<number>(100)

// 커스텀 타입도 extends 가능
interface lengthCheck{
    length : number
}

function 커스텀타입사용<T extends lengthCheck>(x:T){
    return x.length;
}

let ss = 커스텀타입사용<string>('hello');
// let sss = 커스텀타입사용<number>(1234); //에러 
//

// 연습
function 연습함수<T extends string | string[]>(x:T){
    return x.length
}
console.log(연습함수<string>('hello'))
console.log(연습함수<string[]>( ['kim', 'park'] ) )
//
//연습2
interface AnimalInfoType {
    name : string;
    age : number 
}

let data = '{"name" : "dog", "age" : 1 }'

function 동물정보함수<T>(x:string):T{
    return JSON.parse(x)
}

console.log(동물정보함수<AnimalInfoType>(data))
