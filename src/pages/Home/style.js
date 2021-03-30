import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  width: 100%;
  @media only screen and (max-width: 600px) {
    display: block;
  }
`;

export const Main = styled.div`
  width: 100%;
  @media only screen and (max-width: 855px) {
    margin-left: 50px;
    width: calc(100% - 50px);
  }
`;
