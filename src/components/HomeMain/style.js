import styled from "styled-components";

export const Container = styled.div`
  height: calc(100vh - 115px);
  background-color: #eeeeee;
  padding: 15px 0 0 15px;
  overflow: auto;
  & ::-webkit-scrollbar-thumb {
    border-color: #eee;
  }
  & ::-webkit-scrollbar-thumb {
    background-color: #babac0;
    border-radius: 12px;
    border: 2px solid #fafbfc;
  }
  & ::-webkit-scrollbar-track {
    background: #eee;
  }
`;

export const ListsContainer = styled.div`
  display: flex;
`;

export const List = styled.div`
  width: 250px;
  margin-right: 20px;
`;
