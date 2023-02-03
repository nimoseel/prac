function 함수연습(x) {
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
var prac = function (a) {
    return 10;
};
var removeZero = function (x) {
    if (x[0] === "0") {
        return x.slice(1, x.length - 1);
    }
    else {
        return x;
    }
};
var removeDash = function (x) {
    return parseInt(x.replace(/-/g, ""));
};
var 복잡한함수 = function (x, y, z) {
    console.log(z(y(x)));
};
복잡한함수('010-1111-2222', removeZero, removeDash);
//연습
function 최댓값() {
    var a = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        a[_i] = arguments[_i];
    }
    return a.sort(function (a, b) { return b - a; })[0];
}
console.log(최댓값(6, 3, 7, 2));
//
function 오브젝트파라미터(_a) {
    var user = _a.user, comment = _a.comment, admin = _a.admin;
    console.log(user, comment, admin);
}
오브젝트파라미터({ user: 'kim', comment: [3, 5, 4], admin: false });
function 배열파라미터(_a) {
    var a = _a[0], b = _a[1], c = _a[2];
    console.log(a, b, c);
}
배열파라미터([40, 'wine', false]);
