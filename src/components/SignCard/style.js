import { Link } from "../Typography";
import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  max-width: 480px;
  background-color: white;
  box-shadow: 0 25px 75px rgba(16, 30, 54, 0.25);
  border-radius: 6px;
  padding: 30px 60px 0px;
  margin: -16px auto 0;
  position: relative;
`;

export const Terms = styled.div`
  position: relative;
  left: -60px;
  border-top: 1px solid #e9ebf0;
  background-color: #fafbfc;
  font-size: 10px;
  color: #7c828d;
  text-align: center;
  min-height: 29px;
  width: calc(100% + 120px);
  vertical-align: center;
  padding: 8px 0;
`;

export const HelpBox = styled(Link)`
  position: absolute;
  bottom: 0;
  right: -60px;
  font-size: 0.8em;
  transition: background 0.2s cubic-bezier(0.785, 0.135, 0.15, 0.86)
    0s;
  background: hsla(0, 0%, 100%, 0.2);
  box-shadow: 0 5px 15px rgba(16, 30, 54, 0.15);
  border-radius: 6px;
  width: 50px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  @media only screen and (max-width: 660px) {
    display: none;
  }
`;
