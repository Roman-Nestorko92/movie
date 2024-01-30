import React from "react";
import { Link } from "react-router-dom";
import {
  ButtonGoBack,
  CustomLinkReviewCast,
  InfoFilmList,
  Overview,
  ReviewCastList,
  TitleNameMovie,
} from "./movieDetails.styled";

export default function MovieDetails({ movieInfo, handleGoBack }) {
  const { title, posterPath, overview, voteAverage, releaseDate } = movieInfo;

  return (
    <div>
      <ButtonGoBack
        onClick={handleGoBack}
        type="button"
      >
        / back{" "}
      </ButtonGoBack>
      <TitleNameMovie>Title: {title}</TitleNameMovie>
      <InfoFilmList>
        <li>
          <img
            src={
              posterPath ? (
                `https://image.tmdb.org/t/p/w200/${posterPath}`
              ) : (
                <p>no poster</p>
              )
            }
            alt="poster"
          />
        </li>
        <li>
          <Overview>Overview: {overview}</Overview>
        </li>
        <li>
          <p>Release date: {releaseDate}</p>
        </li>
        <li>
          <p>Rating: {voteAverage}</p>
        </li>
      </InfoFilmList>

      <ReviewCastList>
        <li>
          <CustomLinkReviewCast to="cast">Cast</CustomLinkReviewCast>
        </li>
        <li>
          <CustomLinkReviewCast to="reviews">Reviews</CustomLinkReviewCast>
        </li>
      </ReviewCastList>
    </div>
  );
}
