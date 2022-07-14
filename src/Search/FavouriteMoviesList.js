 

import React from "react";
// import { useSelector } from "react-redux";
// import { useNavigate } from "react-router-dom";
 

export default function FavouriteMoviesList() {
    // const favorites = useSelector((state) => state.allProducts.products);
//  console.log(favorites);
    
    // const navigate = useNavigate();
    // const goToDetailsFromSearch = (movie) => {
    //     navigate(`/movie/${movie.id}`);
    // }
    // const base_url = "https://image.tmdb.org/t/p/original//";

    return (
       
         <div className='searchMovieMainDiv'>
          {/* {favorites ? (favorites.map((movie, index) => (
            <div className='searchMovieResult'>
              <img src={`${base_url}${movie.poster_path}`} alt='movie' className='searchMovieImage' onClick={()=>goToDetailsFromSearch(movie)}></img>
              <h4>{movie.title}</h4>
            </div>
          ))
          ) : (<>
            <center>....Loading</center>
          </>)
          } */}
        </div>
    );
}