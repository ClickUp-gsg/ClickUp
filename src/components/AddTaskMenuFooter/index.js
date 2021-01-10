import * as A from "../../assets";
import * as S from "./style";
import * as T from "../Typography";

export default function AddTaskMenuFooter() {
  return (
    <T.Flex margin="85px 20px 0 20px">
      {/* Footer Options */}
      <T.Flex>
        <T.ToolTip text="set priority" bottom="57px">
          <T.SvgContainer width="30px" margin="0 11px 0 4px">
            {A.flag}
          </T.SvgContainer>
        </T.ToolTip>
        <T.ToolTip text="set Dates" bottom="57px">
          <T.SvgContainer width="30px" margin="0 11px 0 4px">
            {A.calenderIcon}
          </T.SvgContainer>
        </T.ToolTip>
        <T.ToolTip text="Edit tags" bottom="50px">
          <T.SvgContainer width="22px" margin="2px 11px 0 9px">
            <S.DashedCircle>{A.tags}</S.DashedCircle>
          </T.SvgContainer>
        </T.ToolTip>
        {/* <S. */}
        <T.ToolTip text="Templates" bottom="48px">
          <T.SvgContainer width="30px" margin="-2px 2px 0 12px">
            <S.DashedCircle>{A.star}</S.DashedCircle>
          </T.SvgContainer>
        </T.ToolTip>
        <T.ToolTip text="Dependencies" bottom="57px">
          <T.SvgContainer width="35px" margin="0 5px 0 4px">
            {A.rows}
          </T.SvgContainer>
        </T.ToolTip>
        <T.ToolTip text="Watchers" bottom="50px">
          <T.SvgContainer
            width="30px"
            margin="0 11px 0 4px"
            active="true"
          >
            {A.eye}
          </T.SvgContainer>
          <S.NumberOfWatchers>1</S.NumberOfWatchers>
        </T.ToolTip>
      </T.Flex>
      {/* Footer Button */}
      <T.Flex>
        <T.Button
          width="121px"
          height="40px"
          radius="3px 0 0 3px"
          margin="0 1px 0 0"
        >
          Create Task
        </T.Button>
        <T.Button width="23px" height="40px" radius="0 3px 3px 0">
          <T.SvgContainer
            rotate="true"
            color="white"
            hover_color="white"
            fill="true"
            width="7px"
            margin="0px auto"
          >
            {A.arrow}
          </T.SvgContainer>
        </T.Button>
      </T.Flex>
    </T.Flex>
  );
}
