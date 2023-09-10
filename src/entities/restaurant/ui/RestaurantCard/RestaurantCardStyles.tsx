import styled from 'styled-components/native';
import { Card } from 'react-native-paper';

export const SCardTextContent = styled(Card.Content)`
  margin-top: ${(props) => props.theme.space[3]};
  row-gap: ${(props) => props.theme.space[2]};
`;

export const STitle = styled.Text`
  color: ${(props) => props.theme.color.ui.primary};
  font-family: ${(props) => props.theme.font.heading};
  font-size: ${(props) => props.theme.fontSize.title};
`;

export const SBottomText = styled.Text`
  color: ${(props) => props.theme.color.ui.primary};
  font-family: ${(props) => props.theme.font.body};
  font-size: ${(props) => props.theme.fontSize.caption};
`;

export const SUnderTitleContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  padding: ${(props) => props.theme.space[1]} 0;
  align-items: center;
`;

export const SUnderTitleRight = styled.View`
  flex-direction: row;
  align-items: center;
  column-gap: ${(props) => props.theme.space[2]};
`;

export const SIcon = styled.Image`
  width: 15px;
  height: 15px;
`;
