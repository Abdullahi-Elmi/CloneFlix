// import { getServerSession } from "next-auth/next";
// import { authOptions } from "@/lib/auth";
// import { redirect } from "next/navigation";
// import ClientComponent from "@/components/ClientComponent";
// import HomeClient from "@/components/HomeClient";

// export default async function Home() {
//   const session = await getServerSession(authOptions);

//   if (!session) {
//     redirect("/auth");
//   }

//   return (
//     <>
//       <h1 className="text-2xl text-green-500">Netflix Clone</h1>
//       <HomeClient />
//       <ClientComponent />
//     </>
//   );
// }
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/lib/auth";
import { redirect } from "next/navigation";
import Navbar from "@/components/Navbar";
import Billboard from "@/components/Billboard";
import MovieListClient from "@/components/MovieListClient";
import FavoriteMoviesClient from "@/components/FavoriteMoviesClient";
import InfoModalClient from "@/components/InfoModalClient";

// import MovieList from "@/components/MovieList";
// import useMovieList from "@/hooks/useMovieList";

export default async function Home() {
  const session = await getServerSession(authOptions);

  if (!session) {
    redirect("/auth");
  }

  // const { data:movies = [] } = useMovieList();

  return (
    <>
      <InfoModalClient />
      <Navbar />
      <Billboard />
      <div className="pb-40">
        {/* <MovieList title="Trending Now" data={movies} /> */}
        <MovieListClient />
        <FavoriteMoviesClient />
      </div>
    </>
  );
}