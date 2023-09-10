import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { ParamListBase } from "@react-navigation/routers/src/types";

export const useNavigate = <T extends ParamListBase = MainScreensParams>() =>
  useNavigation<StackNavigationProp<T>>().navigate
