// type이 하나로 확정되지 않은 경우 type narrowing 필요
function 에러(x) {
    // return x + 1 ; //
    // x가 union type 이기 때문에 에러 발생 
}
// type narrowing
function narrowing(x) {
    if (typeof x === 'string') {
        return x + '1';
    }
    else {
        return x + 1;
    }
}
// type assertion
function assertion(x) {
    var array = [];
    array[0] = x; // 타입 확정을 위해 타입 덮어쓰기
}
//연습1
function 연습1(x) {
    var 완료된배열 = [];
    x.forEach(function (a) {
        if (typeof a === 'string') {
            완료된배열.push(parseInt(a));
        }
        else {
            완료된배열.push(a);
        }
    });
    return 완료된배열;
}
//연습2
function 연습2(x) {
    if (typeof x.subject == 'string') {
        return x.subject;
    }
    else if (Array.isArray(x.subject)) {
        return x.subject.pop();
    }
    else {
        return 'error';
    }
}
console.log(연습2({ subject: 'math' }));
console.log(연습2({ subject: ['science', 'art', 'korean'] }));
// console.log(연습2( { hello : 'hihi' } ))
