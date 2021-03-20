export default function handleError(e, errorsKeywords) {
  if (e.errorThrower !== "front-end") {
    errorsKeywords?.some((filedName) => {
      if (e?.code?.includes?.(filedName)) {
        e.code = filedName;
        return true;
      }
      return false;
    });
    if (
      !errorsKeywords &&
      (e?.code?.includes?.("network") ||
        e?.code?.includes?.("user") ||
        e?.code?.includes?.("auth/"))
    )
      e.code = "password";
  }
  return { [e.code]: e.message };
}
