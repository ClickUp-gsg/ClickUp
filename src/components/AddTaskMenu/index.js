import * as A from "../../assets";
import * as S from "./style";
import * as T from "../Typography";

import Body from "../AddTaskMenuBody";
import Footer from "../AddTaskMenuFooter";
import { useState } from "react";

export default function AddTaskMenu() {
  const [opened, setOpened] = useState(true);
  return (
    <S.Container isOpened={opened}>
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
    </S.Container>
  );
}
