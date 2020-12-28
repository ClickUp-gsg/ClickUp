import { Link as LinkReactRouter } from "react-router-dom";
import styled from "styled-components";

const fontSize = ".875em";

export const P = styled.p`
  display: ${(props) => props.display};
  font-size: ${(props) => props.size || fontSize};
  font-weight: ${(props) => props.weight};
  line-height: ${(props) => props.height};
  color: ${(props) => props.color};
  margin: ${(props) => props.margin};
  padding: ${(props) => props.padding};
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
  border-radius: 4px;
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
`;

export const Flex = styled.div`
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
`;
