import React from "react";
import MovieList from "../MovieList/MovieList";
import { IndexLIstItem, IndexList, TitleMovie } from "./homeList,styled";

export default function HomeList() {
  return (
    <>
      <IndexList>
        <IndexLIstItem>
          <TitleMovie>Trending movies:</TitleMovie>
        </IndexLIstItem>
        <IndexLIstItem>
          <MovieList />
        </IndexLIstItem>
      </IndexList>
    </>
  );
}
