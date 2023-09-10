import React, { FC } from "react";
import { StackScreenProps } from "@react-navigation/stack";
import { Routes } from "../../shared/constants";
import { SLayoutContainer, SSpacer } from "../../shared/ui";
import { FavouritesListBig } from "../../widgets/FavouritesListBig";
import { SText } from "../../shared/ui/Typography/Text";

type PropsType = StackScreenProps<MainScreensParams, Routes.FAVOURITES>


export const FavouritesScreen: FC<PropsType> = props => {
  return (
    <SLayoutContainer>
      <SSpacer size="lg" position="top"/>
      <SText center variant="label">Favourites</SText>
      <FavouritesListBig/>
    </SLayoutContainer>
  );
};
