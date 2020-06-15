import React, { useState } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";

import SavedList from './Movies/SavedList';
import MovieList from "./Movies/MovieList";
import Movie from "./Movies/Movie";

const App = () => { //why can't I put export default here?
  const [savedList, setSavedList] = useState( [] );
  const [movieList, setMovieList] = useState(); //is this in the correct spot?

  const addToSavedList = movie => {
    setSavedList( [...savedList, movie] );
  };

  return (
    <Router>
      <Route exact path = "/"><MovieList></MovieList></Route>
      <Route path = "/movies/:id"><Movie></Movie></Route>
    </Router>
  );
};

export default App;

