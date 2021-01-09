import * as S from "./style";
import * as T from "../../components/Typography";

import Card from "../../components/SignCard";
import Footer from "../../components/SignFooter";
import Header from "../../components/SignHeader";

export default function Sign({ type }) {
  return (
    <S.Container>
      <T.Content padding="0 30px">
        <Header type={type} />
        <Card type={type} />
        <Footer type={type} />
      </T.Content>
    </S.Container>
  );
}
