import * as A from "../../assets";
import * as S from "./style";
import * as T from "../Typography";

import { useStateValue } from "../StateProvider";

export default function ListTask({ id, header, body, status }) {
  const [, dispatch] = useStateValue();
  const toggleTaskStatus = () => {
    dispatch({ type: "TOGGLE_TASK_STATUS", payload: id });
  };
  const deleteTask = () =>
    dispatch({ type: "DELETE_TASK", payload: id });

  return (
    <S.Container>
      <S.Header>{header}</S.Header>
      <S.Body>
        <T.P color="#555" size="13px" margin="0 5px 3px 0">
          {body}
        </T.P>
        <S.DisplayOnHover>
          <T.ToolTip bottom="40px" text="Assign">
            <T.SvgContainer margin="0 2px 0 0" width="25px">
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
                  color={status ? "#777777" : "#979797"}
                  hover_color={"#67CB48"}
                  fill={status ? "true" : ""}
                  width={status ? "16px" : "18px"}
                >
                  {status ? A.reopenIcon : A.checkIcon}
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
