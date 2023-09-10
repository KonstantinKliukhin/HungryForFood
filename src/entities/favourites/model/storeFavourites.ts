import { Restaurant } from "../../restaurant";
import { useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useUserState } from "../@x/user";

const FAVOURITES_KEY_PREFIX = "FAVOURITES_KEY";

const saveFavourites = async (favourites: Restaurant[], key: string) => {
  try {
    await AsyncStorage.setItem(key, JSON.stringify(favourites))
  } catch (e) {
    console.trace(e)
    console.error(e);
  }
}

const getInitialFavourites = async (key: string): Promise<Restaurant[]> => {
  try {
    const json = await AsyncStorage.getItem(key)
    if (!json) return [];
    return JSON.parse(json);
  } catch (e) {
    console.trace(e)
    console.error(e);
    return [];
  }
}

export const useStoreFavourites = (favourites: Restaurant[], setFavourites: (favourites: Restaurant[]) => void) => {
  const userId = useUserState().user?.id;
  const key = `${FAVOURITES_KEY_PREFIX}_${userId}`

  useEffect(() => {
    if (!userId) return;
    getInitialFavourites(key).then(setFavourites);
  }, [userId]);

  useEffect(() => {
    if (!userId) return;
    saveFavourites(favourites, key);
  }, [favourites, userId]);
}
