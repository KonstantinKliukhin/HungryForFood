import { FC } from "react";
import { Routes } from "../../shared/constants";
import { RestaurantsScreen } from "../../screens/main/RestaurantsScreen";
import { createStackNavigator, TransitionPresets } from "@react-navigation/stack";
import { Platform } from "react-native";
import { MainScreensParamsType } from "../../screens/types";
import { RestaurantDetailsScreen } from "../../screens/main/RestaurantDetailsScreen";

const RestaurantsStack = createStackNavigator<MainScreensParamsType>();

const transitionPresets = Platform.select({
  ios: TransitionPresets.ModalPresentationIOS,
  android: TransitionPresets.RevealFromBottomAndroid
});

export const RestaurantsNavigator: FC = () => {
  return (
    <RestaurantsStack.Navigator screenOptions={() => ({
      headerShown: false,
      ...transitionPresets
    })}>
      <RestaurantsStack.Screen
        name={Routes.RESTAURANTS_LIST}
        component={RestaurantsScreen}
      />
      <RestaurantsStack.Screen
        name={Routes.RESTAURANTS_DETAILS}
        component={RestaurantDetailsScreen}
      />
    </RestaurantsStack.Navigator>
  );
};
