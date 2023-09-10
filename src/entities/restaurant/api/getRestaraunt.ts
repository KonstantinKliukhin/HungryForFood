import { mocks } from '../../../shared/api';
import { GetRestaurantsApiResponseType } from './types';
import { jsonToRestaurant } from '../lib';
import { Restaurant } from '../model';
import { wait } from '../../../shared/lib';
import { Coordinates } from "../@x/location";

type MocksKeyType = keyof typeof mocks;

export const getRestaurants = async (
  location: string | Coordinates = '37.7749295,-122.4194155',
): Promise<Restaurant[]> => {
  let searchString: string;
  if (location instanceof Coordinates) searchString = `${location.lat},${location.lng}`;
  else searchString = location;

  if (!(searchString in mocks)) {
    throw new Error('Not found');
  }

  const res = mocks[
    searchString as MocksKeyType
  ] as unknown as GetRestaurantsApiResponseType;

  await wait(1000);

  return res.results.map(jsonToRestaurant);
};
