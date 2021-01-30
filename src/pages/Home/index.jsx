import * as S from "./style";

import AddTaskMenu from "../../components/AddTaskMenu";
import HomeAside from "../../components/HomeAside";
import HomeHeader from "../../components/HomeHeader";
import HomeMain from "../../components/HomeMain";

export default function Home() {
  return (
    <>
      <S.Container>
        <HomeAside />
        <S.Main>
          <HomeHeader />
          <HomeMain />
        </S.Main>
        <AddTaskMenu />
      </S.Container>
    </>
  );
}
