import { FC } from "react";
import { CardStyleInterpolators, createStackNavigator } from "@react-navigation/stack";
import { Routes } from "../../shared/constants";
import { HomeScreen } from "../../screens/account/HomeScreen";
import { SignInScreen } from "../../screens/account/SignInScreen";
import { SignUpScreen } from "../../screens/account/SignUpScreen";


const Stack = createStackNavigator<AccountScreensParams>();

export const AccountNavigator: FC = () => (
  <Stack.Navigator
    initialRouteName={Routes.HOME}
    screenOptions={() => ({
      headerShown: false,
      cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS
    })}
  >
    <Stack.Screen name={Routes.HOME} component={HomeScreen}/>
    <Stack.Screen name={Routes.SIGN_IN} component={SignInScreen}/>
    <Stack.Screen name={Routes.SIGN_UP} component={SignUpScreen}/>
  </Stack.Navigator>
)
