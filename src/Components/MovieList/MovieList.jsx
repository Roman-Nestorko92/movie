import React from "react";
import GetTrending from "../api/GetTrending";

import { CustomLink, MovieListItem, MovieListMovie } from "./movielist.styled";

export default function MovieList() {
  const trendMovies = GetTrending();

  return (
    <>
      <MovieListMovie>
        {trendMovies.map((movie) => (
          <CustomLink
            key={movie.id}
            to={`/movies/${movie.id}`}
          >
            <MovieListItem>
              {movie.title ? movie.title : "no title"}
            </MovieListItem>
          </CustomLink>
        ))}
      </MovieListMovie>
    </>
  );
}
