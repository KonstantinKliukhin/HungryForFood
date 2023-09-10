import React, { FC, PropsWithChildren } from "react";
import { useFonts as useOswald } from "@expo-google-fonts/oswald/useFonts";
import { Oswald_400Regular } from "@expo-google-fonts/oswald";
import { useFonts as useLato } from "@expo-google-fonts/lato/useFonts";
import { Lato_400Regular } from "@expo-google-fonts/lato";

export const FontsLoader: FC<PropsWithChildren> = props => {
  const [oswaldLoaded] = useOswald({
    Oswald_400Regular,
  });

  const [latoLoaded] = useLato({
    Lato_400Regular,
  });

  if (!oswaldLoaded || !latoLoaded) return null;

  return <>{props.children}</>;
};
