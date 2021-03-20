import styled from "styled-components";

export const ListContainer = styled.div`
  position: relative;
  margin-bottom: 60px;
  padding-bottom: 8px;
  margin-top: 10px;
  scroll-behavior: smooth;
  overflow-y: ${(props) => (props.isCollapsed ? "hidden" : "auto")};
  overflow-x: hidden;
  border-top: ${(props) =>
    props.isCollapsed
      ? "1px solid #e9ebf0"
      : "1px solid transparent"};
  /* Scrollbar style */
  &::-webkit-scrollbar-thumb {
    border-color: #eee;
  }
  &::-webkit-scrollbar-thumb {
    background-color: #babac0;
    border-radius: 12px;
    border: 2px solid #fafbfc;
  }
  &::-webkit-scrollbar-track {
    background: #eee;
  }
  &::-webkit-scrollbar {
    width: 10px;
    border: 1px solid black;
  }
`;

export const ItemContainer = styled.button`
  display: flex;
  align-items: center;
  height: 49.5px;
  color: #7c828d;
  width: 100%;
  background-color: white;
  padding: 10px 13px 10px 15px;
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

export const AddListInputContainer = styled.div`
  padding: 12px 15px 12px 15px;
  opacity: ${(props) => !props.isDisplayed && "0"};
  z-index: ${(props) => (!props.isDisplayed ? "-1" : "9")};
  width: 98%;
  margin: 0 2px;
  border-radius: 28px;
  height: 57px;
  transition: 0.2s;
  background-color: ${(props) => props.theme.primary};
  filter: drop-shadow(0px 2px 4px #292c51);
`;
