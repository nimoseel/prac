# NextJS Introduction

### 1. NextJS는 프레임워크

- 라이브러리<br>
사용자가 파일 이름이나 구조 등을 정하고, 모든 결정을 내림

- 프레임워크<br>
파일 이름이나 구조 등을 정해진 규칙에 따라 만들고 따름, 프레임워크가 나의 코드를 호출

### 2. pages 폴더 속 파일 이름 -> url 이름
- pages 폴더에 저장한 파일이름을 가져다가 url 이름으로 사용함
- 이 때 파일 내의 컴포넌트 이름은 중요하지 않지만 반드시 컴포넌트 함수를 export default 해야함



        next.js의 가장 좋은 기능 중 하나는 앱에 있는 페이지들이 미리 랜더링 된다는 점
        -> 정적(static)으로 생성


### 3. next.js css 설정 방법
1. FileName.module.css

2. styled jsx -> nextJS 고유의 방법
<style jsx>{`
/* js문법, 클래스이름 무작위화*/
/* style jsx global의 경우 이 style을 전역으로 적용시킴 */
`}
</style>

custom app component -> next.js의해 사용되며 페이지 렌더링 할 때마다 사용됨. 
```js
import NavBar from "@/components/NavBar"

export default function App({Component, pageProps}){
<!-- 렌더링 하길 원하는 페이지를 컴포넌트 프롭으로 넣음 
next.js가 내 페이지를 렌더링 하기 위한 템플릿을 설정하길 원한다면 파일을 정의하자. -->
    return(
        <>
            <NavBar/> 
            // 갈 수 있는 모든 페이지에 네브바 추가하기
            <Component {...pageProps}/>
            <span>hello</span>
            <style jsx global>{`
                a{
                    color:white;
                }
            `}</style>
        </>
    )
}
```
