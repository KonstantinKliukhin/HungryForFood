import React, { FC } from "react";
import { CardStyleInterpolators, createStackNavigator } from "@react-navigation/stack";
import { MainScreensParamsType } from "../../screens/types";
import { Routes } from "../../shared/constants";
import SettingsScreen from "../../screens/settings/SettingsScreen";
import { FavouritesScreen } from "../../screens/settings/FavouritesScreen";


const SettingsStack = createStackNavigator<MainScreensParamsType>();

export const SettingsNavigator: FC = () => {

  return (
    <SettingsStack.Navigator
      screenOptions={() => ({
        headerShown: false,
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS
      })}
    >
      <SettingsStack.Screen name={Routes.SETINGS_MAIN} component={SettingsScreen}/>
      <SettingsStack.Screen name={Routes.FAVOURITES} component={FavouritesScreen}/>
    </SettingsStack.Navigator>
  );
};
