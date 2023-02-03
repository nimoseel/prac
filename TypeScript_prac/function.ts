function 함수연습(x: number) : number{
    return x * 2;
}
//
// 함수에서만 사용할 수 있는 void 타입
function 함수1(x:number):void{
    x + 1
    // 무언가 리턴하는 것을 막음 
}
//
function 파라미터옵션(x?: number) :void{
// 파라미터가 옵션일 경우 => ? 이용
// x : (number | undefined) 와 같음
}
파라미터옵션()
//
function 카운트(x : string | number) : number{
    return x.toString().length
}

//
function 결혼확률(월소득 : number, 집보유여부:boolean, 매력점수: string) : string | boolean{
    let 점수 : number = 0 ;
    점수 += 월소득;
    if(집보유여부 === true){
        점수 += 500;
    }
    if(매력점수 === "상"){
        점수 += 100;
    }
    return 점수 >= 600 && "결혼가능";
}

//함수 타입 alias 사용하려면 함수 표현식 사용해야함
type 함수타입 = (a:string) => number;

let prac : 함수타입 = function(a){
    return 10;
}

// 객체 안의 함수 타입 지정하기
type 고객정보 = {
    name : string,
    age : number,
    newYearAge : (x:number) => number,
    sayHello : () => void
}

type 리무브제로타입 = (x:string) => string

let removeZero : 리무브제로타입 = function(x){
    if(x[0] === "0"){
        return x.slice(1,x.length-1);
    }else{
        return x;
    }
}

type 리무브대쉬타입 = (x: string) => number;
let removeDash : 리무브대쉬타입 = function(x){
    return parseInt(x.replace(/-/g, ""));
}

type 복잡한함수타입 = (x:string, y:리무브제로타입, z:리무브대쉬타입) => void;
let 복잡한함수 : 복잡한함수타입 = function(x,y,z){
    console.log(z(y(x)))
}
복잡한함수('010-1111-2222', removeZero, removeDash)

//연습
function 최댓값(...a :number[]):number{
    return a.sort((a,b) => b-a)[0]
}
console.log(최댓값(6,3,7,2))

//
function 오브젝트파라미터({user,comment,admin} : {user:string, comment:number[], admin:boolean}):void{
    console.log(user, comment, admin)
}
오브젝트파라미터({ user : 'kim', comment : [3,5,4], admin : false })

//
type 배열파라미터타입 = (number|string|boolean)[];
function 배열파라미터([a,b,c]:배열파라미터타입):void{
    console.log(a,b,c)
}
배열파라미터( [40, 'wine', false] )
