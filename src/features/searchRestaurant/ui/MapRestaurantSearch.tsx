import React, { FC } from "react";
import styled from "styled-components/native";
import { Searchbar } from "react-native-paper";
import { useRestaurantsSearchLoading, useSearchRestaurant } from "../model";
import { useRestaurantsSearchState } from "../model/restaurantsSearchState";

export const MapRestaurantSearch: FC = () => {
  const loading = useRestaurantsSearchLoading();
  const [search, setSearch] = useRestaurantsSearchState();
  const searchRestaurant = useSearchRestaurant();

  const handleSearchSubmit = () => searchRestaurant(search);

  const handleClear = () => {
    setSearch("");
    searchRestaurant("");
  };

  return (
    <SSearchBar
      icon="map"
      placeholder="Search..."
      mode="view"
      loading={loading}
      value={search}
      onChangeText={setSearch}
      onSubmitEditing={handleSearchSubmit}
      onIconPress={handleSearchSubmit}
      onClearIconPress={handleClear}
    />
  );
};

const SSearchBar = styled(Searchbar).attrs({
  inputStyle: {
    width: "100%",
    minHeight: 40
  }
})`
  background-color: ${(props) => props.theme.color.bg.primary};
  width: 100%;
  border-radius: 10px;
`;
