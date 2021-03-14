import { Link } from "react-router-dom";
import styled from "styled-components";

export const AddSvgContainer = styled.div`
  height: 15px;
  width: 15px;
  background-color: #eee;
  margin-right: 5px;
  padding: 3px;
  border-radius: 2px;
  & * {
    fill: #858585;
    display: block;
    width: 100%;
    height: 100%;
  }
`;

export const AddContainer = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  white-space: nowrap;
  &:hover *:not(div) {
    fill: white;
    stroke: red;
    color: ${(props) => props.theme.primary};
  }
  &:hover div {
    background-color: ${(props) => props.theme.primary};
  }
`;

export const DropDownContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border: 1px solid ${(props) => props.theme.primary};
  border-radius: 3px;
  height: 22px;
  padding: 1px 7px 1px 8px;
  margin: 0 0 0 10px;
  cursor: pointer;
  & * {
    fill: ${(props) => props.theme.primary};
    color: ${(props) => props.theme.primary};
  }
  &:hover {
    background-color: ${(props) => props.theme.primary};
  }
  &:hover * {
    color: white;
    fill: white;
  }
`;

export const BrowseLink = styled(Link)`
  border-bottom: 1px dashed;
  font-weight: 700;
  font-size: 13px;
  text-decoration: none;
  color: ${(props) => props.theme.primary};
  &:hover {
    color: ${(props) => props.theme.primaryDark};
  }
`;
export const SelectList = styled.div`
  select {
    all: unset;
    width: 96.5%;
    margin-top: 8px;
    padding-bottom: 7.2px;
    padding-left: 4px;
    background-color: unset;
    text-transform: capitalize;
  }
  select::-ms-expand {
    display: none;
  }
  cursor: pointer;
  height: 36px;
  width: 190px;
  font-weight: 700;
  margin: 0 8px 0 13px;
  font-size: 14px;
  border: 1px solid #e4e4e4;
  border-radius: 18px;
  padding: 0 12px;
  color: "#585858";
  :hover {
    background-color: #f7f7f7;
  }
  option {
    font-weight: 700;
    font-size: 13.5px;
  }
  option:disabled {
    color: #939090;
  }
`;
