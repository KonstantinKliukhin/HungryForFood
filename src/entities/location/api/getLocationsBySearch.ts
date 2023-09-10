import { locations } from '../../../shared/api/mocks/location/locationMock';
import { GetLocationsApiResponseType } from './types';
import { jsonToLocation } from '../lib';
import { Location } from '../model/Location';
import { wait } from '../../../shared/lib';

export const getLocationsBySearch = async (
  search: string,
): Promise<Location[]> => {
  if (!(search in locations)) {
    throw new Error('Not found');
  }


  const res: GetLocationsApiResponseType = locations[
    search as keyof typeof locations
  ] as unknown as GetLocationsApiResponseType;

  await wait(1000);

    return res.results.map(res => jsonToLocation(res.geometry));
};
