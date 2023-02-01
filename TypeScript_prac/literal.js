//literal types
var blood_type;
blood_type = 'A';
// blood_type = 'X'
function 가위바위보(x) {
    return [x];
}
//literal types 문제점
var 정보 = {
    name: 'lee'
};
//as const 
//객체 value값 그대로 타입 지정해줌 정보.name의 타입이 string에서 'lee'로 변경
//객체 속성들에 모두 readonly 붙여줌 
function 리터럴(x) {
    // lee라는 자료만 들어올 수 있다는 것이 아닌 lee 라는 타입만 들어올 수 있다는 뜻 
    return x;
}
리터럴(정보.name);
// 정보.name 의 타입은 lee가 아닌 string 때문에 에러발생
