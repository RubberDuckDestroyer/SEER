import React, { useContext } from 'react';
import {
  Box, Button, makeStyles, Container
} from "@material-ui/core";

import FilterContainer from "../components/FilterContainer";
import DateContainer from "../components/DateContainer";
import SearchResultContainer from "../components/SearchResultContainer";
import AppContext from "../AppContext";
import SearchResultBloc from "../bloc/SearchResultBloc";
import LoaderBloc from "../bloc/LoaderBloc";
import SearchBloc from "../bloc/SearchBloc";
import ConditionContainer from "../components/ConditionContainer";

const useStyle = makeStyles(() => ({
  searchContainer: {
    display: "flex",
    justifyContent: "center"
  },
  searchButton: {
    width: 300
  }
}));

const SearchView = () => {

  const searchBloc = useContext(AppContext).getBloc(SearchBloc);
  const searchResultBloc = useContext(AppContext).getBloc(SearchResultBloc);
  const loaderBloc = useContext(AppContext).getBloc(LoaderBloc);

  const classes = useStyle();

  const onSearchButton = async () => {
    loaderBloc.show();
    await searchResultBloc.requestResults();
    loaderBloc.hide();
  };

  return (
    <Container>
      <FilterContainer
        style={{
          backgroundColor: "#f88",
        }}
        searchFilter={searchBloc.filters.getValue()[0]}
      />
      <Box m={3} />
      <ConditionContainer 
        style={{
          backgroundColor: "#abc",
        }}
      />
      <Box m={3} />
      <DateContainer style={{
        backgroundColor: "#8f8",
        padding: "10px"
      }} />
      <Box m={2} />
      <Box className={classes.searchContainer}>
        <Button className={classes.searchButton} onClick={onSearchButton} color="primary" variant="contained">Search</Button>
      </Box>
      <Box m={2} />
      <SearchResultContainer />
    </Container>
  );
};
export default SearchView;
