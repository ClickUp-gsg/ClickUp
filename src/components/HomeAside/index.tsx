import * as A from "../../assets";
import * as S from "./style";
import * as T from "../Typography";

import { ChangeEvent, useEffect, useRef, useState } from "react";

import List from "../AsideList";
import { auth } from "../../firebase";
import { clearDB } from "../useIndexedDB";
import { useHistory } from "react-router-dom";
import { useStateValue } from "../StateProvider";

interface listItems {
  current?: HTMLButtonElement[];
  [key: string]: any;
}

interface list {
  current?: HTMLElement;
  scrollTop?: number;
}

export default function HomeAside() {
  const [{ user, lists }, dispatch] = useStateValue();
  const history = useHistory();
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const list = useRef<list>();
  const listItemsRefsArr = useRef<listItems>({});

  useEffect(() => {
    if (!isCollapsed) {
      setSearchValue("");
    }
  }, [isCollapsed]);

  function changeSearchValue(e: ChangeEvent<HTMLInputElement>) {
    const { value } = e.target;
    setSearchValue(value);
    let isFirstSearchResultFounded = false;
    lists.forEach((listItem: { name: string }) => {
      const resultElement = listItemsRefsArr.current[listItem.name];
      if (
        value &&
        value.match(/^ *$/) === null &&
        listItem.name.includes(value.trim()) &&
        !isFirstSearchResultFounded
      ) {
        isFirstSearchResultFounded = true;
        console.log(resultElement.firstChild);
        resultElement.lastChild.style.backgroundColor = "#abff0070";
        list!.current!.scrollTop = resultElement.offsetTop;
      } else {
        resultElement.lastChild.style.backgroundColor = "unset";
      }
    });
  }

  function logout() {
    if (user?.uid) {
      clearDB("user");
      dispatch({ type: "CLEAR_USER" });
      auth.signOut();
    }
    history.push("/signin");
  }

  return (
    <S.Container isCollapsed={isCollapsed}>
      <S.LogoSection>
        <S.Logo isCollapsed={isCollapsed} />
        <T.SvgContainer
          onClick={() => setIsCollapsed(!isCollapsed)}
          width="12px"
          color="#A79BEF"
          margin="0 0 0 8px"
          rotate={!isCollapsed ? "0" : "-180deg"}
        >
          {A.doubleLeft}
        </T.SvgContainer>
      </S.LogoSection>
      <S.SearchBox
        setIsListCollapsed={setIsCollapsed}
        isListCollapsed={isCollapsed}
        setSearchValue={changeSearchValue}
        searchValue={searchValue}
      />
      <List
        ItemsRefsArr={listItemsRefsArr}
        listRef={list}
        isListCollapsed={isCollapsed}
      ></List>
      <S.Footer>
        <T.Flex
          width="100%"
          justify={user?.name ? "space-between" : "flex-end"}
        >
          <T.Flex display={isCollapsed ? "none" : ""}>
            {user?.photoURL && (
              <S.CurrentUserImg src={user?.photoURL} />
            )}
            <T.P margin="0 0 0 4px">{user.name}</T.P>
          </T.Flex>
          <S.LogoutBtn
            onClick={logout}
            isDisplayed={!isCollapsed}
            type="light"
            height="40px"
            padding="0 15px"
          >
            <T.Flex>
              <T.SvgContainer
                margin="4px 5px 0 0"
                radius="0 0 0 0"
                color="black"
                hover_color="black"
                fill="true"
                width="18px"
              >
                {A.logoutDoor}
              </T.SvgContainer>
              <T.P size={isCollapsed ? "0" : ""} color="black">
                {user?.uid ? "Logout" : "login"}
              </T.P>
            </T.Flex>
          </S.LogoutBtn>
        </T.Flex>
      </S.Footer>
    </S.Container>
  );
}
