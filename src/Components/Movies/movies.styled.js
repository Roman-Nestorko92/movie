import styled from "@emotion/styled";
import { Link } from "react-router-dom";

export const CustomLabel = styled.label`
  font-size: large;
  font-weight: 500;
  font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
`;

export const CustomInput = styled.input`
  width: 220px;
  height: 20px;
  margin: 0 20px;
  border: 1px solid grey;

  @media screen and (min-width: 768px) {
    width: 420px;
  }
`;

export const CustomButtomSearch = styled.button`
  border-radius: 6px;
  border: none;
  padding: 8px 32px;
  background-color: greenyellow;
  color: grey;

  font-family: "Times New Roman", Times, serif;
  font-weight: 500;
  font-size: 16px;

  cursor: pointer;
`;

export const CustomFormSearch = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 50px;
`;

export const TitleMovieListSearch = styled.h3`
  display: none;
  margin: 50px auto 0 auto;
  width: fit-content;

  font-family: Arial, Helvetica, sans-serif;
  font-weight: 500;

  @media screen and (min-width: 768px) {
    display: block;
  }
`;

export const SearchList = styled.ul`
  list-style: none;
  padding-left: 0;
  text-align: center;
`;

export const FirstSearchItem = styled.li`
  margin-bottom: 10px;
`;

export const SecondSearchItem = styled.li`
  margin-bottom: 30px;
`;

export const CustomLinkMovieList = styled(Link)`
  text-decoration: none;
  color: #212121;
`;

export const CustomLinkMovieItem = styled.li`
  list-style: circle;
  margin-left: 2px;
  @media screen and (min-width: 768px) {
    margin-left: 20px;
  }
`;
