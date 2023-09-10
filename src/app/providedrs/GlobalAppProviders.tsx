import React, { FC, PropsWithChildren } from "react";
import { ThemeProvider } from "styled-components/native";
import { theme } from "../../shared/styles";
import { AuthProvider } from "../../entities/auth";
import { UserProvider } from "../../entities/user";
import { NavigationContainer } from "@react-navigation/native";


export const GlobalAppProviders: FC<PropsWithChildren> = props => {
  return (
    <ThemeProvider theme={theme}>
      <AuthProvider>
        <UserProvider>
          <NavigationContainer>
            {props.children}
          </NavigationContainer>
        </UserProvider>
      </AuthProvider>
    </ThemeProvider>
  );
};
