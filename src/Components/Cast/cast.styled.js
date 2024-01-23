import styled from "@emotion/styled";

export const ActorsList = styled.ul`
  list-style: none;
  display: grid;
  grid-template-columns: 1fr;

  @media screen and (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
  }

  @media screen and (min-width: 1200px) {
    grid-template-columns: 1fr 1fr 1fr;
  }
`;

export const ImageActor = styled.img`
  width: 200px;
`;
