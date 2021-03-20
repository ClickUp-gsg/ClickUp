import * as A from "../../assets";
import * as T from "../Typography";

import styled from "styled-components";

export const Container = styled.aside`
  height: 100vh;
  position: relative;
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
  width: ${(props) => (props.isCollapsed ? "50px" : "300px")};
  transition: 0.5s width;
  border-right: 1px solid #e9ebf0;
`;

export const LogoSection = styled.section`
  display: flex;
  justify-content: space-between;
  padding: 10px 20px 10px 10px;
  align-items: center;
`;

export const LogoImg = styled.img`
  height: ${(props) => props.height};
  margin: ${(props) => props.margin};
`;

const LogoContainer = styled.div`
  visibility: ${(props) =>
    props.isCollapsed ? "hidden" : "visible"};
  opacity: ${(props) => (props.isCollapsed ? "0" : "1")};
  width: 0;
  transition: 0.2s;
`;

export const Logo = ({ isCollapsed }) => {
  return (
    <LogoContainer isCollapsed={isCollapsed}>
      <T.Link>
        <T.Flex>
          <LogoImg
            src="https://app-cdn.clickup.com/assets/images/brand/clickup-symbol_color.svg"
            alt="logo"
            height="22px"
            margin="5px"
          />
          <LogoImg
            src="https://app-cdn.clickup.com/assets/images/brand/clickup-text.svg"
            alt="logo"
            height="19px"
          />
        </T.Flex>
      </T.Link>
    </LogoContainer>
  );
};

export const SearchBoxContainer = styled.label`
  padding: 0 0px 0 8px;
  display: flex;
  align-items: center;
  height: 32px;
  border-radius: 4px;
  background: #f6f7f9;
  margin: 10px 10px 10px 8px;
  & input {
    color: ${(props) => props.theme.primary};
  }
`;

export const SearchBox = ({
  isListCollapsed,
  setIsListCollapsed,
  searchValue,
  setSearchValue,
}) => {
  return (
    <form
      onSubmit={(e) => {
        setIsListCollapsed(false);
        e.preventDefault();
      }}
    >
      <SearchBoxContainer htmlFor="searchBox">
        <button style={{ all: "unset" }}>
          <T.SvgContainer
            color="rgba(41,45,52,.4)"
            fill="true"
            width="13px"
            margin="0 8px 0 0"
          >
            {A.search}
          </T.SvgContainer>
        </button>
        <T.Visibility
          transition=".4s"
          justOpacity="true"
          isVisible={!isListCollapsed && "true"}
        >
          <T.Input
            placeholder="Search"
            height="100%"
            background="inherit"
            id="searchBox"
            width="100%"
            onFocus={() => setIsListCollapsed(false)}
            value={searchValue}
            onChange={(e) => setSearchValue(e)}
          ></T.Input>
        </T.Visibility>
      </SearchBoxContainer>
    </form>
  );
};

export const Footer = styled.footer`
  position: absolute;
  display: flex;
  width: 100%;
  height: 60px;
  bottom: 0px;
  border-top: 1px solid #eeeeee;
  z-index: 99;
  padding: 10px 10px 15px 15px;
`;

export const LogoutBtn = styled.button`
  outline: 0;
  transition: 0.5s;
  padding: ${(props) => (props.isDisplayed ? "5px 15px" : "0")};
  cursor: pointer;
  visibility: ${(props) =>
    props.isCollapsed ? "hidden" : "visible"};
  opacity: ${(props) => (props.isCollapsed ? "0" : "1")};
  &:hover {
    opacity: 0.7;
  }
`;

export const CurrentUserImg = styled.img`
  border-radius: 50%;
  width: 30px;
`;
