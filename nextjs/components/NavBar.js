import Link from "next/link";
import { useRouter } from "next/router";

export default function NavBar(){
    const router = useRouter();
    return (
        <nav> 
        {/* 페이지가 빌드될 때 next.js가 클래스 이름을 무작위로 바꿔줌*/}
        <img src="/vercel.svg" />
        <div>
            <Link href="/">
                <span className={router.pathname === '/' ? 'active' : ''}>
                home
                </span>
            </Link>
            <Link href="/about">
                <span className={router.pathname === '/about' ? 'active' : ''}>
                about
                </span>
            </Link>
        </div>
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
                .active {
                    color: tomato;
                }
                nav div {
                    display: flex;
                    gap: 10px;
                    font-weight: 500;
                }
        `}</style>
        </nav>
    )
}