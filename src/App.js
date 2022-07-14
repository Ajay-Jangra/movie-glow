import React,{useEffect} from 'react';
import { Routes,Route } from "react-router-dom";
import { auth } from './firebase.js';
import HomeScreen from "./screens/HomeScreen.js";
import {useDispatch,useSelector} from 'react-redux';
import { login, logout, selectUser } from "./redux/reducers/userSlice.js";
// import { login, logout , selectUser } from "./features/userSlice.js";


import LoginScreen from './screens/LoginScreen.js';
import ProfileScreen from "./screens/ProfileScreen";
import MoviesDetails from './screens/MoviesDetails';
import SearchMovie from "./Search/SearchMovie.js";
import FavouriteMoviesList from './Search/FavouriteMoviesList.js';
 
const  App =()=> {
  
  // const user = useSelector(selectUser);
  const user = useSelector(selectUser);
  // console.log(user);
  const dispatch = useDispatch();

  useEffect(()=>{
  const unsubscribe = auth.onAuthStateChanged(userAuth=>{
    if(userAuth){
      //Logged in
  
      dispatch(login({
        uid:userAuth.uid,
        email:userAuth.email,
      }));
    }
    else{
      // Logged out
      dispatch(logout());
    }
  });

   return unsubscribe;

  }, [dispatch])
  



   
  return (
    <div>
      {!user ? (
        <LoginScreen />
      ) : (
        <Routes>
          <Route exact path="/" element={<HomeScreen />} />
          <Route path="/profile" element={<ProfileScreen />} />
          <Route path="/movie/:movieId" element={<MoviesDetails />} />
            <Route path="/search" element={<SearchMovie />} />
            <Route path="/fav" element={<FavouriteMoviesList/>} />
          <Route path="*" element={<HomeScreen />} />
        </Routes>
      )}
    </div>
  );
}

export default App;
