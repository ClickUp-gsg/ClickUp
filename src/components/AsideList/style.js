import styled from "styled-components";

export const ListContainer = styled.div`
  margin-top: 21px;
`;

export const ItemContainer = styled.button`
  display: flex;
  align-items: center;
  height: 47px;
  color: #7c828d;
  margin-right: 5px;
  width: 100%;
  background-color: unset;
  padding: 10px 20px 10px 15px;
  cursor: pointer;
  background-color: ${(props) =>
    props.isActive && props.theme.light} !important;
  &:hover {
    background-color: ${(props) => "#e5e1fc"};
  }
`;

export const Icon = styled.i`
  fill: #7c828d;
  display: inline-block;
  margin-right: 10px;
  min-width: 18px;
`;
