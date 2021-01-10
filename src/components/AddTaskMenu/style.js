import styled from "styled-components";

export const Container = styled.div`
  position: fixed;
  opacity: ${(props) => props.isOpened || 0};
  right: 10px;
  bottom: 63px;
  box-shadow: 0 10px 25px 0 rgba(0, 0, 0, 0.5);
  height: 100%;
  width: 100%;
  max-height: 510px;
  max-width: 580px;
  background-color: white;
  will-change: transition, opacity;
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
