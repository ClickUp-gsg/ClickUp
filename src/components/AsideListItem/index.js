import * as A from "../../assets";
import * as S from "./style";
import * as T from "../Typography";

import { db } from "../../firebase";
import { useStateValue } from "../StateProvider";

export default function AsideListItem({
  isCollapsed,
  reference,
  title,
  icon,
  id,
}) {
  const [{ user, currentList }, dispatch] = useStateValue();

  async function deleteList(e, listId, listName) {
    e.stopPropagation();
    try {
      if (user?.uid)
        await db
          .collection("users")
          .doc(user.uid)
          .collection("lists")
          .doc(listId)
          .delete();
      dispatch({ type: "DELETE_LIST", payload: listName });
    } catch (e) {
      console.log(e);
    }
  }

  // async function editList(e, listId, newName) {
  //   e.stopPropagation();
  //   try {
  //     if (user?.uid)
  //       await db
  //         .collection("users")
  //         .doc(user.uid)
  //         .collection("lists")
  //         .doc(listId)
  //         .set({ name: newName }, { merge: true });
  //     dispatch({
  //       type: "EDIT_LIST",
  //       payload: { id: listId, newName: newName },
  //     });
  //   } catch (e) {
  //     console.log(e);
  //   }
  // }

  function changeActiveList(listName) {
    dispatch({ type: "EDIT_CURRENT_LIST", payload: listName });
  }

  return (
    <>
      <S.ItemContainer
        ref={reference}
        onClick={() => changeActiveList(title)}
        isActive={currentList === title}
        value={title}
      >
        <T.Flex width="100%">
          <T.Flex>
            <S.Icon>{icon}</S.Icon>
            <T.Visibility isVisible={!isCollapsed} transition=".2s">
              {title}
            </T.Visibility>
          </T.Flex>
          <T.Flex>
            {/* <S.DisplayOnHover onClick={(e) => editList(e, id, title)}>
              <T.SvgContainer
                fill="true"
                color="#818693"
                width="13px"
                margin="0 9px 0 0"
              >
                <T.Span>{A.edit}</T.Span>
              </T.SvgContainer>
            </S.DisplayOnHover> */}
            <S.DisplayOnHover
              onClick={(e) => deleteList(e, id, title)}
            >
              <T.SvgContainer
                fill="true"
                color="#818693"
                hover_color="red"
                width="13px"
              >
                <T.Span>{A.crossIcon}</T.Span>
              </T.SvgContainer>
            </S.DisplayOnHover>
          </T.Flex>
        </T.Flex>
      </S.ItemContainer>
    </>
  );
}
