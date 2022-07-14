import React, { useState,useEffect } from 'react';
//  import { Link } from 'react-router-dom';
import axios from "./axios";
import "./Row.css";
// import Youtube from "react-youtube";
// import movieTrailer from "movie-trailer";
 
import { useNavigate } from "react-router-dom";
import { useDispatch } from 'react-redux';
import {setProducts}  from './redux/actions/productActions';
 
 
 

const base_url = "https://image.tmdb.org/t/p/original/";     // it is the url where all the poster will find 

 function Row({title,fetchUrl,isLargeRow}) {
        const dispatch = useDispatch();
        const [movies, setMovies] = useState([]); 
             //  this is the way you declare a variable  using react hooks  in usestate give it a initial value that is empty array []   for using useState we can add useState in import react 
     // a  snippt  of code which runs based on spacific condition and variable  after runing the useeffect   movie can be loaded on the app console 
      // const [trailerUrl , setTrailerUrl ] = useState("");
    useEffect(() => {                 //  in this comp we use axios   so import axios 
        async function fetchData(){
          try {
            const request = await axios.get(fetchUrl);
            // we get this https://api.themoviedb.org/3/foo-bar/ trending / all / week ? api_key = ${API_KEY} & language=en-US
            //  console.log(request.data.results);  
            if(request.data.results!== null||request.data.results !== undefined){
              setMovies(request.data.results);    // what data str we get
              
            }
            dispatch(setProducts(request.data));
            return request;
          } catch (error) {
             console.log(error);
          }
        }
        fetchData();   
    }, [dispatch,fetchUrl]);   //  if [] ,  this tell that run ones when the row loads   don't run again     hear fetcthurl is use in this fxn input parameter   becuase  would't render the use effect   it will be must   that combine with async     
    //  console.table(movies);   // due to this all the rows of movie are seprate

  

    //    creating option of trailer 
    // const opts ={
    //     height: "390",
    //     width: "100%",
    //     playerVars:{
    //         // https://developers.google.com/youtue/player_parameters
    //         autoplay:1,    
    //     },
    // };

    // handle the trailer 
    
    const navigate = useNavigate();

    const handleClick = (movie) =>{
      navigate(`/movie/${movie.id}`);
      //  if(trailerUrl){
      //      setTrailerUrl("");
      //  }
      //  else{
      //      movieTrailer((movie?.title || movie?.name || movie?.original_name || ""), { id: true, multi: true })
      //        .then((url) => {
      //          // https://www.youtube.com/watch?v=XtMThy8QkqU
      //          url = (`https://www.youtube.com/watch?v=${url}`);
      //         //  console.log(url);

      //          const urlParams = new URLSearchParams(new URL(url).search);
      //          setTrailerUrl(urlParams.get("v"));
      //         //  console.log(urlParams);
      //         //  console.log(trailerUrl);
              
      //        })
      //        .catch((error) => console.log(error.message)); 
      //  }
      
    };
     
     
      
 
    return (
      <div className="row">
        <h1>{title}</h1>

        <div className="row_posters">
          {/* severl row poster (s) */}

          {movies.map((movie) => (
            <> 
              <img
                key={movie.id}
                onClick={() => handleClick(movie)}
                className={`row_poster ${isLargeRow && "row_posterLarge"}`}
                src={`${base_url}${
                  isLargeRow ? movie.poster_path : movie.backdrop_path
                }`}
                alt={movie.name}
              />
            </>
          ))}
        </div>
        {/* {trailerUrl && <Youtube videoId={trailerUrl} opts={opts} />} */}
      </div>
    );
}
 
 export default Row;
 
