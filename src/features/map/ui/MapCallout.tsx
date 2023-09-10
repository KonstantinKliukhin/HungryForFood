import React, { FC } from "react";
import { Callout } from "react-native-maps";
import { CompactRestaurantInfo, Restaurant } from "../../../entities/restaurant";
import { Platform } from "react-native";
import styled from "styled-components/native";

type PropsType = {
  restaurant: Restaurant;
  onPress: () => void;
}

export const MapCallout: FC<PropsType> = props => {
  return (
    <SCallout onPress={props.onPress}>
      <CompactRestaurantInfo imageType={Platform.select({android: "web", ios:"image"})} restaurant={props.restaurant} />
    </SCallout>
  );
};

const SCallout = styled(Callout)`
  background-color: ${props => props.theme.color.bg.primary};
`
