import Routes from "../shared/constants/Routes";
import { Restaurant } from "../entities/restaurant";

export type MainScreensParamsType = {
  [Routes.RESTAURANTS]: undefined;
  [Routes.RESTAURANTS_LIST]: undefined;
  [Routes.RESTAURANTS_DETAILS]: {restaurant: Restaurant};
  [Routes.MAP]: undefined;
  [Routes.SETTINGS]: undefined;
  [Routes.CAMERA]: undefined;
  [Routes.FAVOURITES]: undefined;
  [Routes.SETINGS_MAIN]: undefined;
};

export type AccountScreensParamsType = {
  [Routes.SIGN_IN]: undefined;
  [Routes.HOME]: undefined;
  [Routes.SIGN_UP]: undefined;
}
