import styled from "styled-components";

export const NumberOfWatchers = styled.div`
  position: absolute;
  top: -10px;
  left: 80%;
  margin-left: -15px;
  border-radius: 10px;
  color: #fff;
  background-color: ${(props) => props.theme.primary};
  padding: 3px 6px 1px;
  font-size: 9px;
  font-weight: 500;
  border: 2px solid #fff;
`;

export const DashedCircle = styled.div`
  position: relative;
  &::before {
    content: "";
    display: block;
    position: absolute;
    top: -30%;
    left: -25%;
    margin: 0 auto;
    width: 34px;
    height: 34px;
    border-radius: 50%;
    border: 0.6px dashed #aeacb0;
  }
  &:hover {
    ::before {
      border-color: ${(props) => props.theme.primary};
    }
  }
`;
