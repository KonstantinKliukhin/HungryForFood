import { useUserState } from "../../../entities/user";
import { useCallback, useState } from "react";
import { CredentialsType, useAuthState } from "../../../entities/auth";
import { signUpRequest } from "../api";

export const useSignUp = () => {
  const userState = useUserState();
  const authState = useAuthState();
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<Error | null>(null);

  const signUp = useCallback((credentials: CredentialsType) => {
    setLoading(true);
    authState.setLoading(true);
    signUpRequest(credentials)
      .then(user => {
        userState.setUser(user);
        authState.setIsAuthenticated(true);
      })
      .catch((e) => {
        if (e instanceof Error) {
          setError(e);
          authState.setError(e);
        }
      })
      .finally(() => {
        setLoading(false);
        authState.setLoading(false);
      });
  }, []);


  return { loading, error, signUp };
};
