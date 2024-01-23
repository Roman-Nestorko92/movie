import styled from "@emotion/styled";

export const ListField = styled.ul`
  list-style: none;
  padding: 0 10px;

  @media screen and (min-width: 768px) {
    padding: 20px 10px;
  }
`;

export const RegistrationTitle = styled.h2`
  text-align: center;
  margin: 0;
`;

export const FirstItem = styled.li`
  margin: 0 0 10px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const TwoItem = styled.li`
  margin: 0 0 10px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const ThreeItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const CustomInput = styled.input`
  border-radius: 2px;
  border-color: grey;
  width: 200px;
  height: 20px;
  background-color: transparent;
  @media screen and (min-width: 768px) {
    width: 400px;
  }
`;

export const Label = styled.label`
  font-family: "Times New Roman", Times, serif;
  font-weight: 500;
`;

export const ButtonRegistration = styled.button`
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
