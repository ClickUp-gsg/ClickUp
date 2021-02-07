import * as S from "./style";
import * as T from "../Typography";

import { loadSpinner } from "../../assets";

export default function LoadingPopUp({ isDisplayed, text }) {
  return (
    <S.Container isDisplayed={isDisplayed}>
      <T.H1>{text}</T.H1>
      <T.Span>{loadSpinner}</T.Span>
    </S.Container>
  );
}
