import * as S from "./style";
import * as T from "../../components/Typography";

import { useEffect, useState } from "react";

import Card from "../../components/SignCard";
import Footer from "../../components/SignFooter";
import Header from "../../components/SignHeader";
import LoadingPopUp from "../../components/LoadingPopUp";
import { useStateValue } from "../../components/StateProvider";

export default function Sign({ type }) {
  const [isLoading, setIsLoading] = useState(false);
  const [{ user }, dispatch] = useStateValue();
  useEffect(() => {
    dispatch({ type: "CLEAR_SIGN_ERRORS" });
  }, [dispatch]);
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
