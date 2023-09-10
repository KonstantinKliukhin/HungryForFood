import React, { FC, PropsWithChildren } from "react";
import { LocationProvider } from "../../entities/location";
import { FavouritesProvider } from "../../entities/favourites";
import { RestaurantProvider } from "../../entities/restaurant";

export const MainAppProviders: FC<PropsWithChildren> = props => {
  return (
    <FavouritesProvider>
      <LocationProvider>
        <RestaurantProvider>
          {props.children}
        </RestaurantProvider>
      </LocationProvider>
    </FavouritesProvider>
  );
};
