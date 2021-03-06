import * as S from "./style";
import * as T from "../Typography";
import * as indexedDB from "../useIndexedDB";

import { auth, provider } from "../../firebase";

import SignForm from "../SignForm";
import { ThemeContext } from "styled-components";
import handleError from "../useHandleError";
import { helpIcon } from "../../assets";
import { useContext } from "react";
import { useHistory } from "react-router-dom";
import { useStateValue } from "../StateProvider";

export default function SignCard({ type = "SignIn", setIsLoading }) {
  const [, dispatch] = useStateValue();
  const history = useHistory();
  async function signWithGoogle() {
    try {
      dispatch({ type: "CLEAR_USER" });
      setIsLoading(true);
      const res = await auth.signInWithPopup(provider);
      dispatch({ type: "EDIT_USER", payload: { ...res.user } });
      const { uid, displayName, photoURL } = res.user;
      await indexedDB.setDB("user", {
        uid,
        name: displayName,
        photoURL,
      });
      setTimeout(() => {
        history.push("/");
      }, 200);
    } catch (e) {
      setIsLoading(false);
      const errors = handleError(e);
      dispatch({ type: "SET_SIGN_ERRORS", payload: errors });
    }
  }
  const themeContext = useContext(ThemeContext);
  return (
    <S.Container>
      <T.H1 margin="0 0 20px 0" align="center">
        {type === "SignUp" ? "Let's go!" : "Welcome back!"}
      </T.H1>
      <SignForm setIsLoading={setIsLoading} type={type} />
      <T.Link
        size="11px"
        display="block"
        align="center"
        padding="0 0 26px "
        color={themeContext.primary}
        hover_color={themeContext.primaryDark}
        decoration={themeContext.primary}
        hover_decoration={themeContext.primaryDark}
        onClick={signWithGoogle}
      >
        or {type === "SignUp" ? "signup" : "login"} with&nbsp;
        <T.Span weight="700" color="inherit">
          Google
        </T.Span>
      </T.Link>
      {type === "SignUp" && (
        <S.Terms>
          By clicking the button above, you agree to our&nbsp;
          <T.Link
            size="10px"
            color="#7c828d"
            weight="700"
            decoration="true"
          >
            Terms of Service
          </T.Link>
          &nbsp;and&nbsp;
          <T.Link
            size="10px"
            color="#7c828d"
            weight="700"
            decoration="true"
          >
            Privacy Policy.
          </T.Link>
        </S.Terms>
      )}
      <S.HelpBox>
        <T.Span display="block" width="16px" height="16px">
          {helpIcon}
        </T.Span>
        <T.P color="white" weight="bolder" margin="5px 0 0 0">
          Help
        </T.P>
      </S.HelpBox>
    </S.Container>
  );
}
