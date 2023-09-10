import React, { FC } from 'react';
import styled from 'styled-components/native';
import star from '../../../../assets/star';
import { SvgXml } from 'react-native-svg';
import { ViewStyle } from 'react-native';

type PropsType = {
  starsCount: number;
  style?: ViewStyle;
};

export const StarsList: FC<PropsType> = (props) => {
  return (
    <SList style={props.style}>
      {new Array(Math.round(props.starsCount)).fill(null).map((_, i) => (
        <SvgXml key={i} xml={star} width={15} height={15} />
      ))}
    </SList>
  );
};

const SList = styled.View`
  flex-direction: row;
  column-gap: ${(props) => props.theme.space[1]};
`;
