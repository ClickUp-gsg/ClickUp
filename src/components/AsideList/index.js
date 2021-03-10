// import * as A from "../../assets";

import * as S from "./style";
import * as T from "../Typography";

import { useStateValue } from "../StateProvider";

export default function AsideList({ isListCollapsed }) {
  const [{ lists, currentList }, dispatch] = useStateValue();
  function changeActiveList(e, listName) {
    dispatch({ type: "EDIT_CURRENT_LIST", payload: listName });
  }
  return (
    <S.ListContainer>
      {lists.map((list) => (
        <S.ItemContainer
          key={list.name}
          onClick={(e) => changeActiveList(e, list.name)}
          isActive={currentList === list.name}
          value={list.name}
        >
          <S.Icon>{list.icon}</S.Icon>
          <T.Visibility isVisible={!isListCollapsed} transition=".2s">
            {list.name}
          </T.Visibility>
        </S.ItemContainer>
      ))}
    </S.ListContainer>
  );
}
