import React, { FC } from "react";
import { PaperTextInput, SPrimaryButton, SSpacer } from "../../../shared/ui";
import { useSignInForm } from "../model/signInForm";
import styled from "styled-components/native";
import { Dimensions } from "react-native";
import { EMAIL_ERRORS, PASSWORD_ERRORS } from "../../../entities/auth";
import { SText } from "../../../shared/ui/Typography/Text";
import { SIGN_IN_API_ERROR } from "../model/signIn";

const EMAIL_ERROR_TEXT_MAPPING = {
  [EMAIL_ERRORS.INVALID]: "Incorrect email",
  [EMAIL_ERRORS.REQUIRED]: "Email is required",
};

const PASSWORD_ERROR_TEXT_MAPPING = {
  [PASSWORD_ERRORS.INVALID_LENGTH]: "At least 7 character",
  [PASSWORD_ERRORS.REQUIRED]: "Password is required",
  [PASSWORD_ERRORS.MISSING_UPPERCASE_LETTER]: "At least 1 uppercase letter",
};

const SIGN_IN_ERROR_TEXT_MAPPING = {
  [SIGN_IN_API_ERROR.UNKNOWN]: "Invalid password or login",
  [SIGN_IN_API_ERROR.USER_NOT_FOUND]: "Invalid password or login",
};

export const SignInForm: FC = () => {
  const form = useSignInForm();

  const emailError = form.emailError && EMAIL_ERROR_TEXT_MAPPING[form.emailError];
  const passwordError = form.passwordError && PASSWORD_ERROR_TEXT_MAPPING[form.passwordError];
  return (
    <>
      <SInput
        label="email"
        mode="outlined"
        value={form.email}
        onChangeText={form.setEmail}
        errorText={emailError}
      />
      <SSpacer size="sm" position="top" />
      <SInput
        label="password"
        mode="outlined"
        value={form.password}
        onChangeText={form.setPassword}
        errorText={passwordError}
        textContentType="password"
        autoCapitalize="none"
        secureTextEntry
      />
      <SSpacer size="md" position="top" />
      <SPrimaryButton icon="lock-open-outline" onPress={form.handleSubmit} loading={form.loading}>
        Sign in
      </SPrimaryButton>
      <SSpacer size="sm" position="top" />
      {form.error ?
        <SText variant="error">{SIGN_IN_ERROR_TEXT_MAPPING[form.error]}</SText>
        : <SSpacer size="lg" position="top" />
      }
    </>
  );
};

const deviceWidth = Dimensions.get("window").width;

const SInput = styled(PaperTextInput)`
  width: ${deviceWidth * 0.7}px;
  height: 50px;
`;

