import { useUserState } from "../../../entities/user";
import { useCallback, useState } from "react";
import { CredentialsType, useAuthState } from "../../../entities/auth";
import { signInRequest } from "../api";


export enum SIGN_IN_API_ERROR {
  UNKNOWN="UNKNOWN",
  USER_NOT_FOUND="USER_NOT_FOUND"
}

const ERROR_MAPPING = {
  "user-not-found": SIGN_IN_API_ERROR.USER_NOT_FOUND,
}

function mapApiError(error: string): SIGN_IN_API_ERROR {
  const errorEntry = Object.entries(ERROR_MAPPING)
    .find(([key, value]) => error.includes(key));

  if (!errorEntry) return SIGN_IN_API_ERROR.UNKNOWN;

  return errorEntry[1];
}

export const useSignIn = () => {
  const userState = useUserState();
  const authState = useAuthState();
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<SIGN_IN_API_ERROR | null>(null);

  const signIn = useCallback((credentials: CredentialsType) => {
    setLoading(true);
    authState.setLoading(true);
    signInRequest(credentials)
      .then(user => {
        userState.setUser(user);
        authState.setIsAuthenticated(true);
      })
      .catch((e) => {
        if (e instanceof Error) {
          setError(mapApiError(e.message));
          authState.setError(e);
        }
      })
      .finally(() => {
        setLoading(false);
        authState.setLoading(false);
      });
  }, []);


  return { loading, error, signIn };
};
