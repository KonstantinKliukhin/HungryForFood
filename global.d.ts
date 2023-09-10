
type Url = string;

type StyledProps<T> = { theme: typeof import("./src/shared/styles").theme } & T;

type ID = string | number;

type MainScreensParams = import('./src/screens/types').MainScreensParamsType;
type AccountScreensParams = import('./src/screens/types').AccountScreensParamsType;

