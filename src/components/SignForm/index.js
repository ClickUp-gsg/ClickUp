import * as T from "../Typography";

import { emailIcon, passwordIcon, userIcon } from "../../assets";

import Input from "../SignTxtField";
import { auth } from "../../firebase";
import checkValidation from "../useCheckValidation";
import handleError from "../useHandleError";
import useForm from "../useForm";
import { useHistory } from "react-router-dom";
import { useState } from "react";
import { useStateValue } from "../StateProvider";

export default function SignForm({ type, setIsLoading }) {
  const history = useHistory();
  const [, dispatch] = useStateValue();
  const [errors, setErrors] = useState({});
  async function signUp(e, name, email, password) {
    try {
      e.preventDefault();
      checkValidation({ name, email, password });
      dispatch({
        type: "CLEAR_USER",
      });
      setIsLoading(true);
      const res = await auth.createUserWithEmailAndPassword(
        email,
        password
      );
      dispatch({
        type: "EDIT_USER",
        payload: { name },
      });
      setTimeout(() => {
        history.push("/");
      }, 500);
      await res.user.updateProfile({ displayName: name });
    } catch (e) {
      setTimeout(() => setIsLoading(false), 500);
      let inputsErrors = handleError(e, [
        "name",
        "email",
        "password",
      ]);
      setErrors(inputsErrors);
    }
  }

  async function signIn(e, email, password) {
    e.preventDefault();
    try {
      checkValidation({ email, password });
      dispatch({
        type: "CLEAR_USER",
      });
      setIsLoading(true);
      const res = await auth.signInWithEmailAndPassword(
        email,
        password
      );
      dispatch({
        type: "EDIT_USER",
        payload: { name: res.user.displayName },
      });
      setTimeout(() => {
        history.push("/");
      }, 500);
    } catch (e) {
      setTimeout(() => setIsLoading(false), 500);
      let inputsErrors = handleError(e, [
        "user",
        "email",
        "password",
      ]);
      setErrors(inputsErrors);
    }
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
