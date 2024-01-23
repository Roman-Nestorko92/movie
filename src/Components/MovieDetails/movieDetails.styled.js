import styled from "@emotion/styled";
import { Link } from "react-router-dom";

export const ButtonGoBack = styled.button`
  padding: 8px 28px;

  border: none;
  border-radius: 4px;
  background-color: red;
  margin-left: 10px;

  font-family: "Courier New", Courier, monospace;
  font-weight: 600;
`;

export const TitleNameMovie = styled.h2`
  margin-left: 10px;
  font-family: "Times New Roman", Times, serif;
  text-decoration: underline;
`;

export const InfoFilmList = styled.ul`
  list-style: none;
  padding: 0 10px;
`;

export const Overview = styled.p`
  width: fit-content;
`;

export const ReviewCastList = styled.ul`
  list-style: none;
  padding: 0 0 0 10px;
  gap: 10px;
`;

export const CustomLinkReviewCast = styled(Link)`
  text-decoration: none;
  color: blue;
  cursor: pointer;
  font-weight: 500;
`;
