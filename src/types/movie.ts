export type MovieInfoType = {
    title: string;
    poster_path: string;
    backdrop_path:string
    vote_average: number;
    release_date:string
    overview: string;
    runtime: number;
    genres: { name: string }[];
}