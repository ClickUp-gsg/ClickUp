import * as S from "./style";
import * as T from "../Typography";

import { ThemeContext } from "styled-components";
import { useContext } from "react";

export default function SignTxtField({
  type,
  name,
  headerTxt,
  placeholder,
  icon,
  hasError,
  errorTxt,
  linkTxt,
  value,
  handleChange,
}) {
  const themeContext = useContext(ThemeContext);
  return (
    <S.Container>
      <T.P
        size="11px"
        weight="700"
        margin="0 0 8px"
        color={hasError && "#e54b4b"}
      >
        {headerTxt}
      </T.P>
      <S.Input error={hasError}>
        <S.Icon error={hasError}>{icon}</S.Icon>
        <S.TxtField
          value={value}
          onChange={handleChange}
          type={type}
          name={name}
          placeholder={placeholder}
        />
        <T.Span align="center">
          <T.Link
            wrap="nowrap"
            size=".8em"
            color={themeContext.primary}
            hover_decoration={themeContext.primary}
          >
            {linkTxt}
          </T.Link>
        </T.Span>
      </S.Input>
      {hasError && (
        <T.Flex
          position="absolute"
          justify="flex-start"
          margin=" 3px 0 0 0"
        >
          <T.Span
            display="inline-block"
            margin="0 5px 0 0"
            width="15px"
            height="11px"
            background="url(https://app-cdn.clickup.com/warning.7863e4644d1594fa77f1.svg) 50%/contain no-repeat transparent"
          />
          <T.P
            display="inline-block"
            margin="1.5px 0 0 0"
            size="10px"
            weight="700"
            color="#e54b4b"
          >
            {errorTxt}
          </T.P>
        </T.Flex>
      )}
    </S.Container>
  );
}
