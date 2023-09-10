import React from "react";
import styled from "styled-components/native";

export const SLightCard = styled.View`
  background-color: rgba(255, 255, 255, 0.7);
  padding: ${props => props.theme.space[4]};
  margin-top: ${props => props.theme.space[2]};
  border-radius: 3px;
  align-items: center;
`;
