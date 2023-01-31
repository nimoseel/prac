function 함수(x) {
    return x * 2;
}
//
// 함수에서만 사용할 수 있는 void 타입
function 함수1(x) {
    x + 1;
    // 무언가 리턴하는 것을 막음 
}
//
function 파라미터옵션(x) {
    // 파라미터가 옵션일 경우 => ? 이용
    // x : (number | undefined) 와 같음
}
파라미터옵션();
//
function 카운트(x) {
    return x.toString().length;
}
//
function 결혼확률(월소득, 집보유여부, 매력점수) {
    var 점수 = 0;
    점수 += 월소득;
    if (집보유여부 === true) {
        점수 += 500;
    }
    if (매력점수 === "상") {
        점수 += 100;
    }
    return 점수 >= 600 && "결혼가능";
}
