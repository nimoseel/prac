const API_KEY = process.env.API_KEY;

module.exports = {
  reactStrictMode : true,
  async redirects(){
    return [
      {
        source : "/old-blog/:path*", // request 경로
        destination: "/new-blog/:path*", // redirect할 경로
        permanent: false, // 영구적인지 아닌지에 따라 브라우저나 검색엔진이 이 정보를 기억하는지 여부가 결정 됨. 
      }
    ]
  },
  async rewrites(){ // destination 경로를 mask하여 사용자가 사이트에서 위치를 변경하지 않은 것처럼 보이게 함.
    return [
      {
        source : "/api/movies",
        destination : `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`,
      },
      {
        source : "/api/movies/:id",
        destination : `https://api.themoviedb.org/3/movie/:id?api_key=${API_KEY}`,
      }
    ]
  }
}
