import { useState, useEffect } from "react"
import { useSearchParams } from "react-router-dom"

import { fetchMoviesSearch } from "../services/moviesApi"

import { SearchForm } from "../components/SearchForm/SearchForm"
import { Movies } from "../components/Movies/Movies"

import { MoviesType } from "../types/movies"

export const SearchPage: React.FC = () => {
    const [movies, setMovies] = useState<MoviesType[]>([])
    const [searchParams, setSearchParams] = useSearchParams()

    const query = searchParams.get('query')

    useEffect(() => {
        if (!query) return;
    fetchMoviesSearch(query).then((data) => {
      if (!data.length) {
          alert('Something went wrong, try again!');
        }
      setMovies(data)
    })
    }, [query])

 const onSearchQuery = (searchQuery:string) => {
    setSearchParams({ query: searchQuery });
  };

    return (
        <>
    <SearchForm onSubmit={onSearchQuery} />
    {/* {movies && <Movies movies={ movies} />} */}
        </>
    )
}