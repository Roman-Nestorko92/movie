import styled from "@emotion/styled";
import { NavLink } from "react-router-dom";

export const NavWrapper = styled.nav`
  background-color: whitesmoke;
  box-shadow: 0px 3px 4px 1px rgba(0, 0, 0, 0.69);
  margin-bottom: 22px;
  display: flex;
  justify-content: space-between;
  @media screen and (min-width: 320px) {
    padding: 0 10px;
  }

  @media screen and (min-width: 768px) {
    padding: 0 20px;
  }
`;

export const MenuList = styled.ul`
  list-style: none;
  display: inline-flex;
  gap: 12px;
  padding: 0;
`;

export const MenuItem = styled.li``;

export const CustomLinkHome = styled(NavLink)`
  text-decoration: none;
  font-weight: 600;
  color: black;
  margin: 0;
  &.active {
    color: red;
  }
`;

export const CustomLinkMovie = styled(NavLink)`
  text-decoration: none;
  font-weight: 600;
  color: black;
  margin: 0;
  &.active {
    color: red;
  }
`;

export const RegistrList = styled.ul`
  list-style: none;
  display: flex;
  gap: 20px;
  padding: 0;
`;

export const RegistrListItem = styled.li``;

export const RegistrButton = styled.button`
  font-weight: 600;
  border: none;
  background-color: transparent;
  color: black;
  margin: 0;
  &:hover,
  :focus {
    color: red;
  }
`;

export const LoganButton = styled.button`
  font-weight: 600;
  border: none;
  background-color: transparent;
  color: black;
  margin: 0;
  &:hover,
  :focus {
    color: red;
  }
`;
