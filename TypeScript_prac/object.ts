type Favorite = {
    readonly name : string
    //읽기 전용으로 바뀌어 수정 불가
}

const 최애 :Favorite= {
    name : '도운'
}

// 최애.name = '원필' // 에디터상 경고일 뿐 js 파일에서는 바뀜

// type alias extend (&연산자)
type PositionX = {x:number};
type PositionY = {y:number};

type NewPostion = PositionX & PositionY
// {x: number, y:number}
let 위치 : NewPostion = {x:20, y:50};

// 연습
type UserType = {
    name:string,
    phone:number,
    email:string,
}

type AdultType = {
    adult : boolean
}

type UserInfoType = UserType & AdultType;

let 회원정보 : UserInfoType = {
    name : 'kim',
    phone : 12345,
    email : 'asdf@dddd.com',
    adult : false,
}

// 
type S = {s:number}
type SS = {s:number}
type SSS = S & SS
// let prac : SSS = {s:1,s:2}
//An object literal cannot have multiple properties with the same name.