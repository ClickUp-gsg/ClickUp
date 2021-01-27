import * as S from "./style";
import * as T from "../Typography";

import { loadSpinner } from "../../assets";
import { useStateValue } from "../StateProvider";

export default function LoadingPopUp({ isDisplayed }) {
  const [{ user }] = useStateValue();
  return (
    <S.Container isDisplayed={isDisplayed}>
      <T.H1>{user.name && `Welcome ${user.name}`}</T.H1>
      <T.Span>{loadSpinner}</T.Span>
    </S.Container>
  );
}
