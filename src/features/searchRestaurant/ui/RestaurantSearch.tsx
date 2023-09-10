import React, { ComponentProps, FC } from "react";
import styled from "styled-components/native";
import { Searchbar } from "react-native-paper";
import { useRestaurantsSearchLoading, useSearchRestaurant } from "../model";
import { useRestaurantsSearchState } from "../model/restaurantsSearchState";

type PropsType = Pick<ComponentProps<typeof Searchbar>, 'icon' | 'onIconPress' | 'style'>;

export const RestaurantSearch: FC<PropsType> = props => {
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
      {...props}
      placeholder="Search..."
      loading={loading}
      value={search}
      onClearIconPress={handleClear}
      onChangeText={setSearch}
      onSubmitEditing={handleSearchSubmit}
      elevation={1}
    />
  );
};

const SSearchBar = styled(Searchbar).attrs({
  inputStyle: {
    maxHeight: "100%",
    minWidth: '100%',
    flex: 1,
  },
  style: {
    minWidth: '100%',
    flex: 1,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.18,
    shadowRadius: 1.00,
  }

})`
  background-color: ${(props) => props.theme.color.bg.primary};
`;
