import * as T from "../Typography";

export default function SignHeader({ type }) {
  return (
    <header>
      <T.Flex height="100px">
        <div>
          <T.Logo />
        </div>
        <T.Flex>
          <T.P hideOnMobile color="#292d34" margin="0 20px 0 0">
            {type === "SignUp"
              ? "Already playing with ClickUp?"
              : "Don't have an account?"}
          </T.P>
          <T.Link to={type === "SignUp" ? "/signin" : "/signup"}>
            <T.Button
              shadow
              with="92px"
              type="light"
              padding="0 20px"
              height="40px"
              scale="1.05"
            >
              {type === "SignUp" ? "Sign In" : " Sign Up"}
            </T.Button>
          </T.Link>
        </T.Flex>
      </T.Flex>
    </header>
  );
}
