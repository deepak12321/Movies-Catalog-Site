import React, { useContext, useEffect, useState } from "react";

const LINK = `http://www.omdbapi.com/?&apikey=77cc3623&s=`;


const AppContext = React.createContext();
const AppProvider = ({ children }) => {


    const [movie, setMovie] = useState([]);
    const [search, setSearch] = useState("avengers");
    // console.log("the data is being fetched");

    const fetchMovie = async (link) => {
        try {
            const res = await fetch(`${link}${search}`);
            const data = await res.json();
            setMovie(data.Search);
            // console.log(data);
            // console.log(data.Search);
            // console.log(movie);
            // setIsLoading(false);


        } catch (error) {
            console.log(error);
        }

    }


    useEffect(() => {
        fetchMovie(LINK);
    }, [search]);

    return <AppContext.Provider value={{ movie, search, setSearch }}>
        {children}
    </AppContext.Provider>
}


export { AppContext, AppProvider };




//importing it in any component
// import {useGlobalContext} from "path"
//inside finction ====>>   const data = useGlobalContext();
