import { FC, PropsWithChildren, useEffect } from "react";
import * as firebaseAuth from "firebase/auth";
import { auth } from "../../firebase.config";
import { useUserState } from "../entities/user";
import { firebaseUserToUser, useAuthState } from "../entities/auth";

export const MountAuth: FC<PropsWithChildren> = props => {
  const userState = useUserState();
  const authState = useAuthState();

  useEffect(() => {
    firebaseAuth.onAuthStateChanged(auth, (user) => {
      authState.setLoading(false);

      if (!user) {
        userState.setUser(null);
        authState.setIsAuthenticated(false);
        return;
      }

      userState.setUser(firebaseUserToUser(user));
      authState.setIsAuthenticated(true);
    });
  }, []);

  return (<>{props.children}</>)
};
