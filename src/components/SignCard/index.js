import * as S from "./style";
import * as T from "../Typography";

import { auth, provider } from "../../firebase";

import SignForm from "../SignForm";
import { ThemeContext } from "styled-components";
import { helpIcon } from "../icons";
import { useContext } from "react";

async function signWithGoogle() {
  try {
    const res = await auth.signInWithPopup(provider);
    console.log(res);
  } catch (e) {
    console.log(e);
  }
}

export default function SignCard({ type = "SignIn" }) {
  const themeContext = useContext(ThemeContext);
  return (
    <S.Container>
      <T.H1 margin="0 0 20px 0" align="center">
        {type === "SignUp" ? "Let's go!" : "Welcome back!"}
      </T.H1>
      <SignForm type={type} />
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
          SSO
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
