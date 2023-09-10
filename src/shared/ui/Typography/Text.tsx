import styled, { DefaultTheme } from 'styled-components/native';

type TextProps = {
  variant: keyof typeof variants;
  center?: boolean;
};

const defaultTextStyle = (theme: DefaultTheme) => `
  font-family: ${theme.font.body};
  font-weight: ${theme.fontWeight.regular};
  color: ${theme.color.text.primary};
  flex-wrap: wrap;
  margin-top: 0;
  margin-bottom: 0;
`;

const body = (theme: DefaultTheme) => `
  font-size: ${theme.fontSize.body};
`;

const label = (theme: DefaultTheme) => `
  font-family: ${theme.font.heading};
  font-size: ${theme.fontSize.body};
  font-weight: ${theme.fontWeight.medium};
`;

const caption = (theme: DefaultTheme) => `
  font-size: ${theme.fontSize.caption};
  font-weight: ${theme.fontWeight.bold};
`;

const error = (theme: DefaultTheme) => `
  color: ${theme.color.text.error};
`;

const hint = (theme: DefaultTheme) => `
  font-size: ${theme.fontSize.body};
`;

const variants = {
  body,
  label,
  caption,
  error,
  hint,
};

export const SText = styled.Text<TextProps>`
  ${({ theme }) => defaultTextStyle(theme)}
  ${(props) => variants[props.variant](props.theme)}
  ${(props) => props.center ? 'text-align: center;' : ''}
`;

SText.defaultProps = {
  variant: 'body',
};
