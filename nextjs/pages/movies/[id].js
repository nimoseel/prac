import { useRouter } from 'next/router';

export default function Detail(){
    const router = useRouter();
    console.log(router);
    return 'detail';
}
// url에 변수 넣는 방법 => 파일명을 [변수명].js 로 설정