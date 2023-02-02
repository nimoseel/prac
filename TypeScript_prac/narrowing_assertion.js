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
function 체크(animal) {
    if ('swim' in animal) {
        // 서로 가진 속성명 다르면 in 키워드로 object narrowing
        animal.swim;
    }
}
// object 속성명이 모두 같기 때문에 
//속성명 in 오브젝트자료 X
//오브젝트 instanceof 부모클래스 X
//이럴 땐 object 타입마다 리터럴 타입 만들어두어 narrowing
function 판별(x) {
    if (x.wheel === '4개') {
        console.log('x는 CAR!');
    }
    else {
        console.log('x는 BIKE!');
    }
}
