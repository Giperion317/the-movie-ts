import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"

import { fetchMovieCast } from "../services/moviesApi"

export const CastPage: React.FC = () => {
    const [cast, setCast ]  = useState <{name:string, profile_path:string, id:number}[]> ([]);
    const { movieId } = useParams();

    useEffect(() => {
         fetchMovieCast(movieId).then(setCast)},[movieId, setCast])
    
    return (
            <ul>
            {cast && cast.map(({ name, profile_path, id }) => (
                <li key={id}>
                    <img src={'https://image.tmdb.org/t/p/original' + profile_path} alt={name} width='100' />
                    <p>{name}</p>
          </li>
      )) }
    </ul>
    )
 }