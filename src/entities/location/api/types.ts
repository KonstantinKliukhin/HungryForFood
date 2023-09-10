export type ApiLocationType = {
  location: ApiCoordinatesType;
  viewport: ApiViewportType;
};

export type ApiCoordinatesType = {
  lat: number;
  lng: number;
};

export type ApiViewportType = {
  northeast: ApiCoordinatesType;
  southwest: ApiCoordinatesType;
};

export type GetLocationsApiResponseType = { results: { geometry: ApiLocationType }[] };
