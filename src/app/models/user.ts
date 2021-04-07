export interface User {
    id?: number;
    username: string;
    password: string;
    firstame: string;
    lastname: string;
    birthdate: Date;
    favourite_films: number[];
    favourite_actors: number[];
    favourite_genres: number[];
    token: string;
    last_login: Date;

}