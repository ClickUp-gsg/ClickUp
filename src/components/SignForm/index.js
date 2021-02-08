import * as T from "../Typography";

import { emailIcon, passwordIcon, userIcon } from "../icons";

import Input from "../SignTxtField";
import useForm from "../useForm";
import useSign from "../useSign";
import { useState } from "react";

export default function SignForm({ type, setIsLoading }) {
  const [errors, setErrors] = useState({});
  let handleSign = useSign();
  async function signUp(e, name, email, password) {
    e.preventDefault();
    let inputs = { name, email, password };
    let signUpErrors = await handleSign(
      "signup",
      inputs,
      setIsLoading
    );
    setErrors(signUpErrors);
  }

  async function signIn(e, email, password) {
    e.preventDefault();
    let inputs = { email, password };
    let signInErrors = await handleSign(
      "signin",
      inputs,
      setIsLoading
    );
    setErrors(signInErrors);
  }

  const initState =
    type === "SignUp"
      ? {
          name: "",
          email: "",
          password: "",
        }
      : { email: "", password: "" };
  const [inputs, handleChange] = useForm(initState);

  return (
    <form
      onSubmit={(e) =>
        type === "SignUp"
          ? signUp(e, inputs.name, inputs.email, inputs.password)
          : signIn(e, inputs.email, inputs.password)
      }
    >
      {type === "SignUp" && (
        <Input
          headerTxt="Full Name"
          icon={userIcon}
          placeholder="John Doe"
          errorTxt={errors.name}
          hasError={errors.name}
          deleteError={() => setErrors({ ...errors, name: "" })}
          value={inputs.name}
          handleChange={handleChange}
          type="text"
          name="name"
        />
      )}
      <Input
        headerTxt="Email"
        icon={emailIcon}
        placeholder={
          type === "SignUp" ? "example@site.com" : "Enter your email"
        }
        errorTxt={errors.email || errors.user}
        hasError={errors.email || errors.user}
        deleteError={() =>
          setErrors({ ...errors, email: "", user: "" })
        }
        value={inputs.email}
        handleChange={handleChange}
        type="email"
        name="email"
      />
      <Input
        headerTxt={type === "SignUp" ? "Choose Password" : "Password"}
        type="password"
        name="password"
        linkTxt={"Show"}
        placeholder={type === "SignUp" ? "••••••" : "Enter Password"}
        errorTxt={errors.password}
        hasError={errors.password}
        deleteError={() => setErrors({ ...errors, password: "" })}
        inputPadding="0 20px 0 12px"
        icon={passwordIcon}
        value={inputs.password}
        handleChange={handleChange}
      />
      <T.Button type="submit" width="100%" margin="25px 0 25px 0">
        {type === "SignUp" ? "Play with ClickUp" : "Login"}
      </T.Button>
    </form>
  );
}
