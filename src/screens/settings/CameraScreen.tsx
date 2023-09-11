import { StackScreenProps } from "@react-navigation/stack";
import { Routes } from "../../shared/constants";
import React, { FC } from "react";
import { Camera } from "expo-camera";
import styled from "styled-components/native";


type PropsType = StackScreenProps<MainScreensParams, Routes.CAMERA>


export const CameraScreen: FC<PropsType> = props => {
  const [permission, requestPermission] = Camera.useCameraPermissions();
  return (
    <SCamera>

    </SCamera>
  );
};

const SCamera = styled(Camera)`
  flex: 1
`;
