export interface User {
    id?: number;
    username: string;
    password: string;
    firstname: string;
    lastname: string;
    birthdate: Date;
    favorite_films: number[];
    favourite_actors: number[];
    favourite_genres: number[];
    token: string;
    last_login: Date;

}