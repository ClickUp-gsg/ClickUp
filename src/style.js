import styled from "styled-components";

export const App = styled.div`
  input::-ms-reveal,
  input::-ms-clear {
    display: none;
  }
  input:-webkit-autofill,
  input:-webkit-autofill:hover,
  input:-webkit-autofill:focus {
    -webkit-text-fill-color: unset;
    box-shadow: 0 0 0px 1000px rgb(245, 245, 245) inset;
    transition: background-color 5000s ease-in-out 0s;
  }
`;
