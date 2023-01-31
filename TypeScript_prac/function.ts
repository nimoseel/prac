function 함수(x: number) : number{
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
function 결혼확률(월소득 : number, 집보유여부:boolean, 매력점수: string) : string|void{
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