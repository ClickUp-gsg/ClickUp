import * as A from "../../assets";
import * as S from "./style";
import * as T from "../Typography";

import Body from "../AddTaskMenuBody";
import Footer from "../AddTaskMenuFooter";
import { useState } from "react";

export default function AddTaskMenu() {
  const [opened, setOpened] = useState(true);
  return (
    <S.Container>
      {/* Open Task Button */}
      <S.AddTaskButton>
        <T.Button
          onClick={() => setOpened(true)}
          shadow="0 3px 10px -3px #7B68EE"
          radius="10px"
          padding="4px 13px"
          height="32px"
          scale="1.1"
          color="white"
        >
          <T.Flex>
            <T.SvgContainer
              color="white"
              hover_color="white"
              fill="true"
            >
              {A.plusSign}
            </T.SvgContainer>
            <T.Span margin="0 0 0 9px" color="white">
              Task
            </T.Span>
          </T.Flex>
        </T.Button>
      </S.AddTaskButton>
      <S.Menu isOpened={opened}>
        <S.Header>
          <T.ToolTip bottom="25px" text="Change status">
            <S.ChangeStatus />
          </T.ToolTip>
          <T.Input
            type="text"
            width="90%"
            height="20px"
            size="16px"
            margin="-5px 20px 0 13px"
            placeholder="Task name or type '/' for commands"
          />
          <T.ToolTip text="Minimize draft">
            <T.SvgContainer width="16px" color="#343434">
              {A.minimizeTaskIcon}
            </T.SvgContainer>
          </T.ToolTip>
          <T.CloseBtn
            handleClick={() => setOpened(false)}
            fill="true"
            margin="0 0 0 15px"
            width="14px"
            color="rgb(52,52,52)"
          />
        </S.Header>
        <main>
          <S.Body>
            <Body />
          </S.Body>
        </main>
        <footer>
          <Footer />
        </footer>
      </S.Menu>
    </S.Container>
  );
}
