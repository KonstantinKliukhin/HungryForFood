import React, { FC, PropsWithChildren, useEffect, useRef } from "react";
import { Animated, ViewStyle } from "react-native";

type PropsType = {
  duration?: number
  style?: ViewStyle,
} & PropsWithChildren;

export const FadeInView: FC<PropsType> = props => {
  const fadeAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: props.duration || 1500,
      useNativeDriver: true,
    }).start();
  }, [fadeAnim, props.duration])

  return (
    <Animated.View style={{ ...props.style, opacity: fadeAnim }}>
      {props.children}
    </Animated.View>
  );
};
