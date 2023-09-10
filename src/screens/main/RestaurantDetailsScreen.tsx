import React, { FC, useState } from "react";
import { FadeInView, SLayoutContainer } from "../../shared/ui";
import { StackScreenProps } from "@react-navigation/stack";
import { Routes } from "../../shared/constants";
import { RestaurantCard } from "../../entities/restaurant";
import { StarsList } from "../../entities/restaurant/ui/StarsList";
import { List } from "react-native-paper";
import { ToggleFavouriteButton } from "../../features/toggleFavourites";
import styled from "styled-components/native";
import ExpoStatusBar from "expo-status-bar/build/ExpoStatusBar";
import { theme } from "../../shared/styles";

type RestaurantsScreenType = FC<StackScreenProps<MainScreensParams, Routes.RESTAURANTS_DETAILS>>

export const RestaurantDetailsScreen: RestaurantsScreenType = props => {
  const restaurant = props.route.params.restaurant;
  const [breakfastExpanded, setBreakfastExpanded] = useState<boolean>(false);
  const [lunchExpanded, setLunchExpanded] = useState<boolean>(false);
  const [dinnerExpanded, setDinnerExpanded] = useState<boolean>(false);
  const [drinksExpanded, setDrinksExpanded] = useState<boolean>(false);

  return (
    <>
      <ExpoStatusBar backgroundColor={theme.color.bg.primary} />
      <SLayoutContainer>
        <FadeInView>
          <SRestaurantsCard
            cardTop={<ToggleFavouriteButton restaurant={restaurant} />}
            text={restaurant.address}
            image={restaurant.photos[0]}
            title={restaurant.name}
            bottomText={restaurant.address}
            underTitle={<StarsList starsCount={restaurant.rating || 0} />}
            icon={restaurant.icon}
            temporaryClosed={restaurant.isClosedTemporarily}
            isOpenNow={restaurant.isOpenNow}
          />
        </FadeInView>
        <SScrollView>
          <List.Section>
            <SAccordionList
              title="Breakfast"
              left={props => <List.Icon {...props} icon="bread-slice" />}
              expanded={breakfastExpanded}
              onPress={() => setBreakfastExpanded((expanded) => !expanded)}
              style={{ backgroundColor: "#fff" }}
            >
              <List.Item title="Eggs Benedict" />
              <List.Item title="Classic Breakfast" />
            </SAccordionList>

            <SAccordionList
              title="Lunch"
              left={props => <List.Icon {...props} icon="hamburger" />}
              onPress={() => setLunchExpanded((expanded) => !expanded)}
              expanded={lunchExpanded}
            >
              <List.Item title="Burger w/ Fries" />
              <List.Item title="Steak Sandwich" />
              <List.Item title="Mushroom Soup" />
            </SAccordionList>

            <SAccordionList
              title="Dinner"
              left={props => <List.Icon {...props} icon="food" />}
              onPress={() => setDinnerExpanded((expanded) => !expanded)}
              expanded={dinnerExpanded}
            >
              <List.Item title="Spaghetti Bolognese" />
              <List.Item title="Veal Cutlet with Chicken Mushroom Rotini" />
              <List.Item title="Steak Frites" />
            </SAccordionList>

            <SAccordionList
              title="Drinks"
              left={props => <List.Icon {...props} icon="cup" />}
              onPress={() => setDrinksExpanded((expanded) => !expanded)}
              expanded={drinksExpanded}
            >
              <List.Item title="Coffee" />
              <List.Item title="Tea" />
              <List.Item title="Modelo" />
              <List.Item title="Coke" />
              <List.Item title="Fanta" />
            </SAccordionList>
          </List.Section>
        </SScrollView>
      </SLayoutContainer>
    </>
  );
};

const SAccordionList = styled(List.Accordion)`
  background-color: ${props => props.theme.color.bg.primary};
`;

const SScrollView = styled.ScrollView`
  background-color: ${props => props.theme.color.bg.primary};
`;

const SRestaurantsCard = styled(RestaurantCard).attrs({ elevation: 0 })`
  border-radius: 0;
  box-shadow: none;
`;
