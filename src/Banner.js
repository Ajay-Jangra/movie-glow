import React,{useState,useEffect} from 'react';

import axios from './axios' ;    // remember postman kind thing

import requests from './Requests';
import "./Banner.css";
function Banner() {
    // first we need request   usestate is responsible for whatever  random movie gets selected at the top
    const [movie, setMovie]= useState([]);
    
//    useEffect is a peace of code which runs based on a given condition so in this case we want this run once when the Banner component load
// asynchronous function which makes a call to external api      
// fetchData    fetching the data
 useEffect(() => {
     async function fetchData(){
      const request = await axios.get(requests.fetchActionMovies)
        setMovie(
          request.data.results[
          Math.floor(Math.random()*request.data.results.length)
          ]
        );
        return request;
    }
     fetchData();
 }, []);


 // stackoverflow
// {/* truncate just  set  read more ............ */}
  function truncate(str,n){
      return str?.length>n?str.substr(0,n-1)+"...":str;
  }
    return (
        <header className ="banner"
        style = {{
            backgroundSize:"cover",
            backgroundImage: `url(
                "https://image.tmdb.org/t/p/original/${movie?.backdrop_path}"
            )`,
            backgroundPosition: "center center",
         }}
        >   { /*<<< backgroung image */}
            <div className ="banner_contents">
                    {/* title */}
                <h1 className="banner_title">{movie?.title || movie?.name || movie?.orignal_name }</h1>
            
            
              <div className = "banner_buttons">
                    {/* div > 2 buttons */}
                <button className = " banner_button">Play</button>
            
                <button className = " banner_button">My List</button>
              </div>
            
              {/* description */}
              <p className= "banner_description">
                  {/* {movie?.overview} */}
                {/* truncate just  set  read more ............ */}
                    {truncate(movie?.overview,150)}   
               </p>
            </div>
            <div className="banner--fadeBottom" />
        </header>
    )
}

export default Banner
