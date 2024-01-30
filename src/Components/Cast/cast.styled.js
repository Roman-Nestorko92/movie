import styled from "@emotion/styled";

export const ActorsList = styled.ul`
  list-style: none;
  display: grid;
  grid-template-columns: 1fr;
  padding: 0;

  @media screen and (min-width: 768px) {
    grid-template-columns: 1fr 1fr 1fr;
  }

  @media screen and (min-width: 1200px) {
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }
`;

export const ActorItem = styled.li`
  margin: 0 auto;
  width: min-content;
`;

export const ImageActor = styled.img`
  width: 200px;
`;
