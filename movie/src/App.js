// import logo from './logo.svg';
// import './style/app.css';
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AppProvider } from "./components/FetchData";
import About from "./screens/About";
import Desc from "./screens/Desc";
import Favourite from "./screens/Favourite";
import Movie from "./screens/Movie";
function App() {
  return (
    <AppProvider>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<About />} />
          <Route exact path="/movie" element={<Movie />} />
          <Route exact path="/favourite" element={< Favourite />} />
          <Route exact path="/movie/:id" element={< Desc />} />
        </Routes>
      </BrowserRouter>
    </AppProvider>
  );
}

export default App;
