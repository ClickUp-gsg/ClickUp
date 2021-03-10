import * as A from "../../assets";
import * as S from "./style";
import * as T from "../Typography";

import { useEffect, useState } from "react";

import List from "../AsideList";

export default function HomeAside() {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [searchValue, setSearchValue] = useState("");
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
    </S.Container>
  );
}
