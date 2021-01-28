import * as A from "../../assets";
import * as S from "./style";
import * as T from "../Typography";

import { useStateValue } from "../StateProvider";

export default function ListTask({ id, header, body, status }) {
  const [{ tasks }, dispatch] = useStateValue();
  function toggleTaskStatus() {
    tasks[id] = {
      ...tasks[id],
      isCompleted: !tasks[id].isCompleted,
    };
    dispatch({ type: "EDIT_TASKS", payload: tasks });
  }
  return (
    <S.Container>
      <S.Header>{header}</S.Header>
      <S.Body>
        <T.P color="#555" size="13px" margin="0 5px 3px 0">
          {body}
        </T.P>
        <S.DisplayOnHover>
          <T.ToolTip bottom="40px" text="Assign">
            <T.SvgContainer
              margin="0 2px 0 0"
              hover_color=" "
              width="25px"
            >
              {A.user}
            </T.SvgContainer>
          </T.ToolTip>
        </S.DisplayOnHover>
      </S.Body>
      <S.DisplayOnHover>
        <S.SubtaskContainer>
          <T.ToolTip text="Create Subtask">
            <T.SvgContainer width="12px">{A.subtask}</T.SvgContainer>
          </T.ToolTip>
        </S.SubtaskContainer>
      </S.DisplayOnHover>
      <S.DisplayOnHover>
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
              <T.ToolTip text={status ? "Reopen Task" : "Close task"}>
                <T.SvgContainer
                  onClick={toggleTaskStatus}
                  color={status ? "#202020" : "#979797"}
                  hover_color={status ? "red" : "#67CB48"}
                  fill={status && "true"}
                  width={status ? "14px" : "18px"}
                >
                  {status ? A.crossIcon : A.checkIcon}
                </T.SvgContainer>
              </T.ToolTip>
              <T.Span margin="-2px 10px 0 10px">
                <T.ToolTip text="Select multiple tasks">
                  <S.Circle></S.Circle>
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
