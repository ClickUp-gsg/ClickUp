import { auth } from "../../firebase";
import checkValidation from "../useCheckValidation";
import handleError from "../useHandleError";
import { useHistory } from "react-router-dom";
import { useStateValue } from "../StateProvider";

export default function useSign() {
  const [, dispatch] = useStateValue();
  const history = useHistory();
  const handleSign = async (type, inputs, setIsLoading) => {
    try {
      checkValidation({ ...inputs });
      dispatch({
        type: "CLEAR_USER",
      });
      setIsLoading(true);
      let authType =
        type === "signup"
          ? "createUserWithEmailAndPassword"
          : "signInWithEmailAndPassword";
      let res = await auth[authType](inputs.email, inputs.password);
      let payload =
        type === "signup"
          ? { ...res.user, displayName: inputs.name }
          : { ...res.user };
      dispatch({ type: "EDIT_USER", payload });
      if (type === "signup")
        await res.user.updateProfile({ displayName: inputs.name });
      setTimeout(() => {
        history.push("/");
      }, 200);
      return {};
    } catch (e) {
      setTimeout(() => setIsLoading(false), 200);
      let inputsErrors = handleError(e, [
        "name",
        "user",
        "email",
        "password",
      ]);
      return inputsErrors;
    }
  };
  return handleSign;
}
