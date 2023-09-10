import React, { FC } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import { MapScreen } from "../../screens/main/MapScreen";
import SettingsScreen from "../../screens/settings/SettingsScreen";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Routes } from "../../shared/constants";
import { RestaurantsNavigator } from "./RestaurantsNavigator";
import { MainAppProviders } from "../providedrs";
import { SettingsNavigator } from "./SettingsNavigator";


const Tab = createBottomTabNavigator<MainScreensParams>();

const tabBarIcons = {
  [Routes.RESTAURANTS]: "md-restaurant",
  [Routes.MAP]: "md-map",
  [Routes.SETTINGS]: "md-settings",
} as const;

type TabBarIconPropsType = { focused: boolean, color: string, size: number };

function getTabBarIcon(routeName: keyof typeof tabBarIcons, props: TabBarIconPropsType) {
  return (
    <Ionicons
      size={props.size}
      color={props.color}
      name={
        tabBarIcons[routeName]
      }
    />
  );
}


export const AppNavigator: FC = () => {
  return (
    <MainAppProviders>
      <Tab.Navigator
        screenOptions={(settings) => ({
          headerShown: false,
          tabBarIcon: (props) => getTabBarIcon(settings.route.name as keyof typeof tabBarIcons, props),
          tabBarActiveTintColor: "tomato",
          tabBarInactiveTintColor: "gray",
        })}
      >
        <Tab.Screen name={Routes.RESTAURANTS} component={RestaurantsNavigator} />
        <Tab.Screen name={Routes.MAP} component={MapScreen} />
        <Tab.Screen name={Routes.SETTINGS} component={SettingsNavigator} />
      </Tab.Navigator>
    </MainAppProviders>
  );
};
