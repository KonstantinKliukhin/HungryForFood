import React, { FC, PropsWithChildren, useCallback, useContext } from "react";
import { Restaurant, RestaurantCard, RestaurantsContext } from "../../../../entities/restaurant";
import { LocationContext } from "../../../../entities/location";
import { EmptyWrapper, FadeInView, SSpacer } from "../../../../shared/ui";
import { StarsList } from "../../../../entities/restaurant/ui/StarsList";
import styled from "styled-components/native";
import { ActivityIndicator, MD2Colors } from "react-native-paper";
import { ToggleFavouriteButton } from "../../../../features/toggleFavourites";
import { Routes } from "../../../../shared/constants";
import { useNavigate } from "../../../../shared/lib/useNavigate";
import { TouchableOpacity } from "react-native";

type PropsType = {
  fadeAnimation?: boolean;
}

export const RestaurantsList: FC<PropsType> = props => {
  const restaurantsContext = useContext(RestaurantsContext);
  const locationContext = useContext(LocationContext);
  const navigate = useNavigate();
  const onCardClick = useCallback((restaurant: Restaurant) => navigate(Routes.RESTAURANTS_DETAILS, { restaurant }), []);

  const loading = restaurantsContext.loading || locationContext.loading;
  const Wrapper = props.fadeAnimation && !loading ? FadeInView : EmptyWrapper;

  const restaurantsList = (
    <SRestaurantList
      data={restaurantsContext.restaurants}
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

  return loading ? restaurantsLoading : <Wrapper>{restaurantsList}</Wrapper>;
};


const SRestaurantList = styled.FlatList.attrs({
  contentContainerStyle: {
    padding: 16,
  },
})``;

const SLoadingWrapper = styled.View`
  justify-content: center;
  align-items: center;
  height: 100%;
`;

const restaurantsLoading = (
  <SLoadingWrapper>
    <ActivityIndicator color={MD2Colors.red200} size="large" />
  </SLoadingWrapper>
);
