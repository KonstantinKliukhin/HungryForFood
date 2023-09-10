import React, { FC } from "react";
import { PaperTextInput, SPrimaryButton, SSpacer } from "../../../shared/ui";
import { Dimensions } from "react-native";
import styled from "styled-components/native";
import { EMAIL_ERRORS, PASSWORD_ERRORS } from "../../../entities/auth";
import { useSignUpForm } from "../model/signUpForm";
import { SText } from "../../../shared/ui/Typography/Text";

const EMAIL_ERROR_TEXT_MAPPING = {
  [EMAIL_ERRORS.INVALID]: "Incorrect email",
  [EMAIL_ERRORS.REQUIRED]: "Email is required",
};

const PASSWORD_ERROR_TEXT_MAPPING = {
  [PASSWORD_ERRORS.INVALID_LENGTH]: "At least 7 character",
  [PASSWORD_ERRORS.REQUIRED]: "Password is required",
  [PASSWORD_ERRORS.MISSING_UPPERCASE_LETTER]: "At least 1 uppercase letter",
};

export const SignUpForm: FC = props => {
  const form = useSignUpForm();

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
      <SSpacer size="sm" position="top" />
      <SInput
        label="repeat password"
        mode="outlined"
        value={form.repeatedPassword}
        onChangeText={form.setRepeatedPassword}
        errorText={form.repeatedPasswordError}
        textContentType="password"
        autoCapitalize="none"
        secureTextEntry
      />
      <SSpacer size="md" position="top" />
      <SPrimaryButton icon="email-outline" onPress={form.handleSubmit} loading={form.loading}>
        Sign Up
      </SPrimaryButton>
      <SSpacer size="sm" position="top" />
      {form.error ?
        <SText variant="error">{form.error.message}</SText>
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
