// 커스텀 app이외의 파일들로부터는 임포트할 수 없지만 
// 현재 앱 컴포넌트가 있는 이곳이라면 글로벌 스타일 임포트 가능  import "../styles/global.css" (o)
// 페이지나 컴포넌트에 css 임포트 하고 싶다면 모듈.css 사용
// nextJS는 about, index가 랜더링 되기 전에 먼저 app을 봄 

import Layout from "@/components/Layout";
import "../styles/globals.css";

export default function App({Component, pageProps}){
    return(
        <Layout>
            <Component {...pageProps}/>
        </Layout>
    )
}