var 제목 = document.querySelector('#title');
// 방법1
if (제목 != null) {
    제목.innerHTML = 'narrowing';
}
// 방법2 instanceof
if (제목 instanceof Element) {
    제목.innerHTML = 'instanceof 사용했어요';
}
// 방법3 selector로 찾은 요소 
var 제목1 = document.querySelector('#title1');
제목1.innerHTML = 'as로 사기치기';
// a 태그
var 링크 = document.querySelector('.link');
if (링크 instanceof HTMLAnchorElement) {
    링크.href = 'https://kakao.com';
}
//
var 버튼 = document.querySelector('#button');
버튼 === null || 버튼 === void 0 ? void 0 : 버튼.addEventListener('click', function () {
    console.log('dd');
});
var 이미지 = document.querySelector('#image');
if (이미지 instanceof HTMLImageElement) {
    이미지.src = 'new.jpg';
}
var 링크1 = document.querySelectorAll('.naver');
링크1.forEach(function (a) {
    if (a instanceof HTMLAnchorElement) {
        a.href = 'https://kakao.com';
    }
});
