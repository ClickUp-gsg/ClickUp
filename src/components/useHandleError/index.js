export default function handleError(e, errorsKeywords) {
  if (e.errorThrower !== "front-end") {
    errorsKeywords.some((filedName) => {
      if (e.code.includes(filedName)) {
        e.code = filedName;
        return true;
      }
      return false;
    });
  }
  return { [e.code]: e.message };
}