import React from "react";
import { Link } from "react-router-dom";
import {
  CustomButtomSearch,
  CustomFormSearch,
  CustomInput,
  CustomLabel,
  CustomLinkMovieItem,
  CustomLinkMovieList,
  FirstSearchItem,
  SearchList,
  SecondSearchItem,
  TitleMovieListSearch,
} from "./movies.styled";

export default function Movies({
  searchMovieList,
  handleChange,
  handleSubmit,
  searchMovie,
}) {
  return (
    <>
      <CustomFormSearch onSubmit={handleSubmit}>
        <SearchList>
          <FirstSearchItem>
            <CustomLabel>Search movie:</CustomLabel>
          </FirstSearchItem>
          <SecondSearchItem>
            {" "}
            <CustomInput
              onChange={handleChange}
              value={searchMovie}
              type="text"
              name="name"
              placeholder="Enter movie name"
              required
            />
          </SecondSearchItem>
          <li>
            <CustomButtomSearch>Search</CustomButtomSearch>
          </li>
        </SearchList>
      </CustomFormSearch>
      {searchMovieList.length === 0 ? (
        <TitleMovieListSearch>Enter movie</TitleMovieListSearch>
      ) : (
        searchMovieList.map(({ id, title }) => (
          <CustomLinkMovieList
            key={id}
            to={`/movies/${id}`}
          >
            <CustomLinkMovieItem>
              {title ? title : "No title"}
            </CustomLinkMovieItem>
          </CustomLinkMovieList>
        ))
      )}
    </>
  );
}
