import styled from "styled-components";

export const ListContainer = styled.div`
  margin-top: 20px;
  position: relative;
  border-top: ${(props) =>
    props.isCollapsed
      ? "1px solid #e9ebf0"
      : "1px solid transparent"};
`;

export const ItemContainer = styled.button`
  display: flex;
  align-items: center;
  height: 47px;
  color: #7c828d;
  width: 100%;
  background-color: white;
  padding: 10px 20px 10px 15px;
  cursor: pointer;
  z-index: 1;
  transition: 0.2s;
  position: ${(props) => props.position};
  display: ${(props) => props.isDisplayed === false && "none"};
  opacity: ${(props) => props.isDisplayed === false && "0"};
  background-color: ${(props) =>
    props.isActive && props.theme.light} !important;
  &:hover {
    background-color: #e5e1fc;
  }
`;

export const Icon = styled.i`
  fill: #7c828d;
  display: inline-block;
  margin-right: 10px;
  min-width: 18px;
`;

export const AddListInputContainer = styled.div`
  padding: 12px 20px 12px 15px;
  opacity: ${(props) => !props.isDisplayed && "0"};
  z-index: ${(props) => (!props.isDisplayed ? "-1" : "9")};
  width: 100%;
  height: 57px;
  transition: 0.2s;
  background-color: ${(props) => props.theme.primary};
  filter: drop-shadow(0px 2px 4px #292c51);
`;
