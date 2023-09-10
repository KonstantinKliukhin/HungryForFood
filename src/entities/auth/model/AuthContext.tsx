import { createContext, Dispatch, FC, PropsWithChildren, SetStateAction, useContext, useState } from "react";

type AuthContextType = {
  loading: boolean;
  error: null | Error;
  isAuthenticated: boolean;
  setIsAuthenticated:  Dispatch<SetStateAction<boolean>>
  setLoading:  Dispatch<SetStateAction<boolean>>
  setError:  Dispatch<SetStateAction<Error | null>>
}

const initialState: AuthContextType = {
  loading: false,
  error: null,
  isAuthenticated: false,
  setIsAuthenticated: () => undefined,
  setLoading: () => undefined,
  setError: () => undefined,
}

export const AuthContext = createContext<AuthContextType>(initialState)


export const AuthProvider: FC<PropsWithChildren> = props => {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<null | Error>(null);
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);

  return (
    <AuthContext.Provider value={{loading, error, setIsAuthenticated, isAuthenticated, setError, setLoading}}>
      {props.children}
    </AuthContext.Provider>
  );
};


export const useAuthState = () => useContext(AuthContext);

export function useAuthContent<AuthT, UnAuthT>(authContent: AuthT, unAuthContent: UnAuthT): AuthT | UnAuthT {
  return useAuthState().isAuthenticated ? authContent : unAuthContent;
}

