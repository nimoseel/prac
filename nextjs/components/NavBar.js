import Link from "next/link";
import { useRouter } from "next/router";

export default function NavBar(){
    const router = useRouter();
    return (
        <nav> 
        {/* 페이지가 빌드될 때 next.js가 클래스 이름을 무작위로 바꿔줌*/}
            <Link href="/">
                <p className={router.pathname === '/' ? 'active' : ''}>
                home
                </p>
            </Link>
            <Link href="/about">
                <p className={router.pathname === '/about' ? 'active' : ''}>
                about
                </p>
            </Link>
            <style jsx>{`
            /* 태그 이름 사용할 수 있으며 클래스 네임을 고려하지 않아도 됨 */
                .active{
                    color:red;
                }

            `}</style>
        </nav>
    )
}