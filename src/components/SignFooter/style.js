import styled from "styled-components";

export const Container = styled.footer`
  & div {
    flex-flow: wrap;
    @media only screen and (max-width: 450px) {
      width: 290px;
      justify-content: space-evenly;
    }
  }
  & hr {
    border: 0;
    @media only screen and (max-width: 450px) {
      width: 100%;
    }
  }
`;
export const FooterImg = styled.img`
  max-width: 80px;
  display: inline-block;
`;
