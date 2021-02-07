import * as S from "./style";
import * as T from "../../components/Typography";

import Card from "../../components/SignCard";
import Footer from "../../components/SignFooter";
import Header from "../../components/SignHeader";
import LoadingPopUp from "../../components/LoadingPopUp";
import { useState } from "react";
import { useStateValue } from "../../components/StateProvider";

export default function Sign({ type }) {
  const [isLoading, setIsLoading] = useState(false);
  const [{ user }] = useStateValue();
  return (
    <>
      <S.Container>
        <T.Content padding="0 30px">
          <LoadingPopUp
            isDisplayed={isLoading}
            text={user.displayName && `Welcome ${user.displayName}`}
          ></LoadingPopUp>
          <Header type={type} />
          <Card setIsLoading={setIsLoading} type={type} />
          <Footer type={type} />
        </T.Content>
      </S.Container>
    </>
  );
}
