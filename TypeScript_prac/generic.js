// 함수에 타입파라미터 넣을 수 있음 - 원하는 곳에 가변적으로 타입 지정 가능 ; Generic
// extends 키워드로 넣을 수 있는 타입 제한 가능 
// class에도 타입파라미터 넣을 수 있음 
function 함수(x) {
    return x - 1;
}
var a = 함수(100);
function 커스텀타입사용(x) {
    return x.length;
}
var ss = 커스텀타입사용('hello');
// let sss = 커스텀타입사용<number>(1234); //에러 
//
// 연습
function 연습함수(x) {
    return x.length;
}
console.log(연습함수('hello'));
console.log(연습함수(['kim', 'park']));
var data = '{"name" : "dog", "age" : 1 }';
function 동물정보함수(x) {
    return JSON.parse(x);
}
console.log(동물정보함수(data));
