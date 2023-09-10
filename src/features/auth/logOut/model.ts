import { useCallback, useState } from "react";
import { useUserState } from "../../../entities/user";
import { useAuthState } from "../../../entities/auth";
import { logOutRequest } from "./api";

export const useLogOut = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const userState = useUserState();
  const authState = useAuthState();

  const logOut = useCallback(() => {
    logOutRequest()
      .then(() => {
        setLoading(true);
        userState.setUser(null);
        authState.setIsAuthenticated(false);
      })
      .finally(() => setLoading(false));
  }, []);

  return { loading, logOut };
};
