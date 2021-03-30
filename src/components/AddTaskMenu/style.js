import styled from "styled-components";

export const Container = styled.form`
  position: fixed;
  right: 10px;
  bottom: 63px;
  height: 100%;
  width: 100%;
  max-height: 510px;
  max-width: 580px;
  transition: 0.2s width, 0.4s height;
  z-index: 9999;
  width: ${(props) => (props.isOpened ? "" : "0px")};
  height: ${(props) => (props.isOpened ? " " : "0px")};
  @media only screen and (max-width: 600px) {
    display: none;
  }
`;

export const Menu = styled.div`
  padding-bottom: 20px;
  height: 100%;
  width: 100%;
  box-shadow: 0 10px 25px 0 rgba(0, 0, 0, 0.5);
  background-color: white;
  transition: 0.25s;
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

export const ToggleMenuButton = styled.div`
  position: absolute;
  right: 47px;
  bottom: -40px;
`;
