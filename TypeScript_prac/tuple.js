var 튜플 = ['dog', undefined];
var 맛도리 = ['동서녹차', 4000, true];
var 길다 = ['동서녹차', 4000, true, false, true, true, false, true];
function 튜플연습() {
    var a = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        a[_i] = arguments[_i];
    }
    console.log.apply(console, a);
}
튜플연습('a', true, 6, 3, '1', 4);
function 분류함수() {
    var a = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        a[_i] = arguments[_i];
    }
    var string_arr = [];
    var number_arr = [];
    a.forEach(function (a) {
        if (typeof a === 'string') {
            string_arr.push(a);
        }
        else {
            number_arr.push(a);
        }
    });
    return [string_arr, number_arr];
}
console.log(분류함수('b', 5, 6, 8, 'a'));
