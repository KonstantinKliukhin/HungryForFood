import { useCallback, useMemo, useState } from "react";
import { useSignIn } from "./signIn";
import { EMAIL_ERRORS, PASSWORD_ERRORS, validateEmail, validatePassword } from "../../../entities/auth";

export const useSignInForm = () => {
  const [email, setEmail] = useState<string>("");
  const [emailError, setEmailError] = useState<EMAIL_ERRORS | null>(null);
  const [password, setPassword] = useState<string>("");
  const [passwordError, setPasswordError] = useState<PASSWORD_ERRORS | null>(null);
  const signInState = useSignIn();

  const handleSubmit = useCallback(
    () => {
      if (signInState.loading) return;
      const emError = validateEmail(email);
      if (emError) setEmailError(emError);
      else if (emailError) setEmailError(null);

      const pasError = validatePassword(password);
      if (pasError) setPasswordError(pasError);
      else if (passwordError) setPasswordError(null);

      if (emError || pasError) return;

      signInState.signIn({ email, password });
    },
    [email, password, signInState.loading, emailError, passwordError],
  );

  return useMemo(() => ({
      email,
      setEmail,
      password,
      setPassword,
      handleSubmit,
      emailError,
      passwordError,
      loading: signInState.loading,
      error: signInState.error,
  }),
    [email, password, handleSubmit, emailError, passwordError, signInState.loading, signInState.error]);
};
