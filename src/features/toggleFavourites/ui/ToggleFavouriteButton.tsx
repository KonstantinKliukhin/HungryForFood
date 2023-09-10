import { FC } from "react";
import styled from "styled-components/native";
import { TouchableOpacity } from "react-native";
import { useToggleFavourites } from "../model";
import { Restaurant } from "../../../entities/restaurant";
import { AntDesign } from "@expo/vector-icons";

type PropsType = {
  restaurant: Restaurant;
}

export const ToggleFavouriteButton: FC<PropsType> = props => {
  const {isFavourite, toggleFavourite} = useToggleFavourites(props.restaurant);

  return (
    <SButton onPress={() => toggleFavourite(props.restaurant)}>
      <AntDesign name={isFavourite ? "heart" : "hearto"} size={24} color={isFavourite ? "red" : "white"} />
    </SButton>
  );
};

const SButton = styled(TouchableOpacity)`
  position: absolute;
  top: 10px;
  right: 10px;
  z-index: 9;
`;
