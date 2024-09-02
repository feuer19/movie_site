import React from "react";
import { usePopularMoviesQuery } from "../../../hooks/usePopularMovies";
import LoadingSpinner from "../../../common/LoadingSpinner/LoadingSpinner";
import Banner from "../../../common/Banner/Banner";
import ErrorMessage from "./../../../common/ErrorMessage";

const HomepageBanner = () => {
  const { isLoading, data, error, isError } = usePopularMoviesQuery();
  if (isLoading) {
    return <LoadingSpinner />;
  }
  if (isError) {
    return <ErrorMessage error={error} />;
  }
  return <Banner movie={data.results[0]} />;
};

export default HomepageBanner;
