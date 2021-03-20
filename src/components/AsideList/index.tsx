import * as S from "./style";
import * as T from "../Typography";

import { useEffect, useRef, useState } from "react";

import ListItem from "../AsideListItem";
import { db } from "../../firebase";
import { plusSign } from "../../assets";
import { useStateValue } from "../StateProvider";

interface Props {
  ItemsRefsArr: any;
  listRef: any;
  isListCollapsed: boolean;
}

export default function AsideList({
  ItemsRefsArr,
  listRef,
  isListCollapsed,
}: Props) {
  const [{ user, lists }, dispatch] = useStateValue();
  const [isAddListOpen, setIsAddListOpen] = useState<boolean>(false);
  const [newListName, setNewListName] = useState<string>("");
  const [isLoadingAddList, setIsLoadingAddList] = useState<boolean>(
    false
  );
  const inputAddList: { current: any } = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (isListCollapsed) {
      setIsAddListOpen(false);
      setNewListName("");
    }
  }, [isListCollapsed]);

  useEffect(() => {
    if (!user?.uid) return;
    try {
      (async () => {
        setIsLoadingAddList(true);
        const querySnapshot = await db
          .collection("users")
          .doc(user.uid)
          .collection("lists")
          .get();
        let initLists = querySnapshot.docs.map((doc) => doc.data());
        dispatch({ type: "SET_LISTS", payload: initLists });
      })();
    } catch (e) {
      console.log(e);
    }
    setIsLoadingAddList(false);
  }, [dispatch, user?.uid]);
  function isValidNewListName() {
    if (!newListName) {
      setIsAddListOpen(false);
      return false;
    } else if (lists.some((list: any) => list.name === newListName)) {
      setIsLoadingAddList(true);
      setTimeout(() => {
        setIsLoadingAddList(false);
      }, 400);
      return false;
    }
    return true;
  }

  async function addNewList(e: any) {
    e.preventDefault();
    if (isValidNewListName() && newListName && !isLoadingAddList) {
      try {
        setIsLoadingAddList(true);
        const id = "_" + Date.now();
        const newList = {
          id,
          name: newListName,
          icon: "#",
        };
        if (user?.uid)
          await db
            .collection("users")
            .doc(user.uid)
            .collection("lists")
            .doc(id)
            .set(newList);
        dispatch({ type: "ADD_NEW_LIST", payload: newList });
      } catch (e) {
        console.log(e);
      }
      setIsLoadingAddList(false);
      setNewListName("");
      setIsAddListOpen(false);
    }
  }

  return (
    <S.ListContainer ref={listRef} isCollapsed={isListCollapsed}>
      {lists.map((list: { name: string; id: number; icon: any }) => (
        <ListItem
          key={list.name} //
          id={list.id}
          reference={(el: any) =>
            (ItemsRefsArr.current[list.name] = el)
          }
          title={list.name}
          icon={list.icon}
          isCollapsed={isListCollapsed}
        />
      ))}
      {!isListCollapsed && (
        <S.ItemContainer
          position="absolute"
          isDisplayed={!isAddListOpen}
          onClick={() => {
            !isListCollapsed && setIsAddListOpen(true);
            inputAddList?.current?.focus();
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
        <form onSubmit={(e) => addNewList(e)}>
          <T.Flex>
            <T.Input
              ref={inputAddList}
              value={newListName}
              onChange={(e: any) => setNewListName(e.target.value)}
              width="100%"
              height="32px"
              color={isLoadingAddList ? "#777777" : "black"}
              padding="0 0px 0 13px"
              placeholder="List Name"
              radius="20px 0 0 20px"
              disabled={isLoadingAddList && true}
            />
            <T.Button
              padding="0 10px"
              radius="0 20px 20px 0"
              height="32px"
              disabled={isLoadingAddList}
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
