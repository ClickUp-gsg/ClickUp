import * as A from "../../assets";
import * as S from "./style";
import * as T from "../Typography";

import { useEffect, useState } from "react";

import List from "../AsideList";
import { auth } from "../../firebase";
import { clearDB } from "../useIndexedDB";
import { useHistory } from "react-router-dom";
import { useStateValue } from "../StateProvider";

export default function HomeAside() {
  const [{ user }, dispatch] = useStateValue();
  const history = useHistory();
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  function logout() {
    if (user?.uid) {
      clearDB("user");
      dispatch({ type: "CLEAR_USER" });
      auth.signOut();
    }
    history.push("/signin");
  }
  useEffect(() => {
    if (!isCollapsed) {
      setSearchValue("");
    }
  }, [isCollapsed]);
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
        setSearchValue={setSearchValue}
        searchValue={searchValue}
      />
      <List isListCollapsed={isCollapsed}></List>
      <S.Footer>
        <T.Flex
          width="100%"
          justify={user?.name ? "space-between" : "flex-end"}
        >
          <T.Flex>
            {user?.photo || <S.CurrentUserImg src={user?.photoURL} />}
            <T.P margin="0 0 0 4px">{user.name}</T.P>
          </T.Flex>
          <S.LogoutBtn
            onClick={logout}
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
              <T.P color="black">
                {user?.uid ? "Logout" : "login"}
              </T.P>
            </T.Flex>
          </S.LogoutBtn>
          {/* </T.Link> */}
        </T.Flex>
      </S.Footer>
    </S.Container>
  );
}
