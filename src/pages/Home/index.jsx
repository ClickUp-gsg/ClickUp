import * as S from "./style";

import AddTaskMenu from "../../components/AddTaskMenu";

export default function Home() {
  return (
    <S.Container>
      <h1>this is home page</h1>
      <AddTaskMenu />
    </S.Container>
  );
}
