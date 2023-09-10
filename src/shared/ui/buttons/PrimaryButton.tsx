import styled from "styled-components/native";
import { Button } from "react-native-paper";
import { theme } from "../../styles";

export const SPrimaryButton = styled(Button)
  .attrs({ buttonColor: theme.color.brand.primary, textColor: theme.color.text.inverse })`
  border-radius: 15px;
  padding: ${props => props.theme.space[1]};
  font-size: 18px;
  min-width: 100%;
`;
