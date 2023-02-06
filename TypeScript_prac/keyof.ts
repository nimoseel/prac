type 상품정보 = {
    color: boolean,
    model : boolean,
    price : boolean | number,
};

type TypeChanger <T> = {
    [key in keyof T]: string;
};

type 새로운타입 = TypeChanger<상품정보>;

let 뉴정보 : 새로운타입 ={
    color: 'red',
    model: '의류',
    price: '5000',
}

type 잘못된타입 = {
    color : string,
    model : boolean,
    price : number
}

type 타입변환기 <T> = {
    [key in keyof T]: string | number;
}

type 변경한타입 = 타입변환기<잘못된타입>;

let 새오브젝트 : 변경한타입 = {
    color : 'red',
    model : 'sss',
    price : 3000,
}
