import styled from "styled-components";

export const ArrowContainer = styled.div`
  visibility: hidden;
  transition: 0.1s;
`;

export const Container = styled.header`
  position: sticky;
  top: -15px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: white;
  box-shadow: 6px 7px 13px 2px rgb(0 0 0 / 20%);
  width: 100%;
  border-top: 2px solid rgb(211, 211, 211);
  border-top-color: ${(props) => props.topBorderColor};
  border-radius: 3px;
  margin-bottom: 16px;
  padding: 12px 20px 12px 10px;
  color: #292d34;
  z-index: 9;
  &:hover ${ArrowContainer} {
    visibility: visible;
  }
  & * {
    text-transform: uppercase;
    font-weight: bold;
  }
`;

export const NmbOfTasksInList = styled.span`
  border: 1px solid #e9ebf0;
  border-radius: 40%;
  font-size: 11px;
  padding: 5px 10px;
`;
