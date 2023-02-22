
import Link from "next/link";
import Seo from "@/components/Seo"
import { useEffect, useState } from "react";

const API_KEY = "0a84938811cea577b440a1ec2c2adbd2";

export default function Home(){
    const [ movies, setMovies ] = useState();
    useEffect(()=>{
        (async()=>{
            const { results } = await (await fetch(
                `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`
            )).json();
                setMovies(results);
        })();
    },[]);

    return (
        <div className="container">
            <Seo title='Home'/>
            {!movies && <h4>Loading...</h4>}
            {movies?.map((movie) => (
                <div key={movie.id} className="movie">
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