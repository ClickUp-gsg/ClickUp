import * as A from "../../assets";
import * as S from "./style";
import * as T from "../Typography";

import { db } from "../../firebase";
import { useStateValue } from "../StateProvider";

export default function ListTask({
  id,
  header,
  desc,
  isCompleted,
  hasStar,
  lists,
  isPinned,
}) {
  const [{ user, currentList }, dispatch] = useStateValue();
  const toggleTaskStatus = () => {
    dispatch({ type: "TOGGLE_TASK_STATUS", payload: id });
    if (user.uid) {
      db.collection("users")
        .doc(user.uid)
        .collection("tasks")
        .doc(id)
        .set({ isCompleted: !isCompleted }, { merge: true })
        .then(() => {
          console.log("task status successfully updated");
        })
        .catch((err) => {
          console.log("Error in updating task status: ", err);
        });
    }
  };

  const deleteTask = () => {
    dispatch({ type: "DELETE_TASK", payload: id });
    db.collection("users")
      .doc(user.uid)
      .collection("tasks")
      .doc(id)
      .delete()
      .then(() => {
        console.log("Task successfully deleted!");
      })
      .catch((error) => {
        console.error("Error Deleting Task: ", error);
      });
  };

  function toggleStarList(oldTaskLists) {
    let newTaskLists;
    const indexOfFavorites = oldTaskLists.indexOf("favorites");
    if (indexOfFavorites === -1) {
      newTaskLists = [...oldTaskLists, "favorites"];
    } else {
      oldTaskLists.splice(indexOfFavorites, 1);
      newTaskLists = oldTaskLists;
    }
    return newTaskLists;
  }

  function toggleStar() {
    const newLists = toggleStarList(lists);
    dispatch({ type: "TOGGLE_TASK_STAR", payload: { id, newLists } });
    if (user.uid) {
      db.collection("users")
        .doc(user.uid)
        .collection("tasks")
        .doc(id)
        .set({ hasStar: !hasStar, lists: newLists }, { merge: true })
        .catch((err) => {
          console.log("Error in updating task hasStar: ", err);
        });
    }
  }

  function togglePin() {
    dispatch({ type: "TOGGLE_TASK_PIN", payload: id });
  }

  return (
    <S.Container
      isVisible={lists.some((list) => list === currentList)}
      isPinned={isPinned}
    >
      <S.Header>
        <T.Flex>
          {header}
          <S.DisplayOnHover isPinned={isPinned}>
            <T.SvgContainer
              color={isPinned ? "black" : "#454545"}
              hover_color="black"
              width="15px"
              rotate={isPinned ? "-45deg" : ""}
              onClick={togglePin}
            >
              {A.pin}
            </T.SvgContainer>
          </S.DisplayOnHover>
        </T.Flex>
      </S.Header>
      <S.Body>
        <T.P color="#555" size="13px" margin="0 5px 3px 0">
          {desc}
        </T.P>
        <S.DisplayOnHover isPinned={isPinned}>
          <T.ToolTip
            bottom="40px"
            text={hasStar ? "Remove Star" : "Add Star"}
          >
            <T.SvgContainer
              fill="true"
              width="25px"
              noStroke="true"
              active={hasStar ? "true" : ""}
              onClick={() => toggleStar()}
            >
              {A.star2}
            </T.SvgContainer>
          </T.ToolTip>
        </S.DisplayOnHover>
      </S.Body>
      <S.DisplayOnHover isPinned={isPinned}>
        <S.SubtaskContainer>
          <T.ToolTip text="Create Subtask">
            <T.SvgContainer width="12px">{A.subtask}</T.SvgContainer>
          </T.ToolTip>
        </S.SubtaskContainer>
      </S.DisplayOnHover>
      <S.DisplayOnHover isPinned={isPinned}>
        <S.Footer>
          <T.Flex justify="space-between">
            <T.Flex>
              <T.ToolTip text="Due Date" bottom="42px">
                <T.SvgContainer color="#979797" width="32px">
                  {A.calenderWithoutCircle}
                </T.SvgContainer>
              </T.ToolTip>
              <T.Span margin="0 6px 0 -2px">
                <T.ToolTip text="Set Priority" bottom="42px">
                  <T.SvgContainer color="#979797" width="32px">
                    {A.flagWithoutCircle}
                  </T.SvgContainer>
                </T.ToolTip>
              </T.Span>
              <T.Span margin="2px 0 0">
                <T.ToolTip text="Edit Tags">
                  <T.SvgContainer color="#979797" width="20px">
                    {A.tags}
                  </T.SvgContainer>
                </T.ToolTip>
              </T.Span>
            </T.Flex>
            <T.Flex>
              <T.ToolTip
                text={isCompleted ? "Reopen Task" : "Close task"}
              >
                <T.SvgContainer
                  onClick={toggleTaskStatus}
                  color={isCompleted ? "#777777" : "#979797"}
                  hover_color={"#67CB48"}
                  fill={isCompleted ? "true" : ""}
                  width={isCompleted ? "16px" : "18px"}
                >
                  {isCompleted ? A.reopenIcon : A.checkIcon}
                </T.SvgContainer>
              </T.ToolTip>
              <T.Span margin="-2px 10px 0 8px">
                <T.ToolTip text="Delete task">
                  <T.SvgContainer
                    onClick={deleteTask}
                    color={"#202020"}
                    hover_color={"red"}
                    fill={"true"}
                    width={"14px"}
                  >
                    {A.crossIcon}
                  </T.SvgContainer>
                </T.ToolTip>
              </T.Span>
              <T.ToolTip text="More options">
                <T.SvgContainer
                  color="#979797"
                  fill="true"
                  width="16px"
                >
                  {A.menuCollapse}
                </T.SvgContainer>
              </T.ToolTip>
            </T.Flex>
          </T.Flex>
        </S.Footer>
      </S.DisplayOnHover>
    </S.Container>
  );
}
