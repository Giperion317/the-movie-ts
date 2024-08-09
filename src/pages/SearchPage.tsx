import { useState, useEffect } from "react"
import { useSearchParams } from "react-router-dom"

import { fetchMoviesSearch } from "../services/moviesApi"

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

    const submitHandler = (e: React.FormEvent) => {
        e.preventDefault();
         setSearchParams()
        
    }

    return (
        <>
            <form onSubmit={submitHandler}>
                <input type='text' name='query' />
                <button type="submit">Search</button>
            </form>
        </>
    )
}