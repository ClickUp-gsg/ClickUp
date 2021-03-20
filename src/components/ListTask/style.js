import styled from "styled-components";

export const Container = styled.div`
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.3);
  border-radius: 3px;
  cursor: pointer;
  color: #343434;
  padding: 7px 10px 2px;
  margin-bottom: 12px;
  width: 250px;
  background-color: white;
  transition: 0.3s;
  height: ${(props) => (props.isPinned ? "fit-content" : "60px")};
  &:hover {
    height: fit-content;
  }
  & p {
    white-space: ${(props) => (props.isPinned ? "normal" : "nowrap")};
    text-overflow: ellipsis;
    overflow: hidden;
  }
  &:hover p {
    white-space: normal;
  }
  ${(props) =>
    props.isVisible
      ? ""
      : "height: 0;" +
        "padding: 0;" +
        "margin: 0;" +
        "font-size: 0" +
        "visibility: hidden;"};
  & * {
    ${(props) => (!props.isVisible ? "display: none " : "")};
  }
`;

export const Header = styled.header`
  margin-bottom: 7px;
  font-size: 10px;
  color: #544d61;
`;

export const SubtaskContainer = styled.div`
  width: 20px;
  padding: 0px 3px;
  border-radius: 4px;
  border: 1px solid #e9ebf0;
`;

export const Body = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-weight: 700;
`;

export const Footer = styled.footer`
  margin-top: 10px;
`;

export const DisplayOnHover = styled.div`
  display: ${(props) => (props.isPinned ? "block" : "none")};
  ${Container}:hover & {
    display: block;
  }
  & div {
    transition: 0.3s;
  }
`;

export const Circle = styled.div`
  width: 16px;
  height: 16px;
  border-radius: 50%;
  border: 1px solid #dbdbdb;
  border-radius: 50%;
`;
