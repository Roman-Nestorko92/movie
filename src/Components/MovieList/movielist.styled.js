import styled from "@emotion/styled";
import { Link } from "react-router-dom";

export const MovieListMovie = styled.ol`
  padding-left: 20px;
  width: fit-content;
`;

export const MovieListItem = styled.li`
  font-size: large;
  font-weight: 600;
  color: #212121;
  &:focus,
  :hover {
    color: red;
  }
`;

export const CustomLink = styled(Link)`
  text-decoration: none;
  color: #212121;
`;
