import styled from "styled-components";

export const Container = styled.div`
  position: fixed;
  right: 10px;
  bottom: 63px;
  height: 100%;
  width: 100%;
  max-height: 510px;
  max-width: 580px;
`;

export const Menu = styled.div`
  height: 100%;
  width: 100%;
  box-shadow: 0 10px 25px 0 rgba(0, 0, 0, 0.5);
  background-color: white;
  transition: 0.6s;
  will-change: opacity;
  transform: ${(props) => props.isOpened || "translateX(102%)"};
  opacity: ${(props) => props.isOpened || 0};
`;

export const Header = styled.header`
  display: flex;
  padding: 26px 23px;
`;

export const ChangeStatus = styled.span`
  display: inline-block;
  background-color: rgb(211, 211, 211);
  width: 8px;
  height: 8px;
  border-radius: 3px;
  border: 1px solid transparent;
  transition: 0.1s;
  cursor: pointer;
`;

export const Body = styled.div`
  padding: 0px 40px 0 20px;
`;

export const AddTaskButton = styled.div`
  position: absolute;
  right: 47px;
  bottom: -40px;
`;
