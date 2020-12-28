import { useState } from "react";

const useForm = (initInputs) => {
  const [inputs, setInputs] = useState(initInputs || {});

  function handleInputsChange(e) {
    const { name, value } = e.target;
    setInputs({ ...inputs, [name]: value });
  }

  return [inputs, handleInputsChange];
};
export default useForm;
