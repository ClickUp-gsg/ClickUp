import styled from "styled-components";

export const Container = styled.main`
  min-height: calc(100vh - 115px);
  max-height: 75vh;
  background-color: #eeeeee;
  padding: 0 0 15px 15px;
  @media only screen and (max-width: 600px) {
    padding: 0;
    min-height: calc(100vh - 45px);
  }
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
`;

export const ListsContainer = styled.div`
  position: relative;
  display: flex;
  z-index: 0;
  overflow: auto;
  height: calc(100vh - 120px);
  padding-top: 15px;
  @media only screen and (max-width: 600px) {
    display: block;
    padding-right: 5px;
    height: calc(100vh - 45px);
  }
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
    height: 10px;
    border: 1px solid black;
  }
`;

export const List = styled.div`
  width: 250px;
  margin-right: 20px;
  @media only screen and (max-width: 600px) {
    margin: 0 auto;
  }
`;

export const LoadSpinner = styled.div`
  & svg {
    width: 100px;
  }
`;
