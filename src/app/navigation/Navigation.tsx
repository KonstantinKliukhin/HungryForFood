import React, { FC } from "react";
import { AppNavigator } from "./AppNavigator";
import { useAuthContent } from "../../entities/auth";
import { AccountNavigator } from "./AccountNavigator";

export const Navigation: FC = () => {
  const Component = useAuthContent(AppNavigator, AccountNavigator)
  return <Component/>;
};
