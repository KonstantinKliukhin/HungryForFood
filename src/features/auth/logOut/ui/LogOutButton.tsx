import React, { FC } from "react";
import { useLogOut } from "../model";
import { SPrimaryButton } from "../../../../shared/ui";

type PropsType = {};

export const LogOutButton: FC<PropsType> = props => {
  const { logOut, loading } = useLogOut();
  return (
    <SPrimaryButton onPress={logOut} loading={loading}>
      Log out
    </SPrimaryButton>
  );
};
