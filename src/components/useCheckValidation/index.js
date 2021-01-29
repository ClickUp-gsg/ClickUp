export default function checkValidation(inputs) {
  let keys = Object.keys(inputs);
  for (let i = 0; i < keys.length; i++) {
    if (!inputs[keys[i]]) {
      let error = {
        errorThrower: "front-end",
        code: keys[i],
        message: "This field is required",
      };
      throw error;
    }
  }
}
