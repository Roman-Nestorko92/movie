import styled from "@emotion/styled";

export const LoginTitle = styled.h2`
  text-align: center;
`;

export const ListFieldLogin = styled.ul`
  list-style: none;
  padding: 0 10px;

  @media screen and (min-width: 768px) {
    padding: 20px 10px;
  }
`;

export const TwoItemlogin = styled.li`
  margin: 0 0 10px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Labellogin = styled.label`
  font-family: "Times New Roman", Times, serif;
  font-weight: 500;
`;

export const ThreeItemlogin = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const CustomInputlogin = styled.input`
  border-radius: 2px;
  border-color: grey;
  width: 200px;
  height: 24px;
  background-color: transparent;
  @media screen and (min-width: 768px) {
    width: 400px;
  }
`;

export const ButtonLogin = styled.button`
  display: block;
  margin: 0 auto;

  border-radius: 4px;
  border-color: green;
  background-color: transparent;

  font-family: sans-serif;
  font-weight: 500;
  color: green;

  cursor: pointer;
`;

export const ErrorField = styled.p`
  position: absolute;
  color: red;
  margin: 0;
  bottom: 8px;
`;
