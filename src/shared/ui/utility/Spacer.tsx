import styled, { ExecutionContext } from 'styled-components/native';

type PropsType = {
  size: 'sm' | 'md' | 'lg';
  position: 'top' | 'right' | 'bottom' | 'left';
};

const SIZE_MAPPING = {
  sm: 1,
  md: 2,
  lg: 3,
};

const POSITION_MAPPING = {
  top: 'margin-top',
  right: 'margin-right',
  bottom: 'margin-bottom',
  left: 'margin-left',
};

const getVariant = (props: PropsType & ExecutionContext) => {
  return `${POSITION_MAPPING[props.position]}: ${
    props.theme.space[SIZE_MAPPING[props.size]]
  }`;
};

export const SSpacer = styled.View<PropsType>`
  ${getVariant}
`;
