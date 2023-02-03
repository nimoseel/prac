let 튜플 : [string, boolean?] = ['dog', undefined];


let 맛도리 : [string, number, boolean] = [ '동서녹차', 4000, true ];
let 길다 : [string, number, ...boolean[]] = ['동서녹차', 4000, true, false, true, true, false, true];

function 튜플연습(...a : [string, boolean, ...(number|string)[]]):void{
    console.log(...a)
}

튜플연습('a', true, 6, 3, '1', 4)

function 분류함수(...a:(number|string)[]):[string[],number[]]{
    let string_arr = [];
    let number_arr = [];

    a.forEach((a)=>{
        if(typeof a === 'string'){
            string_arr.push(a)
        }else{
            number_arr.push(a)
        }
    })
    
    return [string_arr, number_arr]
}

console.log(분류함수('b', 5, 6, 8, 'a'))