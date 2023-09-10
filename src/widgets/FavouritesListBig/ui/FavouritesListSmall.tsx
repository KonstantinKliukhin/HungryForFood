import React, { FC } from "react";
import { ScrollView, TouchableOpacity } from "react-native";
import styled from "styled-components/native";
import { useFavourites } from "../../../entities/favourites";
import { SSpacer } from "../../../shared/ui";
import { CompactRestaurantInfo } from "../../../entities/restaurant";
import { Routes } from "../../../shared/constants";
import { useNavigate } from "../../../shared/lib/useNavigate";
import { SText } from "../../../shared/ui/Typography/Text";

type PropsType = {};

export const FavouritesListSmall: FC<PropsType> = props => {
  const { favourites } = useFavourites();
  const navigate = useNavigate();

  return (
    <SContainer>
      <SSpacer size="lg" position="left">
        <SText variant="caption">Favourites</SText>
      </SSpacer>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {favourites.map((restaurant) => (

          <SSpacer key={restaurant.id} size="md" position="right">
            <TouchableOpacity
              onPress={() => navigate(Routes.RESTAURANTS_DETAILS, { restaurant: restaurant })}>
              <CompactRestaurantInfo restaurant={restaurant} />
            </TouchableOpacity>
          </SSpacer>
        ))}
      </ScrollView>
    </SContainer>
  );
};

const SContainer = styled.View`
  padding: 10px;
`;
