import * as S from "./style";
import * as T from "../Typography";

import { ThemeContext } from "styled-components";
import { useContext } from "react";
import { useState } from "react";

export default function SignTxtField({
  type,
  name,
  headerTxt,
  placeholder,
  icon,
  hasError,
  errorTxt,
  linkTxt: initLinkTxt,
  value,
  handleChange,
  deleteError,
}) {
  const themeContext = useContext(ThemeContext);
  const [passwordFieldType, setPasswordFieldType] = useState(
    "password"
  );
  const [linkTxt, setLinkTxt] = useState(initLinkTxt);
  function toggleVisibility(e) {
    if (type === "password") {
      if (passwordFieldType === "password") {
        setPasswordFieldType("text");
        setLinkTxt("Hide");
      } else {
        setPasswordFieldType("password");
        setLinkTxt(initLinkTxt);
      }
    }
  }
  return (
    <S.Container htmlFor={name} onBlur={deleteError}>
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
          type={type !== "password" ? type : passwordFieldType}
          name={name}
          id={name}
          placeholder={placeholder}
        />
        <T.Span align="center">
          <T.Link
            wrap="nowrap"
            size=".8em"
            color={themeContext.primary}
            hover_decoration={themeContext.primary}
            onClick={(e) => toggleVisibility(e)}
          >
            {linkTxt}
          </T.Link>
        </T.Span>
      </S.Input>
      {hasError && (
        <T.Flex justify="flex-start" margin=" 3px 0 0 0">
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
