import { EMAIL_ERRORS, PASSWORD_ERRORS, validateEmail, validatePassword } from "../../../entities/auth";
import { useCallback, useMemo, useState } from "react";
import { useSignUp } from "./signUp";


export const useSignUpForm = () => {
  const [email, setEmail] = useState<string>("");
  const [emailError, setEmailError] = useState<EMAIL_ERRORS | null>(null);
  const [password, setPassword] = useState<string>("");
  const [passwordError, setPasswordError] = useState<PASSWORD_ERRORS | null>(null);
  const [repeatedPassword, setRepeatedPassword] = useState<string>("");
  const [repeatedPasswordError, setRepeatedPasswordError] = useState<string | null>("");

  const signUpState = useSignUp();

  const handleSubmit = useCallback(
    () => {
      if (signUpState.loading) return;
      const emError = validateEmail(email);
      if (emError) setEmailError(emError);
      else if (emailError) setEmailError(null);

      const pasError = validatePassword(password);
      if (pasError) setPasswordError(pasError);
      else if (passwordError) setPasswordError(null);

      const repPasError = repeatedPassword !== password;
      if (repPasError) setRepeatedPasswordError("Passwords doesn't match");

      if (emError || pasError || repPasError) return;

      signUpState.signUp({ email, password });
    },
    [email, password, signUpState.loading, emailError, passwordError, repeatedPassword],
  );

  return useMemo(() => ({
      email,
      setEmail,
      password,
      setPassword,
      repeatedPassword,
      setRepeatedPassword,
      handleSubmit,
      emailError,
      passwordError,
      loading: signUpState.loading,
      error: signUpState.error,
      repeatedPasswordError,
    }),
    [email,
      password,
      handleSubmit,
      emailError,
      passwordError,
      signUpState.loading,
      signUpState.error,
      repeatedPasswordError,
      repeatedPassword
    ]);
};
