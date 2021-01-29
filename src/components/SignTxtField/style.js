import styled from "styled-components";

export const Container = styled.label`
  margin-top: 25px;
  display: block;
`;

export const Input = styled.div`
  border: 1px solid
    ${(props) => (props.error ? "#e54b4b" : "#e9ebf0")};
  border-radius: 4px;
  padding: ${(props) => props.padding || "0 12px"};
  height: 40px;
  display: flex;
  align-content: center;
`;

export const TxtField = styled.input`
  width: 80%;
  font-size: 15px;
  line-height: 22px;
  &::placeholder {
    color: #e0e1e2;
  }
  /* &[type="password"] {
    letter-spacing: 0.2em;
  } */
`;

export const Icon = styled.div`
  min-width: 18px;
  height: 18px;
  margin-right: 12px;
  fill: ${(props) => (props.error ? "#e54b4b" : "#b9bec7")};
  align-self: center;
  & svg,
  & svg use {
    max-width: 100%;
    max-height: 100%;
  }
`;

export const warningIcon = styled.div``;
