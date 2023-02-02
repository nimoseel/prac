// type이 하나로 확정되지 않은 경우 type narrowing 필요
function 에러(x: number | string){
    // return x + 1 ; //
    // x가 union type 이기 때문에 에러 발생 
}
// type narrowing
function narrowing(x: number | string){
    if(typeof x === 'string'){
        return x + '1';
    }else{
        return x + 1;
    }
}
// type assertion
function assertion(x: number | string){
    let array : number[] = [];
    array[0] = x as number; // 타입 확정을 위해 타입 덮어쓰기
}
//연습1
function 연습1(x : (number|string)[]){
    let 완료된배열 : number[] = [];
    x.forEach((a)=>{
        if(typeof a === 'string'){
            완료된배열.push(parseInt(a))
        }else{
            완료된배열.push(a)
        }
    })
    return 완료된배열
}
//연습2
function 연습2(x : {subject : string|string[]}){
    if(typeof x.subject == 'string'){
        return x.subject;
    }else if(Array.isArray(x.subject)){
        return x.subject.pop();
    }else{
        return 'error'
    }
}
console.log(연습2( { subject : 'math' } ))
console.log(연습2( { subject : ['science', 'art', 'korean'] } ))
// console.log(연습2( { hello : 'hihi' } ))

type Fish = {swim : string}
type Bird = {fly : string}

function 체크(animal:Fish|Bird){
    if('swim' in animal){
        // 서로 가진 속성명 다르면 in 키워드로 object narrowing
        animal.swim
    }
}
// 오브젝트 instanceof 부모class 

// 
type RealCar = {
    wheel : '4개', 
    color : string
}
type Bike = {
    wheel : '2개',
    color : string
}
// object 속성명이 모두 같기 때문에 
//속성명 in 오브젝트자료 X
//오브젝트 instanceof 부모클래스 X
//이럴 땐 object 타입마다 리터럴 타입 만들어두어 narrowing
function 판별(x:RealCar|Bike):void{
    if(x.wheel === '4개'){
        console.log('x는 CAR!')
    }else{
        console.log('x는 BIKE!')
    }
}