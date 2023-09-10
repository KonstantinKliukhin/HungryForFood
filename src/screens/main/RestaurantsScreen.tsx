import React, { FC, useCallback, useState } from "react";
import { MainLayout } from "../../shared/ui";
import { RestaurantSearch } from "../../features/searchRestaurant";
import { RestaurantsList } from "../../widgets/RestaurantsList";
import { StackScreenProps } from "@react-navigation/stack";
import { Routes } from "../../shared/constants";
import { FavouritesListSmall } from "../../widgets/FavouritesListBig";

type RestaurantsScreenType = FC<StackScreenProps<MainScreensParams, Routes.RESTAURANTS_LIST>>

export const RestaurantsScreen: RestaurantsScreenType = () => {
  const [favouritesVisible, setFavouritesVisible] = useState<boolean>(false);
  const toggleFavouritesVisible = useCallback(() => setFavouritesVisible(prevState => !prevState), []);

  return (
    <MainLayout
      top={
        <RestaurantSearch
          icon={favouritesVisible ? "heart" : "heart-outline"}
          onIconPress={toggleFavouritesVisible}
        />
      }
      main={
        <>
          {favouritesVisible ? <FavouritesListSmall /> : null}
          <RestaurantsList fadeAnimation />
        </>
      }
    />

  );
};


