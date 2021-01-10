import * as A from "../../assets";
import * as S from "./style";
import * as T from "../Typography";

export default function AddTaskMenuBody() {
  return (
    <div>
      {/* For the first row of the body */}
      <T.Flex>
        {/* For specify the list (the left side of first row in the body) */}
        <T.Flex>
          <T.P cursor="default" color="rgba(34,34,34,.6)">
            In
          </T.P>
          <T.ToolTip bottom="50px" text="Choose location">
            <T.Input
              cursor="pointer"
              type="text"
              width="190px"
              height="36px"
              size="14px"
              margin="0px 13px"
              placeholder="List Name"
              border="1px solid #e4e4e4"
              padding="0 10px"
              radius="18px"
              color="black"
              hover_background="#f7f7f7"
            />
          </T.ToolTip>
          <T.P
            cursor="default"
            color="rgba(34,34,34,.6)"
            margin="0 13px 0 0"
          >
            For
          </T.P>
          <T.ToolTip bottom="50px" text="Assign">
            <img src={A.userGroupIcon} alt="" />
          </T.ToolTip>
        </T.Flex>
      </T.Flex>
      {/* For text field of description */}
      <T.Input
        placeholder="Description or type '/' for commands"
        width="100%"
        height="100px"
        border="1px solid #e2e2e2"
        padding="0 15px 50px"
        margin="25px 0 0"
      />
      {/* For add subtask and add checklist */}
      <T.Flex margin="31px 0 0" justify="space-between">
        <S.AddContainer>
          <S.AddSvgContainer>{A.plusSign}</S.AddSvgContainer>
          <T.P size="12px" weight="bold" color="rgb(122,122,122)">
            Add subtask
          </T.P>
        </S.AddContainer>
        <S.AddContainer>
          <S.AddSvgContainer>{A.plusSign}</S.AddSvgContainer>
          <T.P size="12px" weight="bold" color="rgb(122,122,122)">
            Add checklist
          </T.P>
        </S.AddContainer>
      </T.Flex>
      {/* For dropdown attachment */}
      <T.Flex margin="30px 0 0" justify="flex-start">
        <T.P size="12px" weight="700" color="#222">
          Attachments
        </T.P>
        <S.DropDownContainer>
          <T.Span size="11px" weight="700">
            Add
          </T.Span>
          <T.SvgContainer margin="-4px 0 0 4px" width="6px">
            {A.arrow}
          </T.SvgContainer>
        </S.DropDownContainer>
      </T.Flex>
      <T.Flex justify="flex-start" margin="10px 0 0">
        <T.SvgContainer
          width="16px"
          color="#E6E6E6"
          hover_color="#E6E6E6"
          margin="0 5px 0 0"
        >
          {A.attachIcon}
        </T.SvgContainer>
        <T.P margin="0 5px 0 0" color="#979797">
          Drag & Drop files to attach or
        </T.P>{" "}
        <S.BrowseLink to="#">Browse</S.BrowseLink>
      </T.Flex>
    </div>
  );
}
