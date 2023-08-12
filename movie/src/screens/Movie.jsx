import React, { useContext } from 'react';
import Navbar from '../components/Navbar';
import Card from "../components/Card";
import "../style/movies.css";
import { AppContext } from '../components/FetchData';

const Movie = () => {
    const data = useContext(AppContext);
    console.log("the data is ", data);
    console.log(data.search);
    const update = (event) => {
        data.setSearch(event.target.value);
    }

    return (
        <>
            <Navbar />
            <input type="text" name="moviename" id="" placeholder='Search Movie' className='search-box' onChange={update} value={data.search} />

            <div className="content-area-movie center">
                {
                    data.movie != undefined ?
                        data.movie.map((movie) => {
                            let imdb = movie.imdbID;
                            return <Card Poster={movie.Poster} key={imdb} id={imdb} />
                        }) : <h1 className="err">No Movie found!</h1>
                }
            </div>
        </>
    )
}

export default Movie