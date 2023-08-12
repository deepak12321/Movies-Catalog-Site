import React, { useState, useEffect } from 'react';
// import { useLocation } from 'react-router-dom';
import Navbar from '../components/Navbar';
import "../style/desc.css";
import { Link, useParams } from 'react-router-dom';
import Loader from '../components/Loader';
import Accordian from '../components/Accordian';

const Desc = () => {

    const [loading, setLoading] = useState(null);
    const data = useParams();
    // console.log("justuce road + ", data);


    const [info, setInfo] = useState([]);

    const fetchURL = async () => {
        try {
            const api = 'http://www.omdbapi.com/?apikey=77cc3623&i=';
            const res = await fetch(`${api}${data.id}`);
            const information = await res.json();
            // console.log(information);
            setInfo(information);
            setLoading(information);  // set to information
            // console.log(info);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        fetchURL();
    }, []);

    return <>
        {
            loading == null ? <Loader /> : <>
                <Navbar />
                <div className="cross">
                    <Link to="/movie" className='cross-span'>
                        <span >Ⅹ</span>
                    </Link>
                </div>
                <div className="desc-main-div">
                    <div className="desc-sub-div">
                        <div className="img-name-div flex">
                            <img src={info.Poster} alt="movie-img-desc" className='poster-img-desc' />
                            <span className="name ">
                                <h1 className='movie-name'>{info.Title}</h1>
                                <div className='flex'><span className='p-div' >Year  </span>{info.Year} </div>
                                <div className='flex'><span className='p-div' >Rated </span> {info.Rated}</div>
                                <div className='flex'><span className='p-div' >Runtime  </span>{info.Runtime}</div>
                                <div className='flex'><span className='p-div' >Release Date  </span>{info.Released}</div>
                                <div className='flex'><span className='p-div' >Genere  </span>{info.Genre}</div>
                                <div className='flex'><span className='p-div' >Director </span> {info.Director}</div>
                                <div className='flex'><span className='p-div' >Writer </span> {info.Writer}</div>
                                <div className='flex'><span className='p-div' >Cast  </span>{info.Actors}</div>
                                <div className='flex'><span className='p-div' >BoxOffice </span> {info.BoxOffice}</div>
                                <div className='flex'><span className='p-div' >Type  </span>{info.Type}</div>
                                <div className='flex'><span className='p-div' >Imdb Rating </span> {info.imdbRating}</div>
                                <div className='flex'><span className='p-div' >Imdb Votes </span> {info.imdbVotes}</div>
                                {/* <a href="" className='more-detail' target='_blank'>More Details</a> */}
                            </span>
                        </div>
                        <div className="plot-div">
                            <p className='plot-p'>Movie Plot</p>
                            <h4 className="movie-plot">{info.Plot}</h4>
                        </div>
                        <div className="award-div">
                            <p className='plot-p'>Awards</p>
                            <h4 className='movie-plot'>{info.Awards}</h4>
                            {/* {console.log(info.Ratings)} */}

                        </div>
                        <Accordian data={info.Ratings} name="Ratings" />


                    </div>
                </div>
            </>
        }

    </>
}

export default Desc