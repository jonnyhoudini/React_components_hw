import React from "react";

const FilmItem = ({ film }) => {
    return (
        <li><a href={film.url}>{film.name}</a></li>
    )
}

export default FilmItem