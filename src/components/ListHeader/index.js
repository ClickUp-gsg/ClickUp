import * as A from "../../assets";
import * as S from "./style";
import * as T from "../Typography";

export default function ListHeader({
  text,
  nmbOfTasks,
  topBorderColor,
}) {
  return (
    <S.Container topBorderColor={topBorderColor}>
      <T.Flex>
        <T.P size="13px" wrap="nowrap">
          {text}
        </T.P>
        <S.NmbOfTasksInList>{nmbOfTasks}</S.NmbOfTasksInList>
      </T.Flex>
      <T.Flex margin="2px 0 0">
        <T.SvgContainer fill="true" color="#979797" width="15px">
          {A.menuCollapse}
        </T.SvgContainer>
      </T.Flex>
    </S.Container>
  );
}
