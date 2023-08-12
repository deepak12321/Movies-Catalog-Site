import React from 'react'
import '../style/universal.css';
import '../style/navbar.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <>
            <header className="main-header flex">
                <div className="sub-header">
                    <div className="nav-link-div center">
                        <p className='logo center'><span className='icon'>🍿</span>MoviesHub</p>

                        <div className="nav-list center">
                            <Link className="nav-link" to="/">Dab Dab</Link>
                            <Link className="nav-link" to="/movie">Movies</Link>
                        </div>

                    </div>
                </div>
            </header>
        </>
    )
}

export default Navbar