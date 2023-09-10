import React, { FC } from "react";
import { AccountLayout, SLightCard, SPrimaryButton, SSpacer } from "../../shared/ui";
import styled from "styled-components/native";
import { SignInForm } from "../../features/signIn";
import { Dimensions } from "react-native";
import { StackScreenProps } from "@react-navigation/stack";
import { Routes } from "../../shared/constants";
import { SignUpForm } from "../../features/signUp";


export const SignUpScreen: FC<StackScreenProps<AccountScreensParams, Routes.SIGN_UP>> = props => {
  return (
    <AccountLayout>
      <SContainer>
        <SCard>
          <SignUpForm />
        </SCard>
        <SSpacer size="lg" position="top"/>
        <SButton icon="lock-open-outline" onPress={() => props.navigation.navigate(Routes.SIGN_IN)}>
          Sign In
        </SButton>
      </SContainer>
    </AccountLayout>
  );
};

const SButton = styled(SPrimaryButton)`
  min-width: 150px;
`

const SContainer = styled.View`
  justify-content: center;
  align-items: center;
`;

const SCard = styled(SLightCard)`
  overflow: hidden;
  max-width: 80%;
`
