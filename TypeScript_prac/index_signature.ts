interface ObjType {
    [key:string] : string|number,
}

let object:ObjType ={
    model : 'k7',
    price : 5000,
    year : 2023,
    percent : '5%',
}

interface 중첩타입{
    'font-size' : number,
    [key:string]:중첩타입|number,
}

let objj:중첩타입 = {
    'font-size' : 10,
    '속성2' : {
        'font-size' : 12,
        '속성3' : {
        'font-size' : 14
        }
    }
}