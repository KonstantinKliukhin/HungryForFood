import React, { FC } from "react";
import { AccountLayout, SLightCard, SPrimaryButton, SSpacer } from "../../shared/ui";
import styled from "styled-components/native";
import { SignInForm } from "../../features/signIn";
import { StackScreenProps } from "@react-navigation/stack";
import { Routes } from "../../shared/constants";
import { useNavigate } from "../../shared/lib/useNavigate";


export const SignInScreen: FC<StackScreenProps<AccountScreensParams, Routes.SIGN_IN>> = props => {
  return (
    <AccountLayout>
      <SContainer>
        <SCard>
          <SignInForm />
        </SCard>
        <SSpacer size="lg" position="top"/>
        <SButton icon="email-outline" onPress={() => props.navigation.navigate(Routes.SIGN_UP)}>
          Sign Up
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
`;
