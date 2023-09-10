import React, { ComponentProps, FC } from "react";
import { TextInput } from "react-native-paper";
import styled from "styled-components/native";
import { SText } from "../Typography/Text";
import { View } from "react-native";
import { SSpacer } from "../utility/Spacer";

type PropsType = ComponentProps<typeof TextInput> & {
  errorText?: string | null;
  containerProps?: ComponentProps<typeof View>;
};

export const PaperTextInput: FC<PropsType> = ({errorText, ...inputProps}) => {
  return (
      <SContainer>
      <SInput {...inputProps} error={inputProps.error || Boolean(errorText)} />
      <SSpacer size="sm" position="top"/>
      {errorText ? <SText variant="error">{errorText}</SText> : <SSpacer size="lg" position="top"/>}
      </SContainer>

  );
};
const SContainer = styled.View`
  width: 100%;
  flex-direction: column;
`;

const SInput = styled(TextInput)`
  width: 100%;
  min-height: 50px;
`
