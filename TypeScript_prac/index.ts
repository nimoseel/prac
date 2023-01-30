// 변수에 타입 지정 가능
let 이름 : string = 'lee';
let 나이 : number = 28;
let 출생지역 : string = 'chuncheon';
let myFav : {song: string, singer: string} = {song: 'omg', singer: 'newJeans'};
let 회원들 : string[] = ['kim', 'park']; // 문자 array만 ! 
//
type Project = {
    member : string[],
    days : number,
    started : boolean,
}

let 프로젝트 :Project = {
    member : ['kim', 'park'],
    days : 30,
    started : true,
}

// Union Type
let 회원 : (number|string) = 123;
회원 = 'ㅇㅅㅁ'
//
let 회원배열: (number|string)[] = [1, '2', 3];
let 오브젝트 : {a : string|number} = {a:'123'}
//
let user : string = 'kim';
let age : (undefined | number) = undefined;
let married : boolean = false;
let 철수 :(string|number|undefined|boolean)[] = [user, age, married]
//
let 학교 : 
    {
        score : (number|boolean)[],
        teacher : string,
        friend : string | string[],
    }    
    = 
    {
        score : [100, 97, 84],
        teacher : 'Phil',
        friend : 'John'
    }

학교.score[4] = false;
학교.friend = ['Lee' , 학교.teacher]