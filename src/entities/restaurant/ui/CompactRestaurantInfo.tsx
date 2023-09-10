import React, { FC, ReactNode } from "react";
import { SText } from "../../../shared/ui/Typography/Text";
import styled from "styled-components/native";
import WebView from "react-native-webview";
import { Restaurant } from "../model";
import { SSpacer } from "../../../shared/ui";

type PropsType = {
  restaurant: Restaurant;
  imageType?: "web" | "image"
}

export const CompactRestaurantInfo: FC<PropsType> = props => {

  const renderImage = (): ReactNode => {
    if (!props.restaurant.photos.length) return null;

    if (props.imageType === "web") return <SWebImage source={{ uri: props.restaurant.photos[0] }} />;
    if (props.imageType === "image") return <SImage source={{ uri: props.restaurant.photos[0] }} />;

    return <SImage source={{ uri: props.restaurant.photos[0] }} />
  };

  return (
    <SContainer>
      <SSpacer size="sm" position="bottom">
        {renderImage()}
      </SSpacer>
      <SText variant="caption" center numberOfLines={3}>{props.restaurant.name}</SText>
    </SContainer>
  );
};

const SContainer = styled.View`
  padding: ${props => props.theme.space[2]};
  max-width: 120px;
`;

const SImage = styled.Image`
  border-radius: 10px;
  width: 100%;
  aspect-ratio: 1;
`;

const SWebImage = styled(WebView)`
  border-radius: 10px;
  width: 100%;
  aspect-ratio: 1;
`;
