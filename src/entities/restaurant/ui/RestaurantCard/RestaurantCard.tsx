import React, { ComponentProps, FC, memo, ReactNode } from "react";
import { Card } from "react-native-paper";
import { SvgXml } from "react-native-svg";
import openNowIcon from "../../../../../assets/openNow";
import { SText } from "../../../../shared/ui/Typography/Text";
import {
  SBottomText,
  SCardTextContent,
  SIcon,
  STitle,
  SUnderTitleContainer,
  SUnderTitleRight
} from "./RestaurantCardStyles";
import { Pressable, TouchableOpacity, ViewStyle } from "react-native";
import { SCardShadowContainer } from "../../../../shared/ui";

type PropsType = {
  title: string;
  text: string;
  image: Url;
  bottomText: string;
  underTitle?: ReactNode;
  icon?: string;
  temporaryClosed: boolean;
  isOpenNow: boolean;
  style?: ViewStyle;
  onCardClick?: () => void;
  cardTop?: ReactNode;
  elevation?: ComponentProps<typeof SCardShadowContainer>['elevation'];
};

export const RestaurantCard = memo<PropsType>(function Component(props) {
  return (
    <SCardShadowContainer style={props.style} elevation={props.elevation}>
      {props.cardTop}
      <Card.Cover source={{ uri: props.image }} />
      <SCardTextContent>
        <STitle>{props.title}</STitle>
        <SUnderTitleContainer>
          {props.underTitle}
          <SUnderTitleRight>
            {props.temporaryClosed ? (
              <SText variant="error">CLOSED TEMPORARY</SText>
            ) : null}
            {props.isOpenNow ? (
              <SvgXml xml={openNowIcon} width={15} height={15} />
            ) : null}
            {props.icon ? <SIcon source={{ uri: props.icon }} /> : null}
          </SUnderTitleRight>
        </SUnderTitleContainer>
        <SBottomText>{props.bottomText}</SBottomText>
      </SCardTextContent>
    </SCardShadowContainer>
  );
});
