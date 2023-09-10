import styled from 'styled-components/native';
import { Platform } from 'react-native';
import { StatusBar as RNStatusBar } from 'react-native';

export const SLayoutContainer = styled.SafeAreaView`
  flex: 1;
  padding-top: ${Platform.select({
    ios: 0,
    android: RNStatusBar.currentHeight,
  })}px;
  background-color: ${(props) => props.theme.color.bg.primary};
`;
