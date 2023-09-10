import React from "react";
import styled from "styled-components/native";
import { Card } from "react-native-paper";

export const SCardShadowContainer = styled(Card)
  .attrs(props => ({ elevation: props.elevation === undefined ? 5: props.elevation }))`
  position: relative;
  padding: ${(props) => props.theme.space[3]};
  background-color: ${(props) => props.theme.color.bg.primary};
`;
