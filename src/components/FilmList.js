import React from "react";
import FilmItem from "./FilmItem";

const FilmList = ({ films }) => {

    const filmNodes = films.map((film) => {
        return (
            <FilmItem film={film} key={film.id} />
        )
    })
    return (
        <>
            <ul>
                {filmNodes}
            </ul>
        </>
    )
}

export default FilmList;