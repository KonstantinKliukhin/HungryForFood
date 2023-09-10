import React, { FC } from "react";
import styled from "styled-components/native";
import { AccountLayout, SLightCard, SSpacer } from "../../shared/ui";
import { Routes } from "../../shared/constants";
import { StackScreenProps } from "@react-navigation/stack";
import { SPrimaryButton } from "../../shared/ui";

export const HomeScreen: FC<StackScreenProps<AccountScreensParams, Routes.HOME>> = props => {
  const navigate = props.navigation.navigate;

  return (
    <AccountLayout>
      <SLightCard>
        <SAuthButton icon="lock-open-outline" onPress={() => navigate(Routes.SIGN_IN)}>
          Sign In
        </SAuthButton>
        <SSpacer size="lg" position="top" />
        <SAuthButton icon="email-outline" onPress={() => navigate(Routes.SIGN_UP)}>
          Sign Up
        </SAuthButton>
      </SLightCard>
    </AccountLayout>
  );
};

const SAuthButton = styled(SPrimaryButton)`
  min-width: 180px;
`;


