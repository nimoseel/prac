
import Link from "next/link";
import { useRouter } from "next/router";
import Seo from "../components/Seo";

export default function Home({results}){
    const router = useRouter();
    const onClick = (id, title) => {
        router.push(`movies/${title}/${id}`);
    }
    return (
        <div className="container">
            <Seo title='Home'/>
            {results?.map((movie) => (
                <div onClick={()=>onClick(movie.id, movie.original_title)}key={movie.id} className="movie">
                    <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} />
                    <h4>
                        <Link href={`/movies/${movie.original_title}/${movie.id}`}>
                            {movie.original_title}
                        </Link>
                    </h4>
                </div>
            ))}
            <style jsx>{`
                .container {
                    display: grid;
                    grid-template-columns: 1fr 1fr;
                    padding: 20px;
                    gap: 20px;
                }
                .movie {
                    margin-bottom: 15px;
                    cursor: pointer;
                }
                .movie img {
                    max-width: 100%;
                    border-radius: 12px;
                    transition: transform 0.2s ease-in-out;
                    box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
                }
                .movie:hover img {
                    transform: scale(1.05) translateY(-10px);
                }
                .movie h4 {
                    font-size: 18px;
                    text-align: center;
                    margin-top: 10px;
                }
            `}</style>
        </div>
    )
} 

export async function getServerSideProps(){ 
    // getServerSideProps 함수 작성 전 
    // 사전 생성된 html 페이지에 데이터가 포함되어 있지 않았음, (Next.js는 페이지를 미리 html로 export해줌)
    // React.js 의 처리가 완료될 때까지 기다려야하고, 유저는 api에서 데이터를 받아올 때까지 로딩중 화면을 봐야했음

    // getServerSideProps는 페이지가 유저에게 보여지기 전에 props를 받아오는 함수, 
    // 즉 데이터가 모두 준비되었을 때 유저들에게 페이지가 보여지게 됨. 
    // 이 곳에 작성한 코드는 server에서 돌아가게 되기 때문에 
    // rewrite를 통해 api_key를 숨기지 않고 이곳에 작성해도 client에겐 보여지지 않음 
    const { results } = await (await fetch(`http://localhost:3000/api/movies`)).json();
    return {
        props:{ // props안에 우리의 result가 들어감
            results,
        }
    }
}
// Next.js는 getServerSideProps를 실행시켜서 _app.js의 pageProps에 넣어줌

// 다이나믹 url , url에 변수 넣기 // nextjs에는 라우터가 없음 