import * as S from "./style";
import * as T from "../Typography";

import { useEffect, useRef, useState } from "react";

import { plusSign } from "../../assets";
import { useStateValue } from "../StateProvider";

export default function AsideList({ isListCollapsed }) {
  const [{ lists, currentList }, dispatch] = useStateValue();
  const [isAddListOpen, setIsAddListOpen] = useState(false);
  const [newListName, setNewListName] = useState("");
  const inputAddList = useRef(null);
  useEffect(() => {
    if (isListCollapsed) {
      setIsAddListOpen(false);
      setNewListName("");
    }
  }, [isListCollapsed]);
  function changeActiveList(listName) {
    dispatch({ type: "EDIT_CURRENT_LIST", payload: listName });
  }
  function addNewList(e) {
    e.preventDefault();
    setIsAddListOpen(false);
    if (newListName) {
      setNewListName("");
    }
  }

  return (
    <S.ListContainer isCollapsed={isListCollapsed}>
      {lists.map((list) => (
        <S.ItemContainer
          key={list.name}
          onClick={(e) => changeActiveList(list.name)}
          isActive={currentList === list.name}
          value={list.name}
        >
          <S.Icon>{list.icon}</S.Icon>
          <T.Visibility isVisible={!isListCollapsed} transition=".2s">
            {list.name}
          </T.Visibility>
        </S.ItemContainer>
      ))}
      {!isListCollapsed && (
        <S.ItemContainer
          position="absolute"
          isDisplayed={!isAddListOpen}
          onClick={() => {
            !isListCollapsed && setIsAddListOpen(true);
            inputAddList.current.focus();
          }}
        >
          <T.Flex width="100%" justify="center" margin="10px">
            <T.SvgContainer
              color="#898d93"
              hover_color="#898d93"
              fill="true"
            >
              {plusSign}
            </T.SvgContainer>
          </T.Flex>
        </S.ItemContainer>
      )}
      <S.AddListInputContainer isDisplayed={isAddListOpen}>
        <form onSubmit={addNewList}>
          <T.Flex>
            <T.Input
              ref={inputAddList}
              value={newListName}
              onChange={(e) => setNewListName(e.target.value)}
              width="100%"
              height="32px"
              color="black"
              padding="0 7px"
              placeholder="List Name"
              radius="4px 0 0 4px"
            />
            <T.Button
              padding="0 10px"
              radius="0 4px 4px 0"
              height="32px"
              background="black"
              type="light"
            >
              {newListName ? (
                "Add"
              ) : (
                <T.SvgContainer
                  color="#898d93"
                  width="17px"
                  fill="true"
                  rotate="45deg"
                >
                  {plusSign}
                </T.SvgContainer>
              )}
            </T.Button>
          </T.Flex>
        </form>
      </S.AddListInputContainer>{" "}
    </S.ListContainer>
  );
}
