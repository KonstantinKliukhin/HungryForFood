import React, { FC, ReactNode } from "react";
import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import styled from "styled-components/native";
import { SLayoutContainer } from "../LayoutContainer/LayoutContainer";

type PropsType = {
  top: ReactNode;
  main: ReactNode;
};

export const MainLayout: FC<PropsType> = (props) => {
  return (
    <>
      <ExpoStatusBar
        style="auto"
        // backgroundColor={theme.color.bg.primary}
      />
      <SLayoutContainer>
        <STopContainer>{props.top}</STopContainer>
        <SMainContainer>{props.main}</SMainContainer>
      </SLayoutContainer>
    </>
  );
};

const STopContainer = styled.View`
  padding: ${(props) => `${props.theme.space[2]} ${props.theme.space[3]}`};
  background-color: ${(props) => props.theme.color.bg.primary};
  flex-direction: row;
  align-items: center;
`;

const SMainContainer = styled.View`
  flex: 1;
  padding: ${(props) => `${props.theme.space[2]} ${props.theme.space[3]} 0`};
  background-color: ${(props) => props.theme.color.bg.primary};
`;
