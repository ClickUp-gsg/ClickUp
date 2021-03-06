import { Link as LinkReactRouter } from "react-router-dom";
import { closeSvg } from "../../assets";
import styled from "styled-components";

const fontSize = ".875em";

export const P = styled.p`
  cursor: ${(props) => props.cursor};
  display: ${(props) => props.display};
  font-size: ${(props) => props.size || fontSize};
  font-weight: ${(props) => props.weight};
  line-height: ${(props) => props.height};
  color: ${(props) => props.color};
  margin: ${(props) => props.margin};
  padding: ${(props) => props.padding};
  transition: 0.5s;
  opacity: ${(props) => props.opacity};
  text-align: ${(props) => props.align};
  @media only screen and (max-width: ${(props) =>
      props.theme.mobileWidth}) {
    display: ${(props) => props.hideOnMobile && "none"};
  }
`;

export const H1 = styled.h1`
  font-size: ${(props) => props.size};
  font-weight: ${(props) => props.weight};
  line-height: ${(props) => props.height};
  color: ${(props) => props.color};
  margin: ${(props) => props.margin};
  text-align: ${(props) => props.align};
`;

export const Span = styled.span`
  display: ${(props) => props.display};
  font-size: ${(props) => props.size || fontSize};
  font-weight: ${(props) => props.weight};
  line-height: ${(props) => props.height};
  color: ${(props) => props.color};
  margin: ${(props) => props.margin};
  background: ${(props) => props.background};
  height: ${(props) => props.height};
  width: ${(props) => props.width};
  align-self: ${(props) => props.align};
`;

export const Link = styled(LinkReactRouter).attrs((props) => ({
  to: props.to || "#",
}))`
  display: ${(props) => props.display};
  white-space: ${(props) => props.wrap};
  font-size: ${(props) => props.size || fontSize};
  font-weight: ${(props) => props.weight};
  line-height: ${(props) => props.height};
  color: ${(props) => props.color};
  margin: ${(props) => props.margin};
  padding: ${(props) => props.padding};
  text-align: ${(props) => props.align};
  text-decoration: ${(props) =>
    props.decoration ? "underline" : "none"};
  text-decoration-color: ${(props) => props.decoration};
  &:hover {
    color: ${(props) => props.hover_color};
    text-decoration: ${(props) =>
      props.hover_decoration && "underline"};
    text-decoration-color: ${(props) => props.hover_decoration};
  }
`;

const LogoImage = styled.img`
  width: 124px;
  height: 30px;
`;

export const Logo = () => {
  return (
    <Link>
      <LogoImage src="https://app-cdn.clickup.com/assets/images/brand/clickup_color-new.svg"></LogoImage>
    </Link>
  );
};

export const Button = styled.button`
  border-radius: ${(props) => props.radius || "4px"};
  font-weight: 800;
  white-space: nowrap;
  cursor: pointer;
  margin: ${(props) => props.margin};
  padding: ${(props) => props.padding};
  box-shadow: ${(props) =>
    props.shadow && "0 5px 15px rgba(0,0,0,.15)"};
  height: ${(props) => props.height || "50px"};
  width: ${(props) => props.width};
  transition: background-color 0.2s
      cubic-bezier(0.785, 0.135, 0.15, 0.86) 0s,
    transform 0.2s cubic-bezier(0.785, 0.135, 0.15, 0.86) 0s;
  color: ${(props) =>
    props.type === "light" ? props.theme.primary : "white"};
  background-color: ${(props) =>
    props.type === "light" ? "white" : props.theme.primary};
  :hover {
    transform: scale(${(props) => props.scale});
    background-color: ${(props) =>
      props.type === "light" ? "" : props.theme.primaryDark};
    color: ${(props) => (props.type === "light" ? "" : "white")};
  }
  &:disabled {
    opacity: 0.5;
  }
`;

export const Flex = styled.div`
  cursor: ${(props) => props.cursor};
  position: ${(props) => props.position};
  flex-direction: ${(props) => props.direction};
  display: ${(props) => props.display || "flex"};
  align-items: ${(props) => props.align || "center"};
  justify-content: ${(props) => props.justify || "space-between"};
  height: ${(props) => props.height};
  width: ${(props) => props.width};
  margin: ${(props) => props.margin};
`;

export const Content = styled.div`
  height: ${(props) => props.height};
  width: ${(props) => props.width};
  margin: ${(props) => props.margin};
  padding: ${(props) => props.padding};
  @media only screen and (max-width: 450px) {
    padding: 0 15px;
  }
`;
const ToolTipSpan = styled.span`
  display: none;
  opacity: 0;
  width: max-content;
  padding: 7px 10px;
  background-color: rgb(60, 60, 60);
  color: white;
  text-align: center;
  font-size: ${(props) => props.size || "12px"};
  font-weight: 600;
  border-radius: 6px;
  position: absolute;
  bottom: ${(props) => props.bottom || "35px"};
  z-index: 1;
  transition: opacity 0.4s;
  &::after {
    content: "";
    position: absolute;
    left: calc(50% - 5px);
    top: 27px;
    width: 0;
    height: 0;
    border-left: 5px solid transparent;
    border-right: 5px solid transparent;
    border-top: 5px solid rgb(50, 50, 50);
    clear: both;
  }
`;

const ToolTipContainer = styled.div`
  position: relative;
  display: flex;
  cursor: pointer;
  flex-direction: column;
  align-items: center;
  height: max-content;
  &:hover ${ToolTipSpan} {
    display: inline;
    opacity: 1;
  }
`;

export const ToolTip = ({ text, children, ...props }) => {
  return (
    <ToolTipContainer>
      <ToolTipSpan {...props}>{text}</ToolTipSpan>
      {children}
    </ToolTipContainer>
  );
};

export const SvgContainer = styled.div`
  cursor: pointer;
  transform: ${(props) => props.rotate && `rotate(${props.rotate})`};
  width: ${(props) => props.width || "10px"};
  margin: ${(props) => props.margin};
  transition: ${(props) => props.transition};
  & * {
    stroke: ${(props) =>
      props.fill ? "" : props.color || "#b9bec7"};
    stroke: ${(props) => props.active && props.theme.primary};
    fill: ${(props) => props.fill && (props.color || "#b9bec7")};
  }
  &:hover * {
    stroke: ${(props) =>
      props.fill ? "" : props.hover_color || props.theme.primary};
    fill: ${(props) =>
      props.fill && (props.hover_color || props.theme.primary)};
  }
`;

const CloseButton = styled.button`
  all: unset;
`;

export const CloseBtn = ({ handleClick, ...props }) => {
  return (
    <CloseButton type="button" onClick={handleClick}>
      <SvgContainer {...props}>{closeSvg}</SvgContainer>
    </CloseButton>
  );
};

export const Input = styled.input`
  cursor: ${(props) => props.cursor};
  height: ${(props) => props.height};
  width: ${(props) => props.width};
  font-weight: ${(props) => props.weight || "700"};
  margin: ${(props) => props.margin};
  font-size: ${(props) => props.size};
  border: ${(props) => props.border};
  border-radius: ${(props) => props.radius};
  padding: ${(props) => props.padding};
  color: ${(props) => props.color};
  background-color: ${(props) => props.background};
  &:disabled {
    background-color: white;
  }
  &:hover {
    background-color: ${(props) => props.hover_background};
  }
`;

export const Visibility = styled.div`
  visibility: ${(props) =>
    !props.justOpacity && (props.isVisible ? "visible" : "hidden")};
  /* visibility: ${(props) =>
    props.isVisible ? "visible" : "hidden"}; */
  opacity: ${(props) => (props.isVisible ? "1" : "0")};
  transition: ${(props) => props.transition || ".5s"};
`;
