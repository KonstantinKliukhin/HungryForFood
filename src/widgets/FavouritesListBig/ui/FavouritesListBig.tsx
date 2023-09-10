import React, { FC, useCallback } from "react";
import { Restaurant, RestaurantCard } from "../../../entities/restaurant";
import { useNavigate } from "../../../shared/lib/useNavigate";
import { Routes } from "../../../shared/constants";
import { SSpacer } from "../../../shared/ui";
import { TouchableOpacity } from "react-native";
import { ToggleFavouriteButton } from "../../../features/toggleFavourites";
import { StarsList } from "../../../entities/restaurant/ui/StarsList";
import styled from "styled-components/native";
import { useFavourites } from "../../../entities/favourites";
import { SText } from "../../../shared/ui/Typography/Text";

export const FavouritesListBig: FC = () => {
  const favouritesState = useFavourites();
  const navigate = useNavigate();
  const onCardClick = useCallback((restaurant: Restaurant) => navigate(Routes.RESTAURANTS_DETAILS, { restaurant }), []);

  if (!favouritesState.favourites.length) return EmptyState;

  return (
    <SRestaurantList
      data={favouritesState.favourites}
      renderItem={(item) => {
        const restaurant = item.item as Restaurant;
        return (
          <SSpacer key={restaurant.id} size="lg" position="bottom">
            <TouchableOpacity activeOpacity={0.8} onPress={() => onCardClick(restaurant)}>
              <RestaurantCard
                cardTop={<ToggleFavouriteButton restaurant={restaurant} />}
                onCardClick={() => onCardClick(restaurant)}
                text={restaurant.address}
                image={restaurant.photos[0]}
                title={restaurant.name}
                bottomText={restaurant.address}
                underTitle={<StarsList starsCount={restaurant.rating || 0} />}
                icon={restaurant.icon}
                temporaryClosed={restaurant.isClosedTemporarily}
                isOpenNow={restaurant.isOpenNow}
              />
            </TouchableOpacity>
          </SSpacer>
        );
      }}
    />
  );
};

const SEmptyContainer = styled.View`
  justify-content: center;
  align-items: center;
  height: 20%;
`;

const EmptyState = (
  <SEmptyContainer>
    <SText center variant="label">No favourites yet</SText>
  </SEmptyContainer>
);


const SRestaurantList = styled.FlatList.attrs({
  contentContainerStyle: {
    padding: 16,
  },
})``;
