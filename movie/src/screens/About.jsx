import React from 'react'
import Details from '../components/Details';
import Navbar from '../components/Navbar'
import "../style/about.css";

const About = () => {
  return (
    <>
      <Navbar />
      {/* <Desc /> */}
      <div className="intro-img-div">
        <img src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/5298bac0-b8bf-4c80-af67-725c1272dbb0/dcvqzzo-079fc1d0-1d41-4add-a0f6-a32018b7c17d.jpg/v1/fill/w_1192,h_670,q_70,strp/2018_movie_posters__8th_edition_by_thekingblader995_dcvqzzo-pre.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTA4MCIsInBhdGgiOiJcL2ZcLzUyOThiYWMwLWI4YmYtNGM4MC1hZjY3LTcyNWMxMjcyZGJiMFwvZGN2cXp6by0wNzlmYzFkMC0xZDQxLTRhZGQtYTBmNi1hMzIwMThiN2MxN2QuanBnIiwid2lkdGgiOiI8PTE5MjAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.3Z-pjudO8DU8ebkq5_mDqnZE6ogWTD7_jxj3xY_1VEo" alt="" className="intro-img" />
      </div>
      <div className="content-area flex">



        <section className="about-desc ">
          <h1>About Movie Catalog site</h1>
          <p>
            Movie Catalog website contains detailed information about each movie, including the title, year of release, cast and crew, plot summary, rating, and more. The database is typically organized in a way that allows users to search and filter movies based on various criteria, such as genre, release year, and rating.
            <br /><br />
            The search and navigation features of a movie catalog website are critical for users to find the movies they are interested in. Users should be able to search for movies by title, actor, director, genre, or any other relevant criteria.
            <br /><br />
            A watchlist feature allows users to save movies they want to watch later. This feature can help users keep track of movies they are interested in but may not have time to watch immediately.
          </p>
        </section>

        <Details />










      </div>
    </>
  )
}

export default About