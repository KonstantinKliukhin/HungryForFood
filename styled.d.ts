import 'styled-components/native';

declare module 'styled-components/native' {
  export interface DefaultTheme {
    color: typeof import('./src/shared/styles/color').color;
    font: typeof import('./src/shared/styles/font').font;
    fontWeight: typeof import('./src/shared/styles/font').fontWeight;
    fontSize: typeof import('./src/shared/styles/font').fontSize;
    space: typeof import('./src/shared/styles/spacing').space;
    size: typeof import('./src/shared/styles/size').size;
    lineHeight: typeof import('./src/shared/styles/spacing').lineHeight;
  }
}
