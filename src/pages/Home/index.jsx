import * as S from "./style";
import * as indexedDB from "../../components/useIndexedDB";

import HomeAside from "../../components/HomeAside";
import HomeHeader from "../../components/HomeHeader";
import HomeMain from "../../components/HomeMain";
import { useEffect } from "react";
import { useStateValue } from "../../components/StateProvider";

export default function Home() {
  const [, dispatch] = useStateValue();
  useEffect(() => {
    (async () => {
      const userDoc = await indexedDB.getDB("user");
      const payload = userDoc?.payload || {};
      dispatch({ type: "EDIT_USER", payload });
    })();
  }, [dispatch]);
  return (
    <>
      <S.Container>
        <HomeAside />
        <S.Main>
          <HomeHeader />
          <HomeMain />
        </S.Main>
      </S.Container>
    </>
  );
}
