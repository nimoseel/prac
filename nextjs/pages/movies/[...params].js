import { useRouter } from 'next/router';
import Seo from '../../components/Seo';

export default function Detail({params}){
    const router = useRouter();
    const [title, id] = params || [];
    console.log(router);
    return (
        <div>
            <Seo title={title} />
            <h2>{title}</h2>
        </div>
    );
}
// [변수명].js
// url에 변수 넣는 방법 => 파일명을 [변수명].js 로 설정

// 동적 라우팅(Catch all) [...params]
// 홈페이지에서 클릭해서 들어오지 않고 url로도 상세페이지에 접근할 수 있음
// 이전에는 디테일 컴포넌트 내부에서 라우터를 사용, 하지만 컴포넌트 내부에 들어있는 라우터는 클라이언트 사이드에서만 실행됨. 만약 url에 들어있는 영화제목을 사용해 구글 SEO에 최적화하고, 유저가 접속하기 전에 탭 제목을 바꾸고 싶고, 기본적으로 이 페이지를 pre-render하고 싶다면 , server-side에서 정보를 얻기 위한 getServerSideProps를 실행하면 됨. 


export function getServerSideProps({params : {params}}){
    return {
        props: {
            params,
        },
    };
}