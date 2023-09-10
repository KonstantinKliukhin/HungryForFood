import { FC, useContext } from "react";
import { Marker } from "react-native-maps";
import styled from "styled-components/native";
import { StatusBar as RNStatusBar } from "react-native";
import { MapRestaurantSearch } from "../../features/searchRestaurant";
import { RestaurantsContext } from "../../entities/restaurant";
import { MapCallout } from "../../features/map";
import { BottomTabScreenProps } from "@react-navigation/bottom-tabs";
import { Routes } from "../../shared/constants";
import { coordinatesToMapLatLng, Map } from "../../features/map";

export const MapScreen: FC<BottomTabScreenProps<MainScreensParams, Routes.MAP>> = props => {
  const restaurantsContext = useContext(RestaurantsContext);

  return (
    <>
      <SSearchContainer>
        <MapRestaurantSearch />
      </SSearchContainer>
      <Map>
        {restaurantsContext.restaurants.map((restaurant) => {
          return <Marker
            key={restaurant.id}
            coordinate={coordinatesToMapLatLng(restaurant.coordinates)}
          >
            <MapCallout
              onPress={() => props.navigation.navigate(Routes.RESTAURANTS_DETAILS, { restaurant })}
              restaurant={restaurant}
            />
          </Marker>;
        })}
      </Map>
    </>
  );
};

const SSearchContainer = styled.View`
  padding: ${(props) => props.theme.space[3]};
  width: 90%;
  left: 5%;
  position: absolute;
  z-index: 999;
  top: ${(RNStatusBar.currentHeight ?? 0)}px;;
`;
