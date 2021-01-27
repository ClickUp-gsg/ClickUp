import * as S from "./style";
import * as T from "../Typography";

export default function SignFooter({ type }) {
  return (
    <S.Container>
      {type !== "SignUp" ? (
        <T.P
          margin="45px 0 0"
          align="center"
          color="white"
          size="11px"
          weight="700"
        >
          LET'S MAKE THE WORLD MORE PRODUCTIVE, TOGETHER.
        </T.P>
      ) : (
        <>
          <T.Flex margin="12px auto 0" width="400px">
            <S.FooterImg
              src="https://app-cdn.clickup.com/assets/images/onboarding/company-logos/google.svg"
              alt=""
            />
            <S.FooterImg
              src="https://app-cdn.clickup.com/assets/images/onboarding/company-logos/airbnb.svg"
              alt=""
            />
            <S.FooterImg
              src="https://app-cdn.clickup.com/assets/images/onboarding/company-logos/nike.svg"
              alt=""
            />
            <hr />
            <S.FooterImg
              src="https://app-cdn.clickup.com/assets/images/onboarding/company-logos/netflix.svg"
              alt=""
            />
            <S.FooterImg
              src="https://app-cdn.clickup.com/assets/images/onboarding/company-logos/uber.svg"
              alt=""
            />
          </T.Flex>
          <T.P
            opacity=".5"
            color="white"
            weight="700"
            size="12px"
            align="center"
            padding="12px 0 0"
          >
            See why 100,000+ teams are more productive with ClickUp
          </T.P>
        </>
      )}
    </S.Container>
  );
}
