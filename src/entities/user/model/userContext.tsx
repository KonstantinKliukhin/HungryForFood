import { createContext, Dispatch, FC, PropsWithChildren, SetStateAction, useContext, useState } from "react";
import { User } from "./User";

type UserContextType = {
  user: User | null;
  setUser: Dispatch<SetStateAction<User | null>>;
}

const initialState: UserContextType = {
  user: null,
  setUser: () => undefined,
};

const UserContext = createContext<UserContextType>(initialState);


export const UserProvider: FC<PropsWithChildren> = props => {
  const [user, setUser] = useState<null | User>(null);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {props.children}
    </UserContext.Provider>
  );
};

export const useUserState = () => useContext(UserContext);

