import { useRouter } from 'next/router';

export default function Detail(){
    const router = useRouter();
    console.log(router);
    return (
        <div>
            <h2>{router.query.title || "Loading..."}</h2>
            {/* router.query.title은 유저가 홈페이지에서 상세페이지로 넘어올 때만 존재 */}
        </div>
    );
}
// url에 변수 넣는 방법 => 파일명을 [변수명].js 로 설정