import React, { FC, PropsWithChildren } from "react";
import styled from "styled-components/native";
import { SSpacer } from "../../utility/Spacer";
import { Platform, StatusBar as RNStatusBar, Text } from "react-native";
import LottieView from 'lottie-react-native';

export const AccountLayout: FC<PropsWithChildren> = props => {
  return (
    <SBackground source={require("../../../../../assets/home_bg.jpg")}>
      <SImageCover />
      <SAnimationWrapper>
        <LottieView
          key="animation"
          autoPlay
          loop
          resizeMode="cover"
          source={require("../../../../../assets/watermelon.json")}
        />
      </SAnimationWrapper>
      <SContainer>
        <STitle>Hungry for meal ?</STitle>
        <SSpacer size="md" position="bottom" />
        {props.children}
      </SContainer>
    </SBackground>
  );
};

const STitle = styled(Text)`
  font-size: 30px;
`;

const SBackground = styled.ImageBackground`
  width: 100%;
  height: 100%;
  flex: 1;
`;

const SContainer = styled.SafeAreaView`
  height: 100%;
  margin-top: ${Platform.select({ios: 0, android: RNStatusBar.currentHeight})}px;
  padding-top: 100px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const SImageCover = styled.View`
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: rgba(255, 255, 255, 0.3);
`;

const SAnimationWrapper = styled.View`
  width: 100%;
  height: 40%;
  position: absolute;
  top: ${props => props.theme.space[4]};
`
