import * as T from "../Typography";

import { emailIcon, passwordIcon, userIcon } from "../icons";

import Input from "../SignTxtField";
import { auth } from "../../firebase";
import useForm from "../useForm";
import { useHistory } from "react-router-dom";

async function signUp(e, name, email, password, history) {
  e.preventDefault();
  try {
    const res = await auth.createUserWithEmailAndPassword(
      email,
      password
    );
    history.push("/");
    await res.user.updateProfile({ displayName: name });
    console.log(
      "successfully SignUp : ",
      res.user.displayName,
      res.user
    );
  } catch (e) {
    console.log(e);
  }
}

async function signIn(e, email, password, history) {
  e.preventDefault();
  try {
    const res = await auth.signInWithEmailAndPassword(
      email,
      password
    );
    history.push("/");
    console.log("Successfully SignIn: ", res.user.displayName, res);
  } catch (e) {
    console.log(e);
  }
}

// async function signWithGoogle() {
//   try {
//     const res = await auth.signInWithPopup(provider);
//     console.log(res);
//   } catch (e) {
//     console.log(e);
//   }
// }

export default function SignForm({ type }) {
  const initState =
    type === "SignUp"
      ? {
          name: "",
          email: "",
          password: "",
        }
      : { email: "", password: "" };
  const [inputs, handleChange] = useForm(initState);
  const history = useHistory();
  return (
    <form
      onSubmit={(e) =>
        type === "SignUp"
          ? signUp(
              e,
              inputs.name,
              inputs.email,
              inputs.password,
              history
            )
          : signIn(e, inputs.email, inputs.password, history)
      }
    >
      {type === "SignUp" && (
        <Input
          headerTxt="Full Name"
          icon={userIcon}
          placeholder="John Doe"
          errorTxt="This field is required!"
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
        errorTxt="This field is required!"
        // hasError={true}
        value={inputs.email}
        handleChange={handleChange}
        type="email"
        name="email"
      />
      <Input
        headerTxt={type === "SignUp" ? "Choose Password" : "Password"}
        type="password"
        name="password"
        linkTxt={type === "SignUp" ? "Show" : "Forget Password?"}
        placeholder={type === "SignUp" ? "••••••" : "Enter Password"}
        errorTxt={
          type === "SignUp"
            ? " Password must be 8 characters or longer! "
            : "Password required!"
        }
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
