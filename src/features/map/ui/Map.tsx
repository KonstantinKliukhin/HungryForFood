import React, { FC, PropsWithChildren } from "react";
import styled from "styled-components/native";
import MapView from "react-native-maps";
import { useMapRegion } from "../model";

type PropsType = PropsWithChildren;

export const Map: FC<PropsType> = props => {
  const region = useMapRegion();

  return (
    <SMapView region={region}>
      {props.children}
    </SMapView>
  );
};

const SMapView = styled(MapView)`
  height: 100%;
`;
