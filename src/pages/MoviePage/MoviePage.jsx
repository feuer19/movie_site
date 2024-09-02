import React, { useState, useEffect } from "react";
import { Container, Col, Row } from "react-bootstrap";
import { useSearchParams } from "react-router-dom";
import { useSearchMoviesQuery } from "../../hooks/useSearchMovies";
import SortBy from "./components/SortBy";
import ReactPaginate from "react-paginate";
import "./MoviePage.style.css";
import MovieCard from "./../../common/MovieCard/MovieCard";
import LoadingSpinner from "../../common/LoadingSpinner/LoadingSpinner";
import ErrorMessage from "../../common/ErrorMessage";

const MoviePage = () => {
  const [query, setQuery] = useSearchParams();
  const keyword = query.get("q");
  const [sort, setSort] = useState("");
  const [page, setPage] = useState(1);
  const [data, setData] = useState(null);
  const [genre, setGenre] = useState(null);
  const {
    isLoading,
    error,
    isError,
    data: searchData,
  } = useSearchMoviesQuery({
    keyword,
    page,
  });
  console.log(data);
  const handlePageClick = ({ selected }) => {
    setPage(selected + 1);
    setSort("");
    setGenre(null);
  };

  const sortMovie = () => {
    if (sort === "asc") {
      const sortedData = data.results.sort(
        (a, b) => a.popularity - b.popularity
      );
      setData({ ...data, results: sortedData });
      return;
    }
    const sortedData = data.results.sort((a, b) => b.popularity - a.popularity);
    setData({ ...data, results: sortedData });
  };
  const filterMovieByGenre = () => {
    const filteredData = data.results.filter((movie) => {
      return movie.genre_ids.includes(genre.id);
    });
    setData({ ...data, results: filteredData });
  };

  useEffect(() => {
    if (searchData) {
      setData(searchData);
    }
  }, [searchData]);

  useEffect(() => {
    if (sort !== "") {
      sortMovie();
    }
  }, [sort]);

  useEffect(() => {
    if (genre) {
      filterMovieByGenre();
    }
  }, [genre]);

  if (isLoading) {
    return <LoadingSpinner />;
  }
  if (isError) {
    return <ErrorMessage error={error} />;
  }
  return (
    <Container>
      <SortBy sort={sort} setSort={setSort} genre={genre} setGenre={setGenre} />
      {data?.results.length === 0 ? (
        <div>{keyword} 와 일치하는 영화가 없습니다.</div>
      ) : (
        <Row>
          {data?.results.map((movie, index) => (
            <Col lg={3} xs={6} key={index} className="movie-card-box">
              <MovieCard movie={movie} />
            </Col>
          ))}
        </Row>
      )}
      <div className="d-flex justify-content-center my-4">
        <ReactPaginate
          nextLabel=">"
          onPageChange={handlePageClick}
          pageRangeDisplayed={5}
          marginPagesDisplayed={5}
          pageCount={data?.total_pages > 50 ? 50 : data?.total_pages}
          previousLabel="<"
          pageClassName="r-page-item"
          pageLinkClassName="r-page-link"
          previousClassName="r-page-item"
          previousLinkClassName="r-page-link"
          nextClassName="r-page-item"
          nextLinkClassName="r-page-link"
          breakLabel="..."
          breakClassName="r-page-item"
          breakLinkClassName="r-page-link"
          containerClassName="pagination"
          activeClassName="active"
          renderOnZeroPageCount={null}
          forcePage={page - 1}
        />
      </div>
    </Container>
  );
};

export default MoviePage;
