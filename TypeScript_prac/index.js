// 변수에 타입 지정 가능
var 이름 = 'lee';
var 나이 = 28;
var 출생지역 = 'chuncheon';
var myFav = { song: 'omg', singer: 'newJeans' };
var 회원들 = ['kim', 'park']; // 문자 array만 ! 
var 프로젝트 = {
    member: ['kim', 'park'],
    days: 30,
    started: true,
};
// Union Type
var 회원 = 123;
회원 = 'ㅇㅅㅁ';
//
var 회원배열 = [1, '2', 3];
var 오브젝트 = { a: '123' };
//
var user = 'kim';
var age = undefined;
var married = false;
var 철수 = [user, age, married];
//
var 학교 = {
    score: [100, 97, 84],
    teacher: 'Phil',
    friend: 'John'
};
학교.score[4] = false;
학교.friend = ['Lee', 학교.teacher];
