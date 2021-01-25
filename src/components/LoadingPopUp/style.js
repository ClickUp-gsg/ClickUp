import styled from "styled-components";

export const Container = styled.div`
  opacity: ${(props) => (props.isDisplayed ? "1" : "0")};
  visibility: ${(props) =>
    props.isDisplayed ? "visible" : "hidden"};
  transition: 0.5s opacity;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  left: 0px;
  width: calc(100%);
  height: calc(100vh);
  border-radius: 30px;
  background-color: rgba(255, 255, 255, 0.15);
  backdrop-filter: blur(10px);
  z-index: 9;
`;
