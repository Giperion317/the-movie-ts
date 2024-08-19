import { useState, useEffect } from "react"
import { useSearchParams } from "react-router-dom"

import { fetchMoviesSearch } from "../services/moviesApi"

import { MoviesType } from "../types/movies"

import { SearchEngine } from "../components/SearchEngine/SearchEngine"

export const SearchPage: React.FC = () => {
    return <SearchEngine/>
 
}