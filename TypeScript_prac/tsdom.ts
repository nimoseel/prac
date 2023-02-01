let 제목 = document.querySelector('#title');
// 방법1
if(제목 != null){
    제목.innerHTML ='narrowing'
}
// 방법2 instanceof
if(제목 instanceof Element){
    제목.innerHTML ='instanceof 사용했어요'
}

// 방법3 selector로 찾은 요소 
let 제목1 = document.querySelector('#title1') as Element
제목1.innerHTML = 'as로 사기치기'

// a 태그
let 링크 = document.querySelector('.link');
if(링크 instanceof HTMLAnchorElement){
    링크.href = 'https://kakao.com'
}

//
let 버튼 = document.querySelector('#button')
버튼?.addEventListener('click', function(){
    console.log('dd')
})

let 이미지 = document.querySelector('#image')
if(이미지 instanceof HTMLImageElement){
    이미지.src = 'new.jpg'
}

let 링크1 = document.querySelectorAll('.naver')
링크1.forEach((a)=> {
    if( a instanceof HTMLAnchorElement){
        a.href='https://kakao.com'
    }
});
