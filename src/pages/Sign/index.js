import * as S from "./style";
import * as T from "../../components/Typography";

import Card from "../../components/SignCard";
import Footer from "../../components/SignFooter";
import Header from "../../components/SignHeader";
import LoadingPopUp from "../../components/LoadingPopUp";
import { useState } from "react";

export default function Sign({ type }) {
  const [isLoading, setIsLoading] = useState(false);
  return (
    <>
      <S.Container>
        <T.Content padding="0 30px">
          <LoadingPopUp isDisplayed={isLoading}></LoadingPopUp>
          <Header type={type} />
          <Card setIsLoading={setIsLoading} type={type} />
          <Footer type={type} />
        </T.Content>
      </S.Container>
    </>
  );
}
