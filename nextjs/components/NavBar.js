import Link from "next/link";
import { useRouter } from "next/router";

export default function NavBar(){
    const router = useRouter();
    return (
        <nav> 
        {/* 페이지가 빌드될 때 next.js가 클래스 이름을 무작위로 바꿔줌*/}
        <img src="/vercel.svg" />
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
                nav {
                    display: flex;
                    gap: 10px;
                    flex-direction: column;
                    align-items: center;
                    padding-top: 20px;
                    padding-bottom: 10px;
                    box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
                        rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;
                }
                img {
                    max-width: 100px;
                    margin-bottom: 5px;
                }
                nav a {
                    font-weight: 600;
                    font-size: 18px;
                }
                .active {
                    color: tomato;
                }
                nav div {
                    display: flex;
                    gap: 10px;
                }
        `}</style>
        </nav>
    )
}