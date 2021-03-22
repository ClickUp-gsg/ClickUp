import styled from "styled-components";

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
  background-color: ${(props) => props.isActive && props.theme.light};
  &:hover {
    background-color: #e5e1fc;
  }
`;

export const Icon = styled.i`
  fill: #7c828d;
  display: inline-block;
  margin-right: 10px;
  width: 18px;
  font-style: normal;
  font-size: 16px;
`;

export const DisplayOnHover = styled.div`
  display: none;
  ${ItemContainer}:hover & {
    display: block;
  }
`;
