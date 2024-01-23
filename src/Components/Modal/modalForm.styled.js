import styled from "@emotion/styled";

export const BackDrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;

  width: 100vw;
  height: 100vh;

  background-color: rgba(43, 43, 43, 0.5);
`;

export const Wrapper = styled.div`
  position: relative;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  background-color: whitesmoke;
  color: #2b2b2b;
  border-radius: 4px;
  padding: 10px;

  @media screen and (min-width: 320px) {
    width: 310px;
    height: 200px;
  }

  @media screen and (min-width: 768px) {
    width: 566px;
    height: auto;
  }
`;

export const WrapperContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const ButtonCloseModal = styled.button`
  position: absolute;
  top: 1px;
  right: 5px;
  border: none;
  background-color: transparent;
  font-weight: 700;
  font-size: 15px;
  cursor: pointer;
`;
