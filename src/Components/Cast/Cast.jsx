import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import GetMovieCredits from "../api/GetMovieCredits";
import myKitty from "../../img/catty-min.jpg";
import { ActorsList, ImageActor } from "./cast.styled";

export default function Cast() {
  const [actorsInfo, setActorsInfo] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    const fetchMovieCredits = async () => {
      const data = await GetMovieCredits(movieId);
      const { cast } = data;

      const actorsData = cast.map(({ name, profile_path }) => ({
        profilePath: profile_path,
        name: name,
      }));

      setActorsInfo(actorsData);
    };

    fetchMovieCredits();
  }, [movieId]);

  if (!actorsInfo) {
    return null;
  }

  // commit

  return (
    <>
      <ActorsList>
        {actorsInfo.map(({ name, profilePath }) => (
          <li key={name}>
            <ImageActor
              src={
                profilePath
                  ? `https://image.tmdb.org/t/p/w200/${profilePath}`
                  : myKitty
              }
              alt="name"
            />
            <p>{name}</p>
          </li>
        ))}
      </ActorsList>
    </>
  );
}
